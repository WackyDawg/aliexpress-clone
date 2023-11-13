const mongoose = require('mongoose');

const gagaComponentSchema = new mongoose.Schema({
    gagaDataSite: {
        type: String,
        required: true
    }
});

const GagaComponent = mongoose.model('GagaComponent', gagaComponentSchema);

module.exports = GagaComponent;
