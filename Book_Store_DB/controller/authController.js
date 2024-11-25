const User = require("../models/userModel");
const _ = require("lodash");
const bcrypt = require("bcrypt");

const handleRegisterUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).json({ error: "user already registered." });

  const newUser = _.pick(req.body, ["name", "email", "password", "role"]);
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
  user = new User(newUser);
  await user.save();
  const token = user.generateAuthToken();
  res
    .header({ "x-auth-token": token })
    .status(201)
    .json({ message: "User registred successfully." });
};

const handleUserLogin = async (req, res) => {
  // console.log(
  //   "User List -----",
  //   await User.find({})
  // );
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).json({ error: "Email and Password Invalid." });

  const validatePassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!validatePassword)
    return res.status(400).json({ error: "Email and Password Invalid." });

  const token = user.generateAuthToken();

  res.status(200).json({
    message: "User login successfully.",
    user: await User.find({}),
    token,
  });
};

module.exports = { handleRegisterUser, handleUserLogin };
