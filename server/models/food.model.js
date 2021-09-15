const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({});

module.exports = mongoose.model("Food", FoodSchema);
