const mongoose = require('mongoose');

const packageComponentSchema = new mongoose.Schema({
  inch_length: String,
  lot: Boolean,
  unitType: String,
  length: Number,
  lotNum: String,
  width: Number,
  inch_height: String,
  weight: Number,
  pound_weight: String,
  packageType: String,
  height: Number,
  inch_width: String
});

const PackageComponent = mongoose.model('PackageComponent', packageComponentSchema);

module.exports = PackageComponent;
