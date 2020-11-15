const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NutritionSchema = new Schema({
  meal_name: {
    type: String,
    
    required: "meal name is Required"
  },

  ingridients: {
    type: String,
    requeire: "description is Required"
  },

  description: {
    type: String,
    requeire: "description is Required"
  },

  calories: {
    type: String,
    requeire: "calories is Required"
  },

});

const Nutrition = mongoose.model("nutrition", NutritionSchema);

module.exports = Nutrition;
