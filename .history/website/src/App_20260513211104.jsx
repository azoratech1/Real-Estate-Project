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
          path="/"
          element={<Home />}
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

    </BrowserRouter>
  );
}

export default App;