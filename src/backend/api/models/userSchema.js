const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // OAuth details
  oauth: {
    provider: {
      type: String,
      enum: ['local', 'google', 'facebook'], // Add other providers as needed
      default: 'local'
    },
    providerId: {
        type: String,
    },
    accessToken: {
        type: String,
    },
    refreshToken: {
        type: String,
    } ,
    // Add additional OAuth-related fields as needed
  },
  avartar: {
    type: String,
  },
  // Other user details
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String
    // Add more address fields as needed
  },
  // Additional user details can be added based on your requirements

  // Timestamps to track when the user was created and last updated
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
