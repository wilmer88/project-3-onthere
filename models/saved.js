const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SavedSchema = new Schema({
  savedTechnique: [{
    diciplineName: {
      type: String,
      
      required: "dicipline is Required"
    },
  
    techniqueName: {
      type: String,
      
      required: "Name is Required"
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

const Saved = mongoose.model("saved", SavedSchema);

module.exports = Saved;
