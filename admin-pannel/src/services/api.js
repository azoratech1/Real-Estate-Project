import axios from "axios";

/*
=====================================
AXIOS INSTANCE
=====================================
*/

const API = axios.create({

  baseURL: "https://real-estate-project-6p9e.onrender.com/api",

  headers: {
    "Content-Type": "application/json"
  }

});

/*
=====================================
REQUEST INTERCEPTOR
=====================================
*/

API.interceptors.request.use(

  (req) => {

    const token =
      localStorage.getItem(
        "token"
      );

    /*
    =====================================
    ADD TOKEN
    =====================================
    */

    if (token) {

      req.headers.Authorization =
        `Bearer ${token}`;

    }

    return req;
  },

  (error) => {

    return Promise.reject(
      error
    );

  }
);

/*
=====================================
RESPONSE INTERCEPTOR
=====================================
*/

API.interceptors.response.use(

  (response) => response,

  (error) => {

    /*
    =====================================
    AUTO LOGOUT ON 401
    =====================================
    */

    if (
      error.response?.status === 401
    ) {

      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "user"
      );

      window.location.href = "/";
    }

    return Promise.reject(
      error
    );
  }
);

export default API;