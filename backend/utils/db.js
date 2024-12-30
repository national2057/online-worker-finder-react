const mongoose = require("mongoose");

// connectDB().catch((err) => console.log(err));      // Initialize in index.js page

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected successfully.");
//   }
//   catch (error) {
//     console.log(error);
//   }
// };

async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected successfully.");
}

module.exports = { connectDB };
