import axios from "axios";

/*
=====================================
GET LATITUDE & LONGITUDE
=====================================
*/

const geocodeLocation =
  async ({
    address,
    locality,
    cityName,
    stateName
  }) => {

    try {

      /*
      =====================================
      CREATE SEARCH QUERY
      =====================================
      */

      const query = `
        ${address || ""}
        ${locality || ""}
        ${cityName || ""}
        ${stateName || ""}
        India
      `;

      /*
      =====================================
      CALL NOMINATIM API
      =====================================
      */

      const response =
        await axios.get(
          "https://nominatim.openstreetmap.org/search",
          {
            params: {
              q: query,
              format: "json",
              limit: 1
            },

            headers: {
              "Accept-Language":
                "en"
            }
          }
        );

      /*
      =====================================
      NO LOCATION FOUND
      =====================================
      */

      if (
        !response.data ||
        response.data.length === 0
      ) {

        return null;
      }

      /*
      =====================================
      GET COORDINATES
      =====================================
      */

      const location =
        response.data[0];

      return {

        latitude:
          Number(location.lat),

        longitude:
          Number(location.lon)
      };

    } catch (error) {

      console.log(error);

      return null;
    }
  };

export default geocodeLocation;