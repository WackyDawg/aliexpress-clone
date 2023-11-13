const mongoose = require('mongoose');

const blacklistComponentSchema = new mongoose.Schema({
  inBlackList: Boolean
});

const BlacklistComponent = mongoose.model('BlacklistComponent', blacklistComponentSchema);

module.exports = BlacklistComponent;
