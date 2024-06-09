const mongoose = require("mongoose");

const ClothSchema = new mongoose.Schema({
  image_url: { type: String },
  cloth_name: { type: String },
  price: { type: Number },
  size: { type: String },
});

const ClothTable = mongoose.model("Cloth", ClothSchema, "clothes");

module.exports = ClothTable;
