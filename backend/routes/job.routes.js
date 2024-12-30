const express = require("express");
const jobController = require("../controller/job.controller");
const { isAuthenticated } = require("../middleware/isAuthenticated");
const router = express.Router();

router
  .post("/job/create",isAuthenticated, jobController.createJob)
  .get("/", isAuthenticated, jobController.getAllJobs)
  .get("/job/:id", isAuthenticated, jobController.getJobById)
  .get("/created-jobs", isAuthenticated, jobController.getCreatedJob)

exports.router = router;
