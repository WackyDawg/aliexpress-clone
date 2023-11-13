const mongoose = require('mongoose');

const choiceAtmosphereComponentSchema = new mongoose.Schema({
  serviceBlockIcon: {
    type: { type: String, required: true },
    value: { type: String, required: true }
  },
  logisticsBlockIcon: {
    type: { type: String, required: true },
    value: { type: String, required: true }
  }
});

const ChoiceAtmosphereComponent = mongoose.model('ChoiceAtmosphereComponent', choiceAtmosphereComponentSchema);

module.exports = ChoiceAtmosphereComponent;
