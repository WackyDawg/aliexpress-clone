const mongoose = require('mongoose');
const tradeComponentSchema = require('./components/tradeComponentSchema');
const pageSizeComponentSchema = require('./components/pageSizeComponentSchema');
const redirectComponentSchema = require('./components/redirectComponentSchema');
const metaDataComponentSchema = require('./components/metaDataComponentSchema');
const sellerComponentSchema = require('./components/sellerComponentSchema');
const plazaSellerServiceComponentSchema = require('./components/plazaSellerServiceComponentSchema');
const productPropComponentSchema = require('./components/productPropComponentSchema')
const skuComponentSchema = require('./components/skuComponentSchema');
const webActionConfComponentSchema = require('./components/webActionConfComponentSchema');
const cartSideBarInfoComponentSchema = require('./components/cartSideBarInfoComponentSchema');
const packageComponentSchema = require('./components/packageComponentSchema');
const productTagComponentSchema = require('./components/productTagComponentSchema');
const blacklistComponentSchema = require('./components/blacklistComponentSchema');
const priceComponentSchema = require('./components/priceComponentSchema');
const webLongImageComponentSchema = require('./components/webLongImageComponentSchema');
const wishListComponentSchema = require('./components/wishListComponentSchema');
const multiLanguageUrlComponentSchema = require('./components/multiLanguageUrlComponentSchema');
const webCouponInfoComponentSchema = require('./components/webCouponInfoComponentSchema');
const i18nComponentSchema = require('./components/i18nComponentSchema');
const bannerComponentSchema = require('./components/bannerComponentSchema');
const categoryComponentSchema = require('./components/categoryComponentSchema');
const buriedLogComponentSchema = require('./components/buriedLogComponentSchema');
const videoComponentSchema = require('./components/videoComponentSchema');
const productInfoComponentSchema = require('./components/productInfoComponentSchema');
const sellerGuaranteeComponentSchema = require('./components/sellerGuaranteeComponentschema');
const buyerComponentSchema = require('./components/buyerComponentSchema');
const storeHeaderComponentSchema = require('./components/storeHeaderComponentSchema');
const breadcrumbComponentSchema = require('./components/breadcrumbComponentSchema');
const abTestComponentSchema = require('./components/abTestComponentSchema');
const gagaComponentSchema = require('./components/gagaComponentSchema');
const choiceAtmosphereComponentSchema = require('./components/choiceAtmosphereComponentSchema');
const sellingPointInfoComponentSchema = require('./components/sellingPointInfoComponentschema');
const siteInfoComponentSchema = require('./components/siteInfoComponentSchema');
const remindsComponentSchema = require('./components/remindsComponentSchema');
const shopCategoryComponentSchema = require('./components/shopCategoryComponentSchema');
const promotionComponentSchema = require('./components/promotionComponentSchema');
const sellerPromiseComponentSchema = require('./components/sellerPromiseComponentSchema');
const extraComponentSchema = require('./components/extraComponentSchema');
const marketingInfo4ChoiceComponentSchema = require('./components/marketingInfo4ChoiceComponentSchema');
const storeFeedbackComponentSchema = require('./components/storeFeedbackComponentSchema');
const assuranceComponentSchema = require('./components/assuranceComponentSchema');
const priceRuleComponentSchema = require('./components/priceRuleComponentSchema');
const webGeneralFreightCalculateComponentSchema = require('./components/webGeneralFreightCalculateComponentSchema');
const inventoryComponentSchema = require('./components/inventoryComponentSchema');
const webCouponPriceComponentSchema = require('./components/webCouponPriceComponentSchema');
const webViewComponentSchema = require('./components/webViewComponentSchema');
const installmentComponentSchema = require('./components/installmentComponentSchema');
const productDescComponentSchema = require('./components/productDescComponentSchema');
const categoryTagComponentSchema = require('./components/categoryTagComponentSchema');
const supplementInfoLayoutComponentSchema = require('./components/supplementInfoLayoutComponentSchema');
const imageComponentSchema = require('./components/imageComponentSchema');
const recommendComponentSchema = require('./components/recommendComponentSchema');
const userComponentSchema = require('./components/userComponentSchema');
const currencyComponentSchema = require('./components/currencyComponentSchema');
const itemStatusComponentSchema = require('./components/itemStatusComponentSchema');
const referComponentSchema = require('./components/referComponentSchema');
const feedbackComponentSchema = require('./components/feedbackComponentSchema');
const vehicleComponentSchema = require('./components/vehicleComponentSchema');
const displayTitleComponentSchema = require('./components/displayTitleComponentSchema');






const productSchema = new mongoose.Schema({
  tradeComponent: tradeComponentSchema,
  pageSizeComponent: pageSizeComponentSchema,
  redirectComponent: redirectComponentSchema,
  metaDataComponent: metaDataComponentSchema,
  sellerComponent: sellerComponentSchema,
  plazaSellerServiceComponent: plazaSellerServiceComponentSchema,
  productPropComponent: productPropComponentSchema,
  skuComponent: skuComponentSchema,
  webActionConfComponent: webActionConfComponentSchema,
  cartSideBarInfoComponent: cartSideBarInfoComponentSchema,
  packageComponent: packageComponentSchema,
  productTagComponent: productTagComponentSchema,
  blacklistComponent: blacklistComponentSchema,
  priceComponent: priceComponentSchema,
  webLongImageComponent: webLongImageComponentSchema,
  wishListComponent: wishListComponentSchema,
  multiLanguageUrlComponent: multiLanguageUrlComponentSchema,
  webCouponInfoComponent: webCouponInfoComponentSchema,
  i18nComponent: i18nComponentSchema,
  bannerComponent: bannerComponentSchema,
  categoryComponent: categoryComponentSchema,
  buriedLogComponent: buriedLogComponentSchema,
  videoComponent: videoComponentSchema,
  productInfoComponent: productInfoComponentSchema,
  sellerGuaranteeComponent: sellerGuaranteeComponentSchema,
  buyerComponent: buyerComponentSchema,
  storeHeaderComponent: storeHeaderComponentSchema,
  breadcrumbComponent: breadcrumbComponentSchema,
  abTestComponent: abTestComponentSchema,
  gagaComponent: gagaComponentSchema,
  choiceAtmosphereComponent: choiceAtmosphereComponentSchema,
  sellingPointInfoComponent: sellingPointInfoComponentSchema,
  siteInfoComponent: siteInfoComponentSchema,
  remindsComponent: remindsComponentSchema,
  shopCategoryComponent: shopCategoryComponentSchema,
  promotionComponent: promotionComponentSchema,
  sellerPromiseComponent: sellerPromiseComponentSchema,
  extraComponent: extraComponentSchema,
  marketingInfo4ChoiceComponent: marketingInfo4ChoiceComponentSchema,
  storeFeedbackComponent: storeFeedbackComponentSchema,
  assuranceComponent: assuranceComponentSchema,
  priceRuleComponent: priceRuleComponentSchema,
  webGeneralFreightCalculateComponent: webGeneralFreightCalculateComponentSchema,
  inventoryComponent: inventoryComponentSchema,
  webCouponPriceComponent: webCouponPriceComponentSchema,
  webViewComponent: webViewComponentSchema,
  installmentComponent: installmentComponentSchema,
  productDescComponent: productDescComponentSchema,
  categoryTagComponent: categoryTagComponentSchema,
  supplementInfoLayoutComponent: supplementInfoLayoutComponentSchema,
  imageComponent: imageComponentSchema,
  recommendComponent: recommendComponentSchema,
  userComponent: userComponentSchema,
  currencyComponent: currencyComponentSchema,
  itemStatusComponent: itemStatusComponentSchema,
  referComponent: referComponentSchema,
  feedbackComponent: feedbackComponentSchema,
  vehicleComponent: vehicleComponentSchema,
  displayTitleComponent: displayTitleComponentSchema,
});

const ProductSchema = mongoose.model('Product', productSchema);

module.exports = Product;
