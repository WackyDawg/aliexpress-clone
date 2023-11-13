const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventoryComponentSchema = new Schema({
    totalQuantity: {
        type: Number,
        required: true
    },
    totalAvailQuantity: {
        type: Number,
        required: true
    }
});

const InventoryComponent = mongoose.model('InventoryComponent', inventoryComponentSchema);

module.exports = InventoryComponent;
