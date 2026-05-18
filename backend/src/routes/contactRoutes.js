import express
  from "express";

import {
  sendContactEnquiry
} from "../controllers/contactController.js";

const router =
  express.Router();

/*
=====================================
CONTACT ENQUIRY
=====================================
*/

router.post(
  "/enquiry",
  sendContactEnquiry
);

export default router;