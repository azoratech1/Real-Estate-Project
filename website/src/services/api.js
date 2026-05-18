import axios from "axios";

/*
=====================================
AXIOS INSTANCE
=====================================
*/

const API = axios.create({

  baseURL:
    "https://real-estate-project-6p9e.onrender.com/api"
});

/*
=====================================
PROPERTY APIS
=====================================
*/

export const getProperties =
  async (params = {}) => {

    const response =
      await API.get(
        "/properties",
        {
          params
        }
      );

    return response.data;
  };

/*
=====================================
GET SINGLE PROPERTY
=====================================
*/

export const getProperty =
  async (id) => {

    const response =
      await API.get(
        `/properties/${id}`
      );

    return response.data;
  };

/*
=====================================
FEATURED PROPERTIES
=====================================
*/

export const getFeaturedProperties =
  async () => {

    const response =
      await API.get(
        "/properties/public/all"
      );

    return response.data;
  };

export default API;