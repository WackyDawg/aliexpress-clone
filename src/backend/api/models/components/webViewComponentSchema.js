const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const webViewComponentSchema = new Schema({
  viewName: String, // Assuming "viewName" is a string
});

const WebViewComponent = mongoose.model('WebViewComponent', webViewComponentSchema);

module.exports = WebViewComponent;
