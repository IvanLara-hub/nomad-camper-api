const mongoose = require("mongoose");

const camperSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["MEDIUM", "BIG_SIZE", "CARAVAN"],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: "URL",
  },
  slug: {
    type: String,
    default: "URL",
  },
  equipment: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  compatibleVehicles: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Camper = mongoose.model("Camper", camperSchema);
module.exports = Camper;