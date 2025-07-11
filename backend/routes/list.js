const router = require("express").Router();
const User = require('../models/user');
const List = require('../models/list');

router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create new task/list
    const list = new List({
      title,
      body,
      user: existingUser._id,
    });

    // Save the task
    await list.save().then(()=>res.status(200).json{(list)});

    // Push task to user's list and save user
    existingUser.lists.push(list._id);
    await existingUser.save();

    res.status(201).json({ message: "Task added successfully", task: list });
  } catch (error) {
    console.error("Error adding task:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
