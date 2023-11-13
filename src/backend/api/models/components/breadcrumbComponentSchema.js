const mongoose = require('mongoose');

const breadcrumbPathSchema = new mongoose.Schema({
  cateId: Number,
  name: String,
  remark: String,
  url: String
});

const breadcrumbComponentSchema = new mongoose.Schema({
  categoryUrl: String,
  pathList: [breadcrumbPathSchema],
  categoryName: String
});

const BreadcrumbComponent = mongoose.model('BreadcrumbComponent', breadcrumbComponentSchema);

module.exports = BreadcrumbComponent;
