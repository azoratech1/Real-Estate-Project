import express from "express";

import {

  createProperty,

  getAllProperties,

  getSingleProperty,

  updateProperty,

  deleteProperty,

  getPropertyImage,

  deletePropertyImage,

  getDashboardStats,

  getSuggestions

} from "../controllers/propertyController.js";

import authMiddleware
  from "../middleware/authMiddleware.js";

import upload
  from "../middleware/uploadMiddleware.js";

const router =
  express.Router();

/*
=====================================
SUGGESTIONS
=====================================
IMPORTANT:
KEEP ABOVE "/:id"
=====================================
*/

router.get(
  "/suggestions",
  getSuggestions
);

/*
=====================================
DASHBOARD STATS
=====================================
*/

router.get(

  "/dashboard/stats",

  authMiddleware,

  getDashboardStats
);

/*
=====================================
GET PROPERTY IMAGE
=====================================
*/

router.get(
  "/image/:id/:index",
  getPropertyImage
);

/*
=====================================
GET ALL PROPERTIES
=====================================
*/

router.get(
  "/",
  getAllProperties
);

/*
=====================================
GET SINGLE PROPERTY
=====================================
IMPORTANT:
KEEP BELOW CUSTOM ROUTES
=====================================
*/

router.get(
  "/:id",
  getSingleProperty
);

/*
=====================================
CREATE PROPERTY
=====================================
*/

router.post(

  "/",

  authMiddleware,

  upload.array(
    "images",
    4
  ),

  createProperty
);

/*
=====================================
UPDATE PROPERTY
=====================================
*/

router.put(

  "/:id",

  authMiddleware,

  upload.array(
    "images",
    4
  ),

  updateProperty
);

/*
=====================================
DELETE PROPERTY
=====================================
*/

router.delete(

  "/:id",

  authMiddleware,

  deleteProperty
);

/*
=====================================
DELETE PROPERTY IMAGE
=====================================
*/

router.delete(
  "/image/:id/:index",
  deletePropertyImage
);

export default router;