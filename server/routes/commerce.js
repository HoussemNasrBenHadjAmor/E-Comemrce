import express from "express";

import {
  getAllCat,
  getOneCat,
  getAllProducts,
  getVariant,
  getSubCat,
  getProducts,
} from "../controllers/commerce.js";

const router = express.Router();

router.get("/", getAllCat);

router.get("/get-sub-cat/:id", getSubCat);

router.get("/get-products-by-slug/:id", getProducts);

router.get("/get-one", getOneCat);

router.get("/get-products", getAllProducts);

router.get("/get-variant", getVariant);

export default router;
