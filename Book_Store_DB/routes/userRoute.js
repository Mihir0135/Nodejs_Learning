const express = require("express");
const { handleFetchUserProfile } = require("../controller/userController");
const router = express.Router();

router.route("/myProfile").get(handleFetchUserProfile);

module.exports = router;
