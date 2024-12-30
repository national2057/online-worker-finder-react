const mongoose = require("mongoose"); // Ensure Mongoose is imported
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");
const getDataUri = require("../utils/dataUri");
const cloudinary = require("../utils/cloudinary");

// // Register..
// exports.registerUser = async (req, res) => {
//   try {
//     const { fullName, email, phone, password, role } = req.body;
//     console.log(fullName, email, phone, password, role);

//     if (!fullName || !email || !phone || !password || !role) {
//       return res.status(400).json({
//         message: "Something is missing!!!",
//         success: false,
//       });
//     }
//     const user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({
//         message: "User already exist with this email.",
//         success: false,
//       });
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await User.create({
//       fullName,
//       email,
//       phone,
//       password: hashedPassword,
//       role,
//     });
//     return res.status(201).json({
//       message: "Account created successfully.",
//       success: true,
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: "Failed to register user.",
//       success: false,
//       error: error.message,
//     });
//   }
// };

// Register..
exports.registerUser = async (req, res) => {
  try {
    const { fullName, email, phone, address, password, role } = req.body;
    if (!fullName || !email || !phone || !address || !password || !role) {
      return res.status(400).json({
        message: "Something is missing!!!",
        success: false,
      });
    }

    const file = req.file;
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist with this email.",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullName,
      email,
      phone,
      address,
      password: hashedPassword,
      role,
      profile: {
        profilePhoto: cloudResponse.secure_url,
      },
    });
    return res.status(201).json({
      message: "Account created successfully.",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to register user.",
      success: false,
      error: error.message,
    });
  }
};

// Login..
exports.loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing!!",
        success: false,
        error: error.message,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).status({
        message: "Incorrect credentials.",
        success: false,
        error: error.message,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).status({
        message: "Incorrect password.",
        success: false,
        error: error.message,
      });
    }

    // check role is correct or not..
    if (role !== user.role) {
      return res.status(400).json({
        message: "Account doesn't exist with current role.",
        success: false,
        error: error.message,
      });
    }

    // token generate..
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      address: user.address,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome ${user.fullName}`,
        user,
        success: true,
      });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
      success: false,
    });
  }
};

// // Update Profile..
// exports.updateProfile = async (req, res) => {
//   try {
//    const {fullName, email, phone, address, bio, category, experience} = req.body;

//    let categoryArray;
//    if(category){
//       categoryArray = category.split(',');
//    }
//    const userId = req.id;
//    let user = await User.findById(userId);

//    if(!user){
//       return res.status(400).json({
//          message: "User not Found!",
//          success: false,
//       });
//    }

//    // Updating data...
//    if(fullName) user.fullName = fullName;
//    if(email) user.email = email;
//    if(phone) user.phone = phone;
//    if(address) user.address = address;
//    if(bio) user.profile.bio = bio;
//    if(category) user.profile.category = category;
//    if(experience) user.profile.experience = experience;

//    await user.save();

//    user = {
//       _id: user._id,
//       fullName: user.fullName,
//       email: user.email,
//       phone: user.phone,
//       address: user.address,
//       role: user.role,
//       profile: user.profile,
//     };

//     return res.status(200).json({
//       message: "Profile Updated Successfully!!",
//       user,
//       success: true
//     })
//   } catch (error) {
//    console.log(error);
//   }
// };

// Update Profile..
exports.updateProfile = async (req, res) => {
  try {
    const { fullName, email, phone, address, bio, category, experience } =
      req.body;
    console.log(fullName, email, phone, address, bio, category, experience);

    const file = req.file;
    //   cloudinary comes here..
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

    let categoryArray;
    if (category) {
      categoryArray = category.split(",");
    }

    const userId = req.id;
    let user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "User not Found!",
        success: false,
      });
    }

    // Ensure `profile` exists before updating nested fields
    if (!user.profile) {
      user.profile = {}; // Initialize profile if it doesn't exist
    }

    // Updating data...
    if (fullName) user.fullName = fullName;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    if (address) user.address = address;
    if (bio) user.profile.bio = bio;
    if (category) user.profile.category = categoryArray; // Save as an array
    if (experience) user.profile.experience = experience;
    //   profilePhoto comes here..
    if (cloudResponse) {
      user.profile.profilePhoto = cloudResponse.secure_url; // save the cloudinary url
    }

    // Save the updated user
    await user.save();

    // Send a sanitized response
    const updatedUser = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      address: user.address,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      message: "Profile Updated Successfully!",
      user: updatedUser,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred while updating the profile.",
      error: error.message,
      success: false,
    });
  }
};

// Logout..
exports.logoutUser = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// Read all Users..
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users." });
  }
};

// Read User by Id..
exports.getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching user by ID." });
  }
};

// Update..
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (user) {
      res.status(200).json({ user, status: "User updated successfully." });
    } else {
      res.status(404).json({ error: "User not found." });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Error updating user." });
  }
};

// Delete..
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOneAndDelete({ _id: id });
    if (user) {
      res.status(200).json({ status: "User deleted successfully." });
    } else {
      res.status(404).json({ error: "User not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting user." });
  }
};
