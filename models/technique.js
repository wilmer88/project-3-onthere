const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechniqueSchema = new Schema({
  apiTechniques: [{
    diciplineName: {
      type: String,
      
      required: "dicipline name is Required"
    },
  
    techniqueName: {
      type: String,
      
      required: "technique name is Required"
    },
  
    difficulty: {
      type: String
    },
  
    enhances: {
      type: String
    },
  
    learned: {
      type: Boolean,
      default: false
    }
  }
  ]
 
});

const Technique = mongoose.model("technique", TechniqueSchema);

module.exports = Technique;
