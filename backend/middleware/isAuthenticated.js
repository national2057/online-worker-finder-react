const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  try {
    // Check for token in cookies
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated.",
        success: false,
      });
    }

    // Verify token
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token.",
        success: false,
      });
    }

    // Attach userId to request object
    req.id = decoded.userId;
    next();

  } catch (error) {
    // Handle any errors
    console.log(error);
    return res.status(500).json({
      message: "Internal server error.",
      success: false,
    });
  }
};

// Export the middleware
module.exports = { isAuthenticated };
