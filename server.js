const express = require('express');
const connectDB = require('./config/database');
const groupRoutes = require('./routes/groupRoutes');
const cors =require("cors")
const app = express();
const port = 3000;
require('dotenv').config()
// Connect to MongoDB
connectDB();
app.use(cors())
// Middleware to parse JSON
app.use(express.json())

// Define routes
app.use('/api', groupRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
