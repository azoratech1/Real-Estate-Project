import {
  Link,
  NavLink
} from "react-router-dom";

import {
  Menu,
  X,
  Building2
} from "lucide-react";

import {
  useEffect,
  useState
} from "react";

function Navbar() {



  const [isOpen, setIsOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  /*
  =====================================
  SCROLL EFFECT
  =====================================
  */

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(
        window.scrollY > 20
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  /*
  =====================================
  NAV LINKS
  =====================================
  */

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
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        ${

          scrolled

            ? `
              bg-white/80
              backdrop-blur-xl
              border-b
              border-gray-200
              shadow-sm
            `

            : `
              bg-transparent
            `
        }
      `}
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          lg:px-8
          h-[85px]
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}

        <Link
          to="/"
          className="
            flex
            items-center
            gap-3
            group
          "
        >

          <div
            className="
              w-11
              h-11
              rounded-2xl
              bg-black
              text-white
              flex
              items-center
              justify-center
              shadow-lg
            "
          >

            <Building2 size={22} />

          </div>

          <div>

            <h1
              className="
                text-xl
                font-bold
                leading-none
              "
            >

              EstateHub

            </h1>

            <p
              className="
                text-xs
                text-gray-500
                mt-1
              "
            >

              Premium Properties

            </p>

          </div>

        </Link>

        {/* DESKTOP NAV */}

        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-2
            bg-white/70
            backdrop-blur-xl
            border
            border-gray-200
            px-3
            py-2
            rounded-full
            shadow-sm
          "
        >

          {
            navLinks.map(
              (link) => (

                <NavLink

                  key={link.path}

                  to={link.path}

                  className={({

                    isActive

                  }) => `

                    px-5
                    py-2.5
                    rounded-full
                    text-sm
                    font-medium
                    transition-all
                    duration-300

                    ${

                      isActive

                        ? `
                          bg-black
                          text-white
                          shadow-md
                        `

                        : `
                          text-gray-700
                          hover:bg-gray-100
                        `
                    }
                  `}
                >

                  {link.name}

                </NavLink>

              )
            )
          }

        </nav>

        {/* RIGHT SECTION */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          {/* CTA */}
{/* LOGIN */}

<a

  href="https://real-estate-project-1-ffwb.onrender.com/userlogin"

  target="_blank"

  rel="noreferrer"

  className="
    hidden
    md:flex
    items-center
    justify-center
    border
    border-gray-300
    bg-white/80
    backdrop-blur-xl
    text-black
    px-5
    h-12
    rounded-full
    font-medium
    hover:bg-gray-100
    transition-all
    duration-300
  "
>

  Login

</a>

{/* SIGNUP */}

<a

  href="https://real-estate-project-1-ffwb.onrender.com/signup"

  target="_blank"

  rel="noreferrer"

  className="
    hidden
    md:flex
    items-center
    justify-center
    bg-black
    text-white
    px-6
    h-12
    rounded-full
    font-medium
    shadow-lg
    hover:scale-105
    hover:bg-gray-900
    transition-all
    duration-300
  "
>

  Sign Up

</a>

          {/* MOBILE MENU BUTTON */}

          <button

            onClick={() =>
              setIsOpen(!isOpen)
            }

            className="
              lg:hidden
              w-11
              h-11
              rounded-xl
              border
              flex
              items-center
              justify-center
              bg-white
              shadow-sm
            "
          >

            {
              isOpen

                ? <X size={24} />

                : <Menu size={24} />
            }

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300

          ${

            isOpen

              ? `
                max-h-[500px]
                opacity-100
              `

              : `
                max-h-0
                opacity-0
              `
          }
        `}
      >

        <div
          className="
            mx-4
            mb-4
            bg-white/95
            backdrop-blur-xl
            border
            border-gray-200
            rounded-3xl
            p-5
            shadow-2xl
          "
        >

          <div
            className="
              flex
              flex-col
              gap-2
            "
          >

            {
              navLinks.map(
                (link) => (

                  <NavLink

                    key={link.path}

                    to={link.path}

                    onClick={() =>
                      setIsOpen(false)
                    }

                    className={({

                      isActive

                    }) => `

                      px-4
                      py-3
                      rounded-2xl
                      font-medium
                      transition-all

                      ${

                        isActive

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

                    {link.name}

                  </NavLink>

                )
              )
            }

          </div>

          {/* MOBILE CTA */}

        {/* MOBILE BUTTONS */}

<div
  className="
    mt-5
    flex
    flex-col
    gap-3
  "
>

  <a

    href="https://real-estate-project-1-ffwb.onrender.com/userlogin"

    target="_blank"

    rel="noreferrer"

    className="
      h-12
      rounded-2xl
      border
      border-gray-200
      bg-gray-50
      text-black
      flex
      items-center
      justify-center
      font-medium
    "
  >

    Login

  </a>

  <a

    href="https://real-estate-project-1-ffwb.onrender.com/signup"

    target="_blank"

    rel="noreferrer"

    className="
      h-12
      rounded-2xl
      bg-black
      text-white
      flex
      items-center
      justify-center
      font-medium
      shadow-lg
    "
  >

    Create Account

  </a>

</div>
        </div>

      </div>

    </header>
  );
}

export default Navbar;