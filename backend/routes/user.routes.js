const express = require("express");
const userController = require("../controller/user.controller");
const { isAuthenticated } = require("../middleware/isAuthenticated");
const { singleUpload } = require("../middleware/multer");
const { isAdmin } = require("../middleware/isAdmin");
const router = express.Router();

router
  .post("/admin/register", userController.registerAdmin)
  .post("/user/register", singleUpload, userController.registerUser)
  .post("/user/login", isAdmin, userController.loginUser)
  .post("/user/profile/update", isAuthenticated, singleUpload, userController.updateProfile)
  .post("/user/logout", userController.logoutUser)
//   .post("/", userController.createUser)
  .get("/", userController.getAllUsers)
  .get("/user/:id", userController.getUserById)
  .patch("/user/:id", userController.updateUser)
  .delete("/user/:id", userController.deleteUser);

exports.router = router;
