const mongoose = require("mongoose");
const { Job } = require("../models/job.model");

// for customer..
exports.createJob = async (req, res) => {
  try {
    const {
      date,
      startTime,
      endTime,
      proposedFees,
      problemDesc,
      image,
      category,
    } = req.body;
    const userId = req.id;
    if (
      !date ||
      !startTime ||
      !endTime ||
      !proposedFees ||
      !problemDesc ||
      !image ||
      !userId ||
      !category
    ) {
      return res.status(400).json({
        message: "Something is missing!!",
        success: false,
      });
    }
    const job = await Job.create({
      date,
      startTime,
      endTime,
      proposedFees: Number(proposedFees),
      problemDesc,
      image,
      createdBy: userId,
      category: categoryId,
    });
    return res.status(200).json({
      message: "New job created successfully.",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// for all..
exports.getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query)
      .populate([{ path: "categoryId" }, { path: "createdBy" }, {path: "applications"}])
      .sort({ createdAt: -1 })
      .exec();
    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found!!",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// for all..
exports.getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate([
      {
        path: "createdBy",
      },
      {
        path: "categoryId",
      },
    ]);
    if (!job) {
      return res.status(404).json({
        message: "Job not found!!",
        success: false,
      });
    }
    return res.status(200).json({ job, success: true });
  } catch (error) {
    console.log(error);
  }
};

// for admin..
exports.getCreatedJob = async (req, res) => {
  try {
    const customerId = req.id;
    const job = await Job.find({ createdBy: customerId });
    if (!job) {
      return res.status(404).json({
        message: "Job not found!!",
        success: false,
      });
    }
    return res.status(200).json({ job, success: true });
  } catch (error) {
    console.log(error);
  }
};
