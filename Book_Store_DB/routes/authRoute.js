const express = require("express");
const {
  validateUser,
  validateAuthUser,
} = require("../middlewares/validateData");
const {
  handleRegisterUser,
  handleUserLogin,
} = require("../controller/authController");

const router = express.Router();

router.route("/register").post(validateUser, handleRegisterUser);
router.route("/login").post(validateAuthUser, handleUserLogin);

module.exports = router;
