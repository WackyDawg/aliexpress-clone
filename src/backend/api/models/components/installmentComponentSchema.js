const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const installmentComponentSchema = new Schema({
    
});

const InstallmentComponent = mongoose.model('InstallmentComponent', installmentComponentSchema);

module.exports = InstallmentComponent;
