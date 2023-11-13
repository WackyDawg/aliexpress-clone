const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplementInfoLayoutComponentSchema = new Schema({
    moduleLayoutInfo: {
        questionAndAnswer: {
            spreadStatus: {
                type: String,
                required: true
            },
            order: {
                type: Number,
                required: true
            }
        },
        review: {
            spreadStatus: {
                type: String,
                required: true
            },
            order: {
                type: Number,
                required: true
            }
        },
        description: {
            spreadStatus: {
                type: String,
                required: true
            },
            order: {
                type: Number,
                required: true
            }
        },
        specification: {
            spreadStatus: {
                type: String,
                required: true
            },
            order: {
                type: Number,
                required: true
            }
        }
    }
});

const SupplementInfoLayoutComponent = mongoose.model('SupplementInfoLayoutComponent', supplementInfoLayoutComponentSchema);

module.exports = SupplementInfoLayoutComponent;
