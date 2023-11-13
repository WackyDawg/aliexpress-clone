const mongoose = require('mongoose');

const extraComponentSchema = new mongoose.Schema({
  expressionExt: String,
  aeOrderFrom: String,
  showCoinAnim: Boolean,
  abTrace: String,
  uiTestInfo: {
    UITest: {
      adaptExtension: Boolean,
      showSkuItem: Boolean,
    },
  },
  freightExt: [
    {
      p0: String,
      p1: String,
      p3: String,
      p5: String,
      p6: String,
      p7: String,
      p9: String,
      d0: String,
      d1: String,
      p10: [Number],
      p16: Boolean,
      itemScene: String,
      p18: String,
    },
  ],
  seoTitle: String,
  detailPageUrl: String,
  envInfo: {
    domestic: Boolean,
    traceId: String,
    crawler: Boolean,
  },
  complaintUrl: String,
  productDetailImageUrl: String,
});

const ExtraComponent = mongoose.model('ExtraComponent', extraComponentSchema);

module.exports = ExtraComponent;
