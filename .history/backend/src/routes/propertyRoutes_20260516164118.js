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
ADMIN -> ALL
USER -> OWN
=====================================
*/

router.get(

  "/",

  authMiddleware,

  getAllProperties
);

/*
=====================================
SEARCH SUGGESTIONS
PUBLIC
=====================================
*/

router.get(

  "/suggestions",

  getSuggestions
);

/*
=====================================
NEARBY PROPERTIES
PUBLIC
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
PUBLIC
=====================================
*/

router.get(

  "/image/:id/:index",

  getPropertyImage
);

/*
=====================================
DELETE PROPERTY IMAGE
ONLY OWNER / ADMIN
=====================================
*/

router.delete(

  "/image/:id/:index",

  authMiddleware,

  deletePropertyImage
);

/*
=====================================
GET SINGLE PROPERTY
PUBLIC
=====================================
*/

router.get(

  "/:id",

  getSingleProperty
);

/*
=====================================
UPDATE PROPERTY
ONLY OWNER / ADMIN
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
ONLY OWNER / ADMIN
=====================================
*/

router.delete(

  "/:id",

  authMiddleware,

  deleteProperty
);

export default router;