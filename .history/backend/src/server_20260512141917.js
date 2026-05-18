import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

/*
=====================================
ROUTES
=====================================
*/

import authRoutes from "./routes/authRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import locationRoutes from "./routes/locationRoutes.js"
/*
=====================================
ENV CONFIG
=====================================
*/

dotenv.config();

/*
=====================================
INITIALIZE EXPRESS
=====================================
*/

const app = express();

/*
=====================================
MIDDLEWARES
=====================================
*/

app.use(cors());

app.use(express.json());

/*
=====================================
DATABASE CONNECTION
=====================================
*/

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Connection Error:");
    console.log(error.message);

    process.exit(1);
  }
};

connectDB();

/*
=====================================
TEST ROUTE
=====================================
*/

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Running Successfully"
  });
});

/*
=====================================
API ROUTES
=====================================
*/

app.use("/api/auth", authRoutes);

app.use("/api/properties", propertyRoutes);
app.use(
  "/api/locations",
  locationRoutes
);
/*
=====================================
SERVER
=====================================
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});