const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "12h" });
};
