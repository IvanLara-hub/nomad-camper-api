const mongoose = require("mongoose");

const extraSchema = new mongoose.Schema({
  camperSize: {
    type: String,
    enum: ["MEDIUM", "BIG_SIZE", "CARAVAN"],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: [0, "only positive prices"],
    required: true,
  },
});

const Extra = mongoose.model("Extra", extraSchema);
module.exports = Extra;
