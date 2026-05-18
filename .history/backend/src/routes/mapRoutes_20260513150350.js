import express from "express";

import {
  searchLocation
} from "../controllers/mapController.js";

const router =
  express.Router();

/*
=====================================
SEARCH LOCATION
=====================================
*/

router.get(
  "/search",
  searchLocation
);

export default router;