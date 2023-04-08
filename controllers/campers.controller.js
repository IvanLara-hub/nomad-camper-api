const Camper = require("../models/Camper.model");

module.exports.create = (req, res, next) => {
  const {
    category,
    name,
    img,
    slug,
    equipment,
    description,
    compatibleVehicles,
    price,
  } = req.body;

  Camper.create({
    category,
    name,
    img,
    slug,
    equipment,
    description,
    compatibleVehicles,
    price,
  })
    .then((camper) => {
      res.json(camper);
    })
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Camper.find() 
    .then((campers) => {
      res.json(campers);
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  const { slug } = req.params;

  Camper.find({ slug: slug })
    .populate("extras")
    .then((camper) => {
      res.json(camper[0]);
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  const { id } = req.params;

  Camper.findByIdAndDelete(id)
    .then((camper) => {
      res.json(camper);
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  const { id } = req.params;

  Camper.findByIdAndUpdate(id, req.body, { new: true })
    .then((camper) => {
      res.json(camper);
    })
    .catch(next);
};
