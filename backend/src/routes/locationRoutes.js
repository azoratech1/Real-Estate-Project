import express from "express";

import {
  getStates,
  getCitiesByState
} from "../controllers/locationController.js";

const router = express.Router();

/*
=====================================
GET ALL STATES
=====================================
*/

router.get(
  "/states",
  getStates
);

/*
=====================================
GET CITIES BY STATE
=====================================
*/

router.get(
  "/cities/:stateId",
  getCitiesByState
);

export default router;