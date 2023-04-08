const mongoose = require("mongoose");

const camperSchema = new mongoose.Schema(
  {
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
      required: true,
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
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

camperSchema.virtual("extras", {
  ref: "Extra",
  localField: "category",
  foreignField: "camperSize",
  justOne: false,
});

const Camper = mongoose.model("Camper", camperSchema);
module.exports = Camper;
