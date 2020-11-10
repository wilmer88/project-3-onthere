const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechniqueSchema = new Schema({
  dicipline: {
    name: String,
    trim: true,
    required: "dicipline is Required"
  },

  name: {
    type: String,
    unique:true,
    required: "Name is Required"
  },

  difficulty: {
    type: String,
    
  },

  enhances: {
    type: String,
    
  },

  learned: {
    type: Boolean,
    default: false
    
  }
  


});

const Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;