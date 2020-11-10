const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SignInSchema = new Schema({
  full_name: {
    type: String,
    trim: true,
    required: "String is Required"
  },

password: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  }
});

const SignIn = mongoose.model("SignIn", SignInSchema);

module.exports = SignIn;