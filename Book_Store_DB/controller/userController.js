const User = require("../models/userModel");

const handleFetchUserProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.status(200).json(user);
};

module.exports = { handleFetchUserProfile };
