const express = require('express');
const mongoose = require('mongoose');

const app = express();

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/todoList', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
  }
};

// Call the DB connection
connectDB();

// Middleware (if any)
app.use(express.json());

// Your routes here...

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
