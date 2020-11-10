const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SavedSchema = new Schema({
  dicipline: {
    name: String,
    trim: true,
    required: "dicipline is Required",
  },

  name: {
    type: String,
    unique: true,
    required: "Name is Required",
  },

  difficulty: {
    type: String,
  },

  enhances: {
    type: String,
  },

  learned: {
    type: Boolean,
    default: false,
  },
});

const Saved = mongoose.model("saved", SavedSchema);

module.exports = Saved;
