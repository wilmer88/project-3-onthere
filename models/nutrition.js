const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NutritionSchema = new Schema({
  meal_name: {
    type: String,
    trim: true,
    required: "meal name is Required",
  },

  description: {
    type: string,
    requeire: "description is Required",
  },
});

const Nutrition = mongoose.model("nutrition", NutritionSchema);

module.exports = Nutrition;
