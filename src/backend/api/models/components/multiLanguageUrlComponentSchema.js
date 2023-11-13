const mongoose = require('mongoose');

const languageUrlSchema = new mongoose.Schema({
  language: String,
  languageUrl: String,
});

const multiLanguageUrlComponentSchema = new mongoose.Schema({
  storeMultilanguageUrlList: [languageUrlSchema],
  storeDetailUrl: String,
  multilanguageUrlList: [languageUrlSchema],
  itemDetailUrl: String,
  mSiteUrl: String,
});

const MultiLanguageUrlComponent = mongoose.model('MultiLanguageUrlComponent', multiLanguageUrlComponentSchema);

module.exports = MultiLanguageUrlComponent;
