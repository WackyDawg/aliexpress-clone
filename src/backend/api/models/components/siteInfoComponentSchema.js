const mongoose = require('mongoose');

const siteInfoComponentSchema = new mongoose.Schema({
  wholesaleSubServer: {
    type: String,
    required: true
  },
  crawler: {
    type: Boolean,
    required: true
  },
  siteType: {
    type: String,
    required: true
  }
});

const SiteInfoComponent = mongoose.model('SiteInfoComponent', siteInfoComponentSchema);

module.exports = SiteInfoComponent;
