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

import authMiddleware from "../middleware/authMiddleware.js";

import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

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

router.get("/", getAllProperties);

/*
=====================================
GET SINGLE PROPERTY
=====================================
*/
router.get(
  "/image/:id/:index",
  getPropertyImage
);
router.get("/:id", getSingleProperty);

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
router.delete(
  "/image/:id/:index",
  deletePropertyImage
);
router.get(
  "/dashboard/stats",
  authMiddleware,
  getDashboardStats
);
export default router;