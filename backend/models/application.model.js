const mongoose = require("mongoose");
const { Schema } = mongoose;

const applicationSchema = new Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: [
      "pending", // when a application is pending
      "accepted", // when a application is accepted
      "rejected", // when a application is rejected
      "finished", // when job is over
    ],
    default: "pending",
  },
});

exports.Application = mongoose.model("Application", applicationSchema);
