const Testimonial = require("../models/Testimonial.model");

module.exports.create = (req, res, next) => {
  const { text, rating, camper } = req.body;

  Testimonial.create({ text, user: req.currentUserId, rating, camper })
    .then((testimonial) => {
      res.json(testimonial);
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  const { id } = req.params;

  Testimonial.findById(id)
    .then((Testimonial) => {
      res.json(Testimonial);
    })
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Testimonial.find()
    .populate("camper user")
    .then((testimonials) => {
      res.json(testimonials);
    })
    .catch(next);
};
