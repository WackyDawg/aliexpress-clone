const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  adultCertificationStatus: {
    type: Number,
    required: true
  }
});

const Buyer = mongoose.model('Buyer', buyerSchema);

module.exports = Buyer;
