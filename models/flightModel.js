const mongoose = require('mongoose');
const flightSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  originCity: {
    type: String,
    required: true,
    trim: true,
  },
  destinationCity: {
    type: String,
    required: true,
    trim: true,
  },
  departureDate: {
    type: String,
    required: true,
    trim: true,
  },
  departureTime: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('flight', flightSchema);