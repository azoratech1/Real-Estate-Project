import State from "../models/State.js";

import City from "../models/City.js";

/*
=====================================
GET ALL STATES
=====================================
*/

export const getStates =
  async (req, res) => {
    try {

      const states =
        await State.find()
          .sort({
            name: 1
          });

      res.status(200).json({
        success: true,
        count: states.length,
        states
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message
      });

    }
  };

/*
=====================================
GET CITIES BY STATE
=====================================
*/

export const getCitiesByState =
  async (req, res) => {
    try {

      const cities =
        await City.find({
          state:
            req.params.stateId
        }).sort({
          name: 1
        });

      res.status(200).json({
        success: true,
        count: cities.length,
        cities
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message
      });

    }
  };