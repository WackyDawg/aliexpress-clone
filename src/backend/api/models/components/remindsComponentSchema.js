const mongoose = require('mongoose');

const remindSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const remindsComponentSchema = new mongoose.Schema({
  reminds: [remindSchema]
});

const RemindsComponent = mongoose.model('RemindsComponent', remindsComponentSchema);

module.exports = RemindsComponent;
