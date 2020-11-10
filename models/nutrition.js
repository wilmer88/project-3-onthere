const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NutritionSchema = new Schema({
  meal_name: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  description: {
    type: string,
    required: true
  },
  
});

const Nutrition = mongoose.model("nutrition", NutritionSchema);

module.exports = Nutrition;