const express = require('express');
const connectDB = require('./config/database');
const groupRoutes = require('./routes/groupRoutes');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

require('dotenv').config();

connectDB();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', groupRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
