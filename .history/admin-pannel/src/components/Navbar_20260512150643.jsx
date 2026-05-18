import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";

import {
  LayoutDashboard,
  Building2,
  PlusSquare,
  LogOut
} from "lucide-react";

function Navbar() {

  const navigate = useNavigate();

  const location = useLocation();

  /*
  =====================================
  LOGOUT
  =====================================
  */

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/");
  };

  /*
  =====================================
  NAV ITEMS
  =====================================
  */

  const navItems = [

    {
      name: "Dashboard",
      path: "/dashboard",
      icon:
        <LayoutDashboard size={18} />
    },

    {
      name: "Properties",
      path: "/properties",
      icon:
        <Building2 size={18} />
    },

    {
      name: "Add Property",
      path: "/add-property",
      icon:
        <PlusSquare size={18} />
    }

  ];

  return (

    <div
      className="
        w-full
        bg-white
        border-b
        px-4
        md:px-8
        py-4
        flex
        items-center
        justify-between
        gap-5
      "
    >

      {/* LOGO */}

      <h1
        className="
          text-2xl
          font-bold
          whitespace-nowrap
        "
      >

        Property Admin

      </h1>

      {/* NAVIGATION */}

      <div
        className="
          flex
          items-center
          gap-2
          overflow-x-auto
        "
      >

        {
          navItems.map(
            (item) => (

              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-xl
                  whitespace-nowrap
                  transition-all
                  text-sm
                  md:text-base

                  ${
                    location.pathname ===
                    item.path

                      ? `
                        bg-black
                        text-white
                      `

                      : `
                        bg-gray-100
                        hover:bg-gray-200
                      `
                  }
                `}
              >

                {item.icon}

                {item.name}

              </Link>

            )
          )
        }

        {/* LOGOUT */}

        <button
          onClick={handleLogout}
          className="
            flex
            items-center
            gap-2
            bg-red-500
            hover:bg-red-600
            text-white
            px-4
            py-2
            rounded-xl
            whitespace-nowrap
            transition-all
            text-sm
            md:text-base
          "
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </div>
  );
}

export default Navbar;