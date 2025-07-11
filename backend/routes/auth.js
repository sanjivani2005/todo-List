const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt'); // ✅ Correct import

// SIGN IN (Register)
router.post("/register", async (req, res) => {
  try {
    const { title, body, password } = req.body;

    // Validation
    if (!title || !body || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Hash the password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with hashed password
    const newUser = new User({
      title,
      body,
      password: hashedPassword,
    });

    // Save user to MongoDB
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.error("Registration error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

