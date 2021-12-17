const User = require("../models/user-Model");

//CONTROLLERS
exports.createAccount = async (req, res, next) => {
  const data = await User.create({});
};
exports.loginAccount = (req, res, next) => {};
