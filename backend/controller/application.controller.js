const mongoose = require("mongoose");
const { Application } = require("../models/application.model");
const { Job } = require("../models/job.model");

exports.jobResponse = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({
        message: "JobId is required.",
        success: false,
      });
    }
    //  check if user had already respond the job..
    const existingResponse = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingResponse) {
      return res.status(400).json({
        message: "You have already resond in this job.",
        success: false,
      });
    }
    //  Check if the jobs exists..
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Jobs not Found!!",
        success: false,
      });
    }
    //  create a new Job Response..
    const newJobResponse = await Application.create({
      job: jobId,
      applicant: userId,
    });
    job.applications.push(newJobResponse._id);
    await job.save();
    return res.status(201).json({
      message: "Job responded successfully.",
      // job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getRespondedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const respondedJob = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
           path: "categoryId",
           options: { sort: { createdAt: -1 } },
        },
      });
      if(!respondedJob){
         return res.status(404).json({
            message: "There is no any Responded Jobs!!",
            success: false,
         });
      }; 
      return res.status(200).json({
         respondedJob,
         success: true,
      });
  } catch (error) {
    console.log(error);
  };
};

// customer and admin can see how many applicants have responded the posted job.. 
exports.getApplicants = async (req, res) => {
   try {
      const jobId = req.params.id;
      const job = await Job.findById(jobId).populate({
         path: "applications",
         options: {sort:{createdAt: -1}},
         populate: {
            path: "applicant",
            options: {sort:{createdAt: -1}},
         },
      });
      if(!job){
         return res.status(404).json({
            message: 'Job not Found!!',
            success: false,
         });
      };
      return res.status(200).json({
         job,
         success: true,
      });
   } catch (error) {
      console.log(error);
   };
};

exports.updateStatus = async (req, res) => {
   try {
      const {status} = req.body;    
      const applicationId = req.params.id;
      if(!status){
         return res.status(400).json({
            message: "Status is Required.",
            success: false,
         });
      };
      // find the application by applicayion id..
      const application = await Application.findOne({_id: applicationId});
      if(!application){
         return res.status(404).json({
            message: "Application not Found!!",
            success: false,
         });
      };
      // update the status..
      application.status = status.toLowerCase();
      await application.save();

      return res.status(200).json({
         message: 'Status updated successfully.',
         success: true,
      });
      
   } catch (error) {
      console.log(error);
   };
};