import axios from "axios";

const categoriesUrl = process.env.REACT_APP_API_CATEGORIES_KEY;

export const getCategories = () => axios.get(categoriesUrl);

export const getSubCategories = (catID) =>
  axios.get(`${categoriesUrl}/get-sub-cat/${catID}`);

export const getProductsBySlug = (catID) =>
  axios.get(`${categoriesUrl}/get-products-by-slug/${catID}`);
