const express = require("express");
const router = express.Router();
const applicationController = require("../controller/application.controller");
const { isAuthenticated } = require("../middleware/isAuthenticated");

router
  .get("/response/:id", isAuthenticated, applicationController.jobResponse)
  .get("/responded-jobs", isAuthenticated, applicationController.getRespondedJobs)
  .get("/:id/applicants", isAuthenticated, applicationController.getApplicants)
  .post("/status/:id/update", isAuthenticated, applicationController.updateStatus)

exports.router = router;
