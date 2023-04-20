const { sendBudgetConfirmation } = require("../config/mailer.config");
const Budget = require("../models/Budget.model");
const User = require("../models/User.model");

module.exports.create = (req, res, next) => {
  const { camper, selectedExtras } = req.body;

  Budget.create({ camper, extras: selectedExtras, user: req.currentUserId })
    .then((budget) => {
      User.findById(req.currentUserId).then((user) => {
        sendBudgetConfirmation(user.email);
        res.json(budget);
      });
    })
    .catch(next);
};
