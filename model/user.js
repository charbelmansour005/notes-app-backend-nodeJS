const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter your email address."],
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password."],
    minlength: 13,
  },
  name: {
    type: String,
    required: [true, "Please enter your name."],
  },
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
