const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Example: Register or find social user
router.post("/login", async (req, res) => {
  const { name, email, photo, provider } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email, photo, provider });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
