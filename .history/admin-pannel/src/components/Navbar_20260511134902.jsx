import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="w-full bg-white shadow-md px-4 md:px-8 py-4 flex items-center justify-between">

      <h1 className="text-xl md:text-2xl font-bold">
        Property Admin
      </h1>

      <div className="flex items-center gap-4">

        <Link
          to="/dashboard"
          className="text-sm md:text-base hover:text-blue-500"
        >
          Dashboard
        </Link>

        <Link
          to="/properties"
          className="text-sm md:text-base hover:text-blue-500"
        >
          Properties
        </Link>

        <Link
          to="/add-property"
          className="text-sm md:text-base hover:text-blue-500"
        >
          Add Property
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-2 rounded text-sm md:text-base"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Navbar;