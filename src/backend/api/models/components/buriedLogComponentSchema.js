const mongoose = require('mongoose');

const buriedLogComponentSchema = new mongoose.Schema({
  buriedData: {
    type: String,
    required: true,
  },
  priceCenterBuriedData: {
    type: String,
    required: true,
  },
  choice3: {
    type: Boolean,
    required: true,
  },
});

const BuriedLogComponent = mongoose.model('BuriedLogComponent', buriedLogComponentSchema);

module.exports = BuriedLogComponent;
