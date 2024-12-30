const express = require("express");
const categoryController = require("../controller/categories.controller");
const { isAuthenticated } = require("../middleware/isAuthenticated");
const router = express.Router();

router
   .post("/category/create",isAuthenticated, categoryController.createCategory)
  .get("/", categoryController.getAllCategories)
  .get("/category/:id", categoryController.getCategoryById)  

exports.router = router;
