const mongoose = require('mongoose');

const videoComponentSchema = new mongoose.Schema({
  approved: {
    type: Boolean,
    required: true,
  },
  videoEnv: {
    type: String,
    required: true,
  },
  videoUid: {
    type: String,
    required: true,
  },
  videoId: {
    type: Number,
    required: true,
  },
});

const VideoComponent = mongoose.model('VideoComponent', videoComponentSchema);

module.exports = VideoComponent;
