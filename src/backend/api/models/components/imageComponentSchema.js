const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageComponentSchema = new Schema({
  image250PathList: [String],
  imagePathList: [String],
  image640PathList: [String],
  imageExist: Boolean,
  imageServer: String,
  summImagePathList: [String]
});

const ImageComponent = mongoose.model('ImageComponent', imageComponentSchema);

module.exports = ImageComponent;
