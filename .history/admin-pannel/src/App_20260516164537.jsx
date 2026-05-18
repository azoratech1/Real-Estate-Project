import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

/*
=====================================
PAGES
=====================================
*/

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddProperty from "./pages/AddProperty";
import Properties from "./pages/Properties";
import EditProperty from "./pages/EditProperty";
import PropertyDetails from "./pages/PropertyDetails";
import UserLogin from "./pages/UserLogin";
/*
=====================================
PROTECTED ROUTE
=====================================
*/

import ProtectedRoute from "./routes/ProtectedRoute";
import Signup from "./pages/Signup";
export default function App() {

  return (
    <BrowserRouter>

      {/* TOAST NOTIFICATIONS */}

      <ToastContainer
        position="top-right"
        autoClose={3000}
      />

      <Routes>

        {/* PUBLIC ROUTE */}

        <Route
          path="/"
          element={<Login />}
        />
 <Route
          path="/signup"
          element={<Signup />}
        />
         <Route
          path="/userlogin"
          element={<Signup />}
        />
        {/* PROTECTED ROUTES */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-property"
          element={
            <ProtectedRoute>
              <AddProperty />
            </ProtectedRoute>
          }
        />

        <Route
          path="/properties"
          element={
            <ProtectedRoute>
              <Properties />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-property/:id"
          element={
            <ProtectedRoute>
              <EditProperty />
            </ProtectedRoute>
          }
        />

        <Route
          path="/property/:id"
          element={
            <ProtectedRoute>
              <PropertyDetails />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}