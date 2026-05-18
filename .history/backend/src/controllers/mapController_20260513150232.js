import axios from "axios";

/*
=====================================
SEARCH LOCATION
=====================================
*/

export const searchLocation =
  async (req, res) => {

    try {

      const {
        query
      } = req.query;

      /*
      =====================================
      VALIDATION
      =====================================
      */

      if (!query) {

        return res.status(400).json({

          success: false,

          message:
            "Search query required"
        });
      }

      /*
      =====================================
      SEARCH NOMINATIM
      =====================================
      */

      const response =
        await axios.get(

          "https://nominatim.openstreetmap.org/search",

          {

            params: {

              q: query,

              format: "json",

              addressdetails: 1,

              limit: 5
            },

            headers: {

              /*
              =================================
              REQUIRED BY NOMINATIM
              =================================
              */

              "User-Agent":
                "property-app"
            }
          }
        );

      res.status(200).json({

        success: true,

        results:
          response.data
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Location search failed"
      });
    }
  };