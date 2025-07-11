const express = require('express');
const app = express();
require('./conn/conn'); // Make sure this file connects to MongoDB

const auth = require('./routes/auth');
const list = require('./routes/list');

app.use(express.json()); // Middleware to parse JSON bodies

// Dummy route (optional)
app.put('/update', (req, res) => {
    res.send('Hello');
});

// Register routes
app.use('/api/v1', auth);
app.use("/api/v",list);

// Start server
app.listen(3000, () => {
    console.log('🚀 Server is running on port 3000');
});
