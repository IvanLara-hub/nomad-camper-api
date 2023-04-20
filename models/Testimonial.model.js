const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  img: {
    type: String,
    default: "URL",
    required: true,
  },
  camper: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Camper",
    required: true,
  },
});

const Testimonial = mongoose.model("Testimonial", TestimonialSchema);
module.exports = Testimonial;
