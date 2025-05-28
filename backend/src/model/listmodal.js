const mongoose = require('mongoose');
const collection = require('../config/collection');

const threatSchema = new mongoose.Schema({
  url: { type: String, required: true },
  // threatscore:{ type: String, required: true },
  
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model(collection.list, threatSchema);