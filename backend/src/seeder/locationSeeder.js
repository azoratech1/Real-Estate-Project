import mongoose from "mongoose";

import dotenv from "dotenv";

import {
  State as CSCState,
  City as CSCCity
} from "country-state-city";

import State from "../models/State.js";

import City from "../models/City.js";

dotenv.config();

/*
=====================================
CONNECT DB
=====================================
*/

await mongoose.connect(
  process.env.MONGO_URI
);

console.log(
  "MongoDB Connected"
);

/*
=====================================
SEED DATA
=====================================
*/

const seedLocations =
  async () => {
    try {

      /*
      =====================================
      CLEAR OLD DATA
      =====================================
      */

      await State.deleteMany();

      await City.deleteMany();

      /*
      =====================================
      GET INDIAN STATES
      =====================================
      */

      const indianStates =
        CSCState.getStatesOfCountry(
          "IN"
        );

      for (const state of indianStates) {

        /*
        =====================================
        SAVE STATE
        =====================================
        */

        const savedState =
          await State.create({

            name: state.name,

            code: state.isoCode
          });

        /*
        =====================================
        GET CITIES
        =====================================
        */

        const cities =
          CSCCity.getCitiesOfState(
            "IN",
            state.isoCode
          );

        /*
        =====================================
        SAVE CITIES
        =====================================
        */

        const cityDocs =
          cities.map((city) => ({

            name: city.name,

            state:
              savedState._id
          }));

        if (
          cityDocs.length > 0
        ) {

          await City.insertMany(
            cityDocs
          );

        }

        console.log(
          `Seeded ${state.name}`
        );
      }

      console.log(
        "Locations Seeded Successfully"
      );

      process.exit();

    } catch (error) {

      console.log(error);

      process.exit(1);

    }
  };

seedLocations();