const mongoose = require('mongoose');

const sellingPointInfoComponentSchema = new mongoose.Schema({
  viewMoreText: {
    type: String,
    required: true
  },
  limitCnt: {
    type: Number,
    required: true
  },
  viewLessText: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

const SellingPointInfoComponent = mongoose.model('SellingPointInfoComponent', sellingPointInfoComponentSchema);

module.exports = SellingPointInfoComponent;
