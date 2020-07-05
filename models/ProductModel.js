const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  pid: { type: String, required: true },
  name: { type: String, required: true },
  price: Number,
  category: Array,
  purity: {
    value: Number,
    unit: String
  },
  sub_category: String,
  gender: String,
  gross_weight: {
    value: Number,
    unit: String
  },
  net_weight: {
    value: Number,
    unit: String
  },
  diamond_info: {
    pieces: Number,
    weight: {
      value: Number,
      unit: String
    },
    quality: String,
    color: String,
    shape: String
  },
  color_stone_info: {}
});

module.exports = mongoose.model("product", ProductSchema);
