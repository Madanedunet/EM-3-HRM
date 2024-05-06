const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/projectDB')
  .then(() => {
    console.log('MongoDB connected successfully');
    // Your code here
  })
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;