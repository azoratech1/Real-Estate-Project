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

  getSuggestions,

  getNearbyProperties

} from "../controllers/propertyController.js";

import authMiddleware
  from "../middleware/authMiddleware.js";

import upload
  from "../middleware/uploadMiddleware.js";

const router =
  express.Router();

/*
=====================================
CREATE PROPERTY
=====================================
*/

router.post(

  "/",

  authMiddleware,

  upload.array("images", 4),

  createProperty
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
SEARCH SUGGESTIONS
=====================================
*/

router.get(
  "/suggestions",
  getSuggestions
);

/*
=====================================
NEARBY PROPERTIES
=====================================
*/

router.get(
  "/nearby/search",
  getNearbyProperties
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
PROPERTY IMAGE
=====================================
*/

router.get(

  "/image/:id/:index",

  getPropertyImage
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

/*
=====================================
GET SINGLE PROPERTY
=====================================
*/

router.get(
  "/:id",
  getSingleProperty
);

/*
=====================================
UPDATE PROPERTY
=====================================
*/

router.put(

  "/:id",

  authMiddleware,

  upload.array("images", 4),

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

export default router;