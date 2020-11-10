const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechniqueSchema = new Schema({
  dicipline: {
    name: String,
    trim: true,
    required: "String is Required"
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

  learnd: {
    type: Boolean,
    default: false
    
  }
  


});

const Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;