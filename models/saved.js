const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SavedSchema = new Schema({
  meal_name: {
    type: String,
    
    required: "meal name is Required"
  },

  ingridients: {
    type: String,
    requeire: "ingridients is Required"
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

const Saved = mongoose.model("saved", SavedSchema);

module.exports = Saved;
