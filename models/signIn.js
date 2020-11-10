const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SignInSchema = new Schema({
  full_name: {
    type: String,
    
    required: "full name is Required"
  },

  password: {
    type: String,
    
    required: "passwor is Required"
  },

  email: {
    type: String,
    required: "email is Required"
  },
});

const SignIn = mongoose.model("SignIn", SignInSchema);

module.exports = SignIn;
