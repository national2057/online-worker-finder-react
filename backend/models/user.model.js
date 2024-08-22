const mongoose = require("mongoose");
// const {Schema} = mongoose;

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
      required: true,
    },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    password: { type: String, require: true },
    confirm_password: { type: String, require: true },
    role: { type: String, enum: ["Customer", "Worker"], require: true },
    profile: {
      bio: {type: String},
      fullName: {type: String, require: true},
      phone: {type: Number, require: true},
      category: {type: String, require: true},
      experience: {type: String },
      profilePhoto: {type: String, default: ''},
    },
  },
  { timestamps: true }
);

exports.User = mongoose.model("User", userSchema);
