import * as actions from "../constants/categoryActionTypes";

const initialState = {};

export default (category = initialState, action) => {
  switch (action.type) {
    case actions.REQUEST_GET_ALL_CATEGORIES:
      return {
        ...category,
        loading: true,
        errorMessage: null,
        categories: null,
      };

    case actions.FAILED_GET_ALL:
      return { ...category, loading: false, errorMessage: action.payload };

    case actions.SUCCESS_GET_ALL:
      return { ...category, loading: false, categories: action.payload };

    case actions.REQUEST_GET_SUB_CAT:
      return {
        ...category,
        loadingSub: true,
        errorMessageSub: null,
        subCategories: null,
      };

    case actions.SUCCESS_GET_SUB_CAT:
      return {
        ...category,
        loadingSub: false,
        subCategories: action.payload,
      };

    case actions.FAILED_GET_SUB_CAT:
      return {
        ...category,
        errorMessageSub: action.payload,
      };

    case actions.REQUEST_GET_PRODUCTS_BY_SLUG:
      return {
        ...category,
        loadingPro: true,
        errorPro: null,
        products: null,
      };

    case actions.SUCCESS_GET_PRODUCTS_BY_SLUG:
      return { ...category, loadingPro: false, products: action.payload };

    case actions.FAILED_GET_PRODUCTS_BY_SLUG:
      return { ...category, errorPro: action.payload };

    default:
      return category;
  }
};
