const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SignInShema = new Schema({
  full_name: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  password: {
    type: string,
    required: true
  },

  email: {
    type: String,
    required: "String is Required"
  },

  
});

const SignIn = mongoose.model("signIn", SignInSchema);

module.exports = SignIn;