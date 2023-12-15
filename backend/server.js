require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// express app
const app = express();

// middleware
app.use(cors({
  origin: 'http://localhost:4000',
  methods: 'GET,PUT,POST,DELETE',
  credentials: true,
}));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/user');
app.use('/api/tasks', taskRoutes);
app.use('/api/user', userRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // listen for requests
    const port = process.env.PORT || 3000;  // Use the PORT from .env or default to 1000
    app.listen(port, () => {
      console.log('Connected to db & listening on port', port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
