const mongoose = require('mongoose');

const metaDataComponentSchema = new mongoose.Schema({
  keywords: {
    type: String,
    required: true
  },
  canonicalTag: {
    type: String,
    required: true
  },
  hreflangTag: {
    type: String,
    required: true
  },
  ogTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  mediaTag: {
    type: String,
    required: true
  },
  ogurl: {
    type: String,
    required: true
  },
  amphtmlTag: {
    type: String,
    required: true
  },
  ogDescription: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

const MetaDataComponent = mongoose.model('MetaDataComponent', metaDataComponentSchema);

module.exports = MetaDataComponent;
