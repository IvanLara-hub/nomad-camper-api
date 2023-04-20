const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  camper: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Camper",
    required: true,
  },
  extras: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Extras",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Budget = mongoose.model("Budget", budgetSchema);
module.exports = Budget;
