const mongoose = require('mongoose');

const webLongImageComponentSchema = new mongoose.Schema({
  showLongImage: Boolean,
});

const WebLongImageComponent = mongoose.model('WebLongImageComponent', webLongImageComponentSchema);

module.exports = WebLongImageComponent;

