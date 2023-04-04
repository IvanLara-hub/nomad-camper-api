const Extra = require("../models/Extra.model");

module.exports.create = (req, res, next) => {
  const { camperSize, name, description, img, price } = req.body;

  Extra.create({ camperSize, name, description, img, price })
    .then((extra) => {
      res.json(extra);
    })
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Extra.find()
    .then((extras) => {
      res.json(extras);
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  const { id } = req.params;

  Extra.findById(id)
    .then((extra) => {
      res.json(extra);
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  const { id } = req.params;

  Extra.findByIdAndDelete(id)
    .then((extra) => {
      res.json(extra);
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  const { id } = req.params;

  Extra.findByIdAndUpdate(id, req.body, { new: true})
    .then((extra) => {
      res.json(extra);
    })
    .catch(next);
};
