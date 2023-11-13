const mongoose = require('mongoose');

const i18nComponentSchema = new mongoose.Schema({
  i18nMap: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  priceGuarantee: {
    brief: String,
    name: String,
    desc: String,
  },
  actionModule: {
    VIEW_DETAIL: String,
    WISH_MAX_NOTICE: String,
    BUYER_ABLE: String,
    WISHLIST_SAVE_BUTTON: String,
    WISH_MOVE_TO_ANOTHER_LIST_TIPS: String,
    ADD_X_MORE: String,
    COMING_SOON: String,
    SC_ADD_SUCC: String,
    WISHLIST_PUBLIC_NOTICE: String,
    WISH_DEFAULT_LIST: String,
    WISH_CREATE_LIST: String,
    WL_ERROR: String,
    WISH_NAME_ALREADY_USED: String,
    WISH_REVISELIST: String,
    ADD_TO_MY_PICKS: String,
    SC_ADD_FAILED: String,
    SC_HAVE: String,
    ADD_TO_CART: String,
    WISH_CANCEL_WISHLIST: String,
    BUY_NOW: String,
    WISH_SYSTEM_ERROR: String,
    SC_ADD_MAX: String,
    SC_VIEW: String,
    WISH_YOUMAYLIKE: String,
    WISH_VIEW_WISH_LIST: String,
    SC_RECOMMEND: String,
    CONTINUE: String,
    ADDED_TO: String,
    ORDER_NOW: String,
    SELECT_TIP: String,
    NO_LONGER_AVAILABLE: String,
    PREVIEW_PERIOD: String,
    WISH_MAX_GROUP: String,
    FIND_SIMILAR: String,
    WISHLIST_PUBLIC_TIP: String,
  },
  storeModule: {
    CUSTOMER_SERVICE: String,
    VISIT_STORE: String,
    CONTACT_SELLER: String,
    FOLLOWING_STATE: String,
    UNFOLLOWING_STATE: String,
    POSITIVE_FEEDBACK: String,
    FOLLOWERS: String,
    FOLLOWER: String,
    TOP_SELLER: String,
    STORE_CATEGORIES: String,
  },
  recommendModule: {
    MORE_FROM_THIS_SELLER: String,
    YOU_MAY_LIKE: String,
    TOP_SELLING: String,
    FROM_OTHER_SELLER: String,
    VIEW_MORE_LINK: String,
    PRODUCT_SOLD: String,
  },
  storeInfo: {
    shippingSpeed: String,
    below_average: String,
    higher_seller: String,
    storeId: String,
    openSince: String,
    above_average: String,
    itemAsDescribed: String,
    lower_seller: String,
    businessInfo: String,
    equal: String,
    storeName: String,
    storeInfo: String,
    storeRating: String,
    businessAddress: String,
    communication: String,
    equal_seller: String,
  },
  itemDetailResp: {
    ASK_BUYERS: String,
    VIEW_5_MORE_ANSWERS: String,
    PAGE_NOT_FOUND_RCMD_TITLE: String,
    VIEW_MORE: String,
    PAGE_NOT_FOUND_NOTICE: String,
  },
  bpFreeReturn30: {
    brief: String,
    name: String,
    id: String,
    desc: String,
  },
  bpLocalDomesticReturn: {
    brief: String,
    name: String,
    id: String,
    desc: String,
  },
  priceModule: {
    LOT: String,
    PRE_ORDER_PRICE: String,
    INSTALLMENT: String,
    DEPOSIT: String,
  },
  shippingModule: {
    HAB_BALLOON_TRACKING_AVAILABLE: String,
    GENERAL_SHIPPING_TO: String,
    SELECT_SHIP_FROM_TIP: String,
    SHIPPING_TO: String,
    HAB_SHIPPING_TO: String,
    CARRIER: String,
    TO_PROVINCE: String,
    TO_COUNTRY: String,
    TO_CITY: String,
    CAN_NOT_DELIVER_NOTE: String,
    ESTIMATED_DELIVERY_ON_DAYS: String,
    CHOOSE_DELIVERY_METHOD: String,
    HAB_BALLOON_DOOR_DELIVERY: String,
    DELIVERED_BY: String,
    HBA_SHIPPING_INFO: String,
    IN: String,
    SEARCH: String,
    SELECT_SHIP_FROM: String,
    LOGISTIC_COMPOSE_AE: String,
    HBA_BALLOON_TIPS: String,
    GENERAL_SHIPPING_DELIVERY: String,
    VAT_DE_DETAIL: String,
    SELECTED: String,
    HBA_DOOR_DELIVERY: String,
    ESTIMATED_DELIVERY_ON_DATE: String,
    OR_FULL_REFUND: String,
    LOGISTIC_COMPOSE_BRAND_MIND: String,
    PLAZA_SHOP_NOW_RECEIVE_ON: String,
    LOGISTIC_COMPOSE_ORDERS_OVER: String,
    FAST_SHIPPING: String,
    CAN_NOT_DELIVER: String,
    HBA_TRACKING_AVAILABLE: String,
    DAYS: String,
    GENERAL_SHIPPING_FROM: String,
    GENERAL_SHIPPING_MORE: String,
    FREE_SHIPPING: String,
    COST: String,
    BALLOON_TIP: String,
    SHIP_MY_ITEM_TO: String,
    HAB_BALLOON_VAT_INCLUDED: String,
    TRACKING: String,
    LOGISTIC_COMPOSE_SPEED_UP: String,
    PLAZA_BALLOON_TIP: String,
    HBA_TVAT_INCLUDED: String,
    ESTIMATED_DELIVERY: String,
    TO_WHERE: String,
    VAT_NUMBER: String,
    TO_VIA: String,
    APPLY: String,
  },
  buyerProtectionModule: {
    PLAZA_BUYER_PROTECTION_TIP: String,
    PLAZA_BUYER_PROTECTION_TITLE: String,
    PLAZA_BUYER_PROTECTION_CONTENT: String,
  },
  bpSpainFreeReturn: {
    brief: String,
    name: String,
    id: String,
    desc: String,
  },
  common: {
    recommendationsFrom: String,
    sharePc: String,
    skuEditSelection: String,
    description: String,
    specification: String,
    skuSelections: String,
    feedback: String,
    youMayAlsoLike: String,
    deliveryBlockTitle: String,
    outOfStock: String,
    topSellingsFrom: String,
    similarRecommend: String,
    youMayAlsoLikeSeeMore: String,
    qanda: String,
  },
  buyerProtection: {
    brief: String,
    name: String,
    desc: String,
  },
  quantityModule: {
    LOT: String,
    LOTS: String,
    BUY_LIMIT: String,
    QUANTITY: String,
    OFF_OR_MORE: String,
    ONLY_QUANTITY_LEFT: String,
    ADDITIONAL: String,
    QUANTITY_AVAILABLE: String,
  },
  otherServiceModule: {
    TAB_SPECS: String,
    PLAZA_SERVICE_SUBTITLE_PC: String,
    PLAZA_SERVICE_WARRANTY_EMAIL: String,
    PLAZA_SERVICE_WARRANTY_PHONE: String,
    PLAZA_SERVICE_WARRANTY_HOURS: String,
    TAB_CUSTOMER_REVIEWS: String,
    PLAZA_SERVICE_WARRANTY_WEBSITE: String,
    TAB_OVERVIEW: String,
    PLAZA_SERVICE_WARRANTY_BRAND: String,
    PLAZA_SERVICE_WARRANTY_CATEGORY: String,
    PLAZA_SERVICE_TITLE_PC: String,
    PLAZA_SERVICE_CONTENT3_3_PC: String,
    PLAZA_SERVICE_CONTENT3_1_PC: String,
    PLAZA_SERVICE_CONTENT3_2_PC: String,
    PLAZA_SERVICE_CONTENT1_PC: String,
    PLAZA_SERVICE_SUBTITLE2_PC: String,
    PLAZA_SERVICE_CONTENT2_PC: String,
    PLAZA_SERVICE_SUBTITLE3_PC: String,
  },
  crossLinkModule: {
    BREADCRUMB_PART2: String,
    BREADCRUMB_PART1: String,
    CROSSLINK_RELATED_SEARCHES: String,
  },
  bpLocalReturn15: {
    brief: String,
    name: String,
    id: String,
    desc: String,
  },
  titleModule: {
    REVIEWS: String,
    VIEW_ALL_REVIEWS: String,
    REVIEW: String,
    VIEW_OTHER_TITLE: String,
    VIEW_EN_TITLE: String,
    FREEBIE_REVIEW: String,
    FREEBIE_REVIEWS: String,
  },
  middleBannerModule: {
    END_IN: String,
    DAYS: String,
    DAY: String,
    STARTS_IN: String,
  },
  couponModule: {
    GET_COUPONS: String,
    SCP_ERR_HAVE: String,
    OFF_ON: String,
    ORDER_OVER: String,
    code52Title: String,
    GET_IT: String,
    GET_NOW: String,
    GET_MORE: String,
    systemError: String,
    OFF_PER: String,
    STORE_COUPON: String,
    SHOP_COUPON_TIME_START_END: String,
    NEW_USER_COUPON_ACQUIRE_FAIL_ALREADY_HAVE: String,
    code50Title: String,
    NEW_USER_COUPON_ACQUIRE_FAIL_NOT_AVAILABLE_NOW: String,
    NEW_USER_COUPON_ACQUIRE_FAIL_GROUP_LIMIT: String,
    code14Title: String,
    NEW_USER_COUPON_ACQUIRE_FAIL_NOT_NEW_USER: String,
    SHOP_PROMO_CODE_COPIED: String,
    SHOP_PROMO_CODE_TITLE: String,
    NEW_USER_COUPON_ACQUIRE_FAIL_SECURITY: String,
    NEW_USER_COUPON_ACQUIRE_FAIL: String,
    code17Title: String,
    SHOP_COUPON_TIME_EXPIRES: String,
    SHOPPING_CREDIT: String,
    EXCHANGE_MORE: String,
    NEW_USER_COUPON: String,
    GET: String,
    SHOP_PROMO_CODE_COPY_FAILED: String,
    code-30005Title: String,
    MY_BALANCE: String,
    BUY_GET_OFF: String,
    code51Title: String,
    PANEL_TITLE: String,
    NEW_USER_COUPON_ACQUIRE_FAIL_LIMIT_HOUR: String,
    CROSS_STORE_VOUCHER: String,
  },
  bpDomesticReturn7: {
    brief: String,
    name: String,
    id: String,
    desc: String,
  },
});

const i18nComponent = mongoose.model('i18nComponent', i18nComponentSchema);

module.exports = i18nComponent;
