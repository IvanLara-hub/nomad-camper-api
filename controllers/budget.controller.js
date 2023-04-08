const Budget = require("../models/Budget.model");

module.exports.create = (req, res, next) => {
  const { camper, extras, user } = req.body;

  Budget.create({ camper, extras, user })
    .then((budget) => {
      res.json(budget);
    })
    .catch(next);
};
