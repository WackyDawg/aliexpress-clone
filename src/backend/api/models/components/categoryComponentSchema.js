const mongoose = require('mongoose');

const categoryComponentSchema = new mongoose.Schema({
  topCategoryId: {
    type: Number,
    required: true,
  },
  kidBaby: {
    type: Boolean,
    required: true,
  },
  secondLevelCategoryId: {
    type: Number,
    required: true,
  },
});

const CategoryComponent = mongoose.model('CategoryComponent', categoryComponentSchema);

module.exports = CategoryComponent;
