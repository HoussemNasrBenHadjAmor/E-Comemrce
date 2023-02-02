import { commerce } from "../config/commerce.js";

import _ from "lodash";

import dotenv from "dotenv";

import fetch from "node-fetch";

dotenv.config();

const depths = 4;

const url = new URL(process.env.ECOMMERCE_KEY_CATEGORIES_URL);

const urlProducts = new URL(process.env.ECOMMERCE_KEY_PRODUCTS_URL);

let headers = {
  "X-Authorization": process.env.ECOMMERCE_KEY,
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getAllCat = async (req, res) => {
  try {
    let params = {
      depth: depths,
    };

    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, params[key]);
    });

    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        res.status(200).json(data.data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSubCat = async (req, res) => {
  try {
    const { id } = req.params;

    const urlSub = new URL(`${process.env.ECOMMERCE_KEY_CATEGORIES_URL}/${id}`);

    let params = {
      type: "slug",
    };

    Object.keys(params).forEach((key) =>
      urlSub.searchParams.append(key, params[key])
    );

    fetch(urlSub, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

const isDuplicate = (variant_groups) => {
  let i = 0;

  // for (j=0 ; j)
};

const getFilterOptions = (filterOptions) => {
  let filterOption = [];
  // console.log("length", filterOptions.length);

  filterOptions.map(({ variant_groups }) => {
    let i = 0;
    variant_groups.map((variant) => {
      console.log("v", variant_groups[i].name);
      console.log("variant", variant.name);
      i++;
    });

    filterOption.push(variant_groups);
  });
  return filterOption;
};

export const getProducts = async (req, res) => {
  try {
    const { id } = req.params;

    let params = {
      category_slug: id,
      sortDirection: "asc",
    };

    Object.keys(params).forEach((key) =>
      urlProducts.searchParams.append(key, params[key])
    );

    fetch(urlProducts, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        // const filterOption = getFilterOptions(data.data);

        res.status(200).json(data);
      });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    fetch(urlProducts, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((json) => {
        res.status(200).json(json.data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getVariant = async (req, res) => {
  try {
    fetch("https://api.chec.io/v1/products/prod_RyWOwmqYq6wnEa/variants", {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((json) => {
        res.status(200).json(json.data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneCat = async (req, res) => {
  try {
    const catID = "cat_LvJjoPXmnoe0nO";

    const x = await commerce.categories.retrieve(catID);

    const xx = await commerce.categories.retrieve(x?.parent_id);

    const y = await commerce.products.list({
      limit: 10,
      category_id: catID,
    });

    if (xx) {
      return res.status(200).json({
        x,
        xx,
        y,
      });
    } else {
      return res.status(500).json({ message: "Out of Category" });
    }

    // res.status(200).json({
    //   xx,
    //   y,
    // });
  } catch (error) {
    res.status(500).json(error);
  }
};
