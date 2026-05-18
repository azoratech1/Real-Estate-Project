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
  USER
  =====================================
  */

  const user = JSON.parse(
    localStorage.getItem("user")
  );

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

    <header
      className="
        sticky
        top-0
        z-50
        bg-white/90
        backdrop-blur-md
        border-b
      "
    >

      <div
        className="
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

        <div>

          <h1
            className="
              text-2xl
              md:text-3xl
              font-black
              tracking-tight
            "
          >

            Property Admin

          </h1>

          <p
            className="
              text-sm
              text-gray-500
              mt-1
            "
          >

            Real Estate CMS

          </p>

        </div>

        {/* NAVIGATION */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-3
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
                    py-2.5
                    rounded-xl
                    transition-all
                    font-medium
                    
                    ${
                      location.pathname ===
                      item.path

                        ? `
                          bg-black
                          text-white
                        `

                        : `
                          text-gray-700
                          hover:bg-gray-100
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

        </div>

        {/* RIGHT SIDE */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          {/* USER */}

          <div
            className="
              hidden
              md:flex
              flex-col
              items-end
            "
          >

            <h3
              className="
                text-sm
                font-semibold
              "
            >

              {user?.name || "Admin"}

            </h3>

            <p
              className="
                text-xs
                text-gray-500
              "
            >

              Administrator

            </p>

          </div>

          {/* AVATAR */}

          <div
            className="
              w-11
              h-11
              rounded-full
              bg-black
              text-white
              flex
              items-center
              justify-center
              font-bold
              text-lg
            "
          >

            {
              user?.name
                ?.charAt(0)
                ?.toUpperCase()
            }

          </div>

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
              py-2.5
              rounded-xl
              transition-all
              font-medium
            "
          >

            <LogOut size={18} />

            <span className="hidden md:block">

              Logout

            </span>

          </button>

        </div>

      </div>

      {/* MOBILE NAV */}

      <div
        className="
          md:hidden
          px-4
          pb-4
          flex
          gap-3
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
                  whitespace-nowrap
                  px-4
                  py-2.5
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all

                  ${
                    location.pathname ===
                    item.path

                      ? `
                        bg-black
                        text-white
                      `

                      : `
                        bg-gray-100
                        text-gray-700
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

      </div>

    </header>
  );
}

export default Navbar;