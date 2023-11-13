const mongoose = require('mongoose');

const pageSizeComponentSchema = new mongoose.Schema({
  hasNewSizeInfo: {
    type: Boolean,
    default: false
  },
  hasSizeInfo: {
    type: Boolean,
    default: false
  }
});

const PageSizeComponent = mongoose.model('PageSizeComponent', pageSizeComponentSchema);

module.exports = PageSizeComponent;
