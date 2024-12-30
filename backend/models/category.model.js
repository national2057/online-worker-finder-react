const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  image: { type: String },
  title: { type: String, required: true },
  description: { type: String },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

exports.Category = mongoose.model("Category", categorySchema);
