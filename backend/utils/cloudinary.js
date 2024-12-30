// utils/cloudStorage.js
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// Configure Cloudinary with your API keys (make sure to store these securely)
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

module.exports = cloudinary;
