const Testimonial = require("../models/Testimonial.model");

module.exports.create = (req, res, next) => {
  const {text, user, rating, camper} = req.body;

  Testimonial.create({ text, user, rating, camper })
    .then((testimonial) => {
      res.json(testimonial);
    })
    .catch(next);
};