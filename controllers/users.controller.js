const User = require("../models/User.model");
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");

module.exports.create = async (req, res, next) => {
  const { email, password, firstName, lastName, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return next(createError(StatusCodes.BAD_REQUEST, "Passwords do not match"));
  }

  try {
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    const userCreated = await User.create({
      email,
      password,
      firstName,
      lastName,
    });

    res.status(StatusCodes.CREATED).json(userCreated);
  } catch (error) {
    next(error);
  }
};

module.exports.list = (req, res, next) => {
  User.find()
    .then((users) => res.json(users))
    .catch(next);
};

module.exports.getUser = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        next(createError(StatusCodes.NOT_FOUND, "User not found"));
      } else {
        res.json(user);
      }
    })
    .catch(next);
};

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.currentUserId)
    .then((user) => {
      if (!user) {
        next(createError(StatusCodes.NOT_FOUND, "User not found"));
      } else {
        res.json(user);
      }
    })
    .catch(next);
};
