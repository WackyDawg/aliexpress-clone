const mongoose = require('mongoose');

const shopGroupSchema = new mongoose.Schema({
  isExpand: String,
  name: String,
  url: String
});

const shopCategoryComponentSchema = new mongoose.Schema({
  productGroupsResult: {
    groups: [shopGroupSchema]
  }
});

const ShopCategoryComponent = mongoose.model('ShopCategoryComponent', shopCategoryComponentSchema);

module.exports = ShopCategoryComponent;
