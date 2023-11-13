const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleComponentSchema = new Schema({
    
});

const VehicleComponent = mongoose.model('VehicleComponent', vehicleComponentSchema);

module.exports = VehicleComponent;
