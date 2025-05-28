const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photo: String, // Optional: profile picture URL from Google/GitHub
  provider: String, // e.g., 'google', 'github'
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
