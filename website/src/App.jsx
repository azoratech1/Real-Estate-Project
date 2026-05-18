import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";

import PropertiesPage from "./pages/Properties";

import PropertyDetails from "./pages/PropertyDetails";

import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import NearbyProperties from "./pages/NearbyProperties";
import {
  ToastContainer
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
/*
=====================================
APP
=====================================
*/

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />
 <Route
          path="/about"
          element={<AboutPage />}
        />
         <Route
          path="/contact"
          element={<ContactPage />}
        />
        <Route

  path="/properties/nearby"

  element={
    <NearbyProperties />
  }
/>
        {/* ALL PROPERTIES */}

        <Route
          path="/properties"
          element={
            <PropertiesPage />
          }
        />

        {/* SINGLE PROPERTY */}

        <Route
          path="/properties/:id"
          element={
            <PropertyDetails />
          }
        />

        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
  <ToastContainer
        position="top-right"
        autoClose={3000}
      />

    </BrowserRouter>
  );
}

export default App;