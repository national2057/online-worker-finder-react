const express = require("express");
const router = express.Router();
const applicationController = require("../controller/application.controller");
const { isAuthenticated } = require("../middleware/isAuthenticated");

router
  .get("/response/:id", isAuthenticated, applicationController.jobResponse)
  .get("/applied-jobs", isAuthenticated, applicationController.getAppliedJobs)
  .get("/responded-jobs", isAuthenticated, applicationController.getRespondedJobs)
  .get("/applicants/:id", isAuthenticated, applicationController.getApplicants)
  .post("/status/:id/update", isAuthenticated, applicationController.updateStatus)

exports.router = router;
