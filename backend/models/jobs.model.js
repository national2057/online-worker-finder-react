const mongoose = require("mongoose");

const timeValidator = {
  validator: function (v) {
    return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v); // HH:MM 24-hour format
  },
  message: (props) => `${props.value} is not a valid time!`,
};

const jobSchema = new mongoose.Schema({
  fullName: { type: String, require: true },
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
  date: { type: Date, required: true },
  startTime: { type: String, required: true, validate: timeValidator },
  endTime: { type: String, required: true, validate: timeValidator },
  proposed_fees: { type: Number, required: true },
  problems: { type: String, required: true },
  images: { type: [String], required: true },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,   
  },
});

exports.Jobs = mongoose.model("Jobs", jobSchema);
