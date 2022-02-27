import * as api from "../../api/categoriesApi";

import * as actions from "../constants/categoryActionTypes";

export const getCategories = () => async (disptach) => {
  disptach({ type: actions.REQUEST_GET_ALL_CATEGORIES });

  try {
    const { data: data } = await api.getCategories();
    disptach({ type: actions.SUCCESS_GET_ALL, payload: data });
  } catch (error) {
    disptach({
      type: actions.FAILED_GET_ALL,
      payload:
        error.response && error.response.data
          ? error.response.message
          : error.response,
    });
  }
};

export const getSubCat = (catID) => async (disptach) => {
  disptach({ type: actions.REQUEST_GET_SUB_CAT });
  try {
    const { data: data } = await api.getSubCategories(catID);
    disptach({ type: actions.SUCCESS_GET_SUB_CAT, payload: data });
  } catch (error) {
    disptach({
      type: actions.FAILED_GET_SUB_CAT,
      payload:
        error.response && error.response.data
          ? error.response.message
          : error.response,
    });
  }
};

export const getProductsBySlug = (catID) => async (disptach) => {
  disptach({ type: actions.REQUEST_GET_PRODUCTS_BY_SLUG });
  try {
    const { data } = await api.getProductsBySlug(catID);
    disptach({ type: actions.SUCCESS_GET_PRODUCTS_BY_SLUG, payload: data });
  } catch (error) {
    disptach({
      type: actions.FAILED_GET_PRODUCTS_BY_SLUG,
      payload:
        error.response && error.response.data
          ? error.response.message
          : error.response,
    });
  }
};
