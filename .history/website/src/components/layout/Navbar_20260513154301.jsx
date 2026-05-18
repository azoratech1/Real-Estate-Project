import {
  Link
} from "react-router-dom";

import {
  Menu,
  X
} from "lucide-react";

import {
  useState
} from "react";

function Navbar() {

  /*
  =====================================
  MOBILE MENU
  =====================================
  */

  const [isOpen, setIsOpen] =
    useState(false);

  const navLinks = [

    {
      name: "Home",
      path: "/"
    },

    {
      name: "Properties",
      path: "/properties"
    },

    {
      name: "About",
      path: "/about"
    },

    {
      name: "Contact",
      path: "/contact"
    }
  ];

  return (

    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white/90
        backdrop-blur-md
        border-b
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          h-[80px]
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}

        <Link
          to="/"
          className="
            text-2xl
            font-bold
          "
        >

          EstateHub

        </Link>

        {/* DESKTOP MENU */}

        <nav
          className="
            hidden
            md:flex
            items-center
            gap-10
          "
        >

          {
            navLinks.map(
              (link) => (

                <Link

                  key={link.path}

                  to={link.path}

                  className="
                    text-gray-700
                    hover:text-black
                    transition-all
                  "
                >

                  {link.name}

                </Link>

              )
            )
          }

        </nav>

        {/* CTA */}

        <Link

          to="/properties"

          className="
            hidden
            md:flex
            bg-black
            text-white
            px-6
            py-3
            rounded-2xl
            hover:bg-gray-800
            transition-all
          "
        >

          Explore

        </Link>

        {/* MOBILE BUTTON */}

        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className="md:hidden"
        >

          {
            isOpen

              ? <X size={28} />

              : <Menu size={28} />
          }

        </button>

      </div>

      {/* MOBILE MENU */}

      {
        isOpen && (

          <div
            className="
              md:hidden
              bg-white
              border-t
              px-5
              py-5
              space-y-5
            "
          >

            {
              navLinks.map(
                (link) => (

                  <Link

                    key={link.path}

                    to={link.path}

                    onClick={() =>
                      setIsOpen(false)
                    }

                    className="
                      block
                      text-lg
                    "
                  >

                    {link.name}

                  </Link>

                )
              )
            }

          </div>

        )
      }

    </header>
  );
}

export default Navbar;