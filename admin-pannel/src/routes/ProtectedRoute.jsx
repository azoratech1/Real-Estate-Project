import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  /*
  =====================================
  CHECK TOKEN
  =====================================
  */

  const token = localStorage.getItem("token");

  /*
  =====================================
  REDIRECT IF NO TOKEN
  =====================================
  */

  if (!token) {
    return <Navigate to="/" replace />;
  }

  /*
  =====================================
  SHOW PAGE
  =====================================
  */

  return children;
}

export default ProtectedRoute;