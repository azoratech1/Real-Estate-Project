import {
  Link
} from "react-router-dom";

import {
  Building2,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Instagram,
  Twitter,
  Linkedin,
  Youtube
} from "lucide-react";

function Footer() {

  const quickLinks = [

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

  const propertyTypes = [

    "Apartments",

    "Luxury Villas",

    "Commercial",

    "Penthouses",

    "Farm Houses"
  ];

  return (

    <footer
      className="
        relative
        bg-black
        text-white
        mt-24
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-white/5
          blur-[180px]
          rounded-full
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          lg:px-8
          pt-24
          pb-10
        "
      >

        {/* TOP CTA */}

        <div
          className="
            mb-20
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            lg:p-14
            flex
            flex-col
            lg:flex-row
            items-start
            lg:items-center
            justify-between
            gap-10
          "
        >

          <div>

            <p
              className="
                uppercase
                tracking-[4px]
                text-sm
                text-white/60
                mb-4
              "
            >

              Premium Real Estate

            </p>

            <h2
              className="
                text-4xl
                lg:text-5xl
                font-bold
                leading-tight
                max-w-3xl
              "
            >

              Find Your Dream
              Property With
              EstateHub

            </h2>

          </div>

          <Link
            to="/properties"
            className="
              h-[65px]
              px-8
              rounded-2xl
              bg-white
              text-black
              font-semibold
              flex
              items-center
              gap-3
              hover:scale-105
              transition-all
              shadow-2xl
              whitespace-nowrap
            "
          >

            Explore Properties

            <ArrowUpRight
              size={22}
            />

          </Link>

        </div>

        {/* MAIN GRID */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-14
            pb-20
            border-b
            border-white/10
          "
        >

          {/* BRAND */}

          <div>

            <div
              className="
                flex
                items-center
                gap-4
                mb-6
              "
            >

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white
                  text-black
                  flex
                  items-center
                  justify-center
                "
              >

                <Building2
                  size={28}
                />

              </div>

              <div>

                <h2
                  className="
                    text-3xl
                    font-bold
                  "
                >

                  EstateHub

                </h2>

                <p
                  className="
                    text-white/50
                    text-sm
                    mt-1
                  "
                >

                  Luxury Real Estate

                </p>

              </div>

            </div>

            <p
              className="
                text-white/60
                leading-8
                text-[15px]
              "
            >

              Discover premium
              properties, luxury villas,
              apartments and exclusive
              real estate investments
              with a modern digital
              experience.

            </p>

            {/* SOCIALS */}

            <div
              className="
                flex
                items-center
                gap-4
                mt-8
              "
            >

            {
  [
    Instagram,
    Twitter,
    Linkedin,
    Youtube
  ].map(
    (
      Icon,
      index
    ) => (

      <button

        key={index}

        className="
          w-12
          h-12
          rounded-2xl
          border
          border-white/10
          bg-white/5
          flex
          items-center
          justify-center
          hover:bg-white
          hover:text-black
          transition-all
        "
      >

        <Icon size={20} />

      </button>

    )
  )
}

            </div>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3
              className="
                text-2xl
                font-bold
                mb-8
              "
            >

              Quick Links

            </h3>

            <div
              className="
                space-y-5
              "
            >

              {
                quickLinks.map(
                  (link) => (

                    <Link

                      key={link.path}

                      to={link.path}

                      className="
                        flex
                        items-center
                        gap-3
                        text-white/60
                        hover:text-white
                        transition-all
                        group
                      "
                    >

                      <ArrowUpRight
                        size={18}
                        className="
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          transition-all
                        "
                      />

                      {link.name}

                    </Link>

                  )
                )
              }

            </div>

          </div>

          {/* PROPERTY TYPES */}

          <div>

            <h3
              className="
                text-2xl
                font-bold
                mb-8
              "
            >

              Property Types

            </h3>

            <div
              className="
                space-y-5
              "
            >

              {
                propertyTypes.map(
                  (
                    item,
                    index
                  ) => (

                    <div

                      key={index}

                      className="
                        flex
                        items-center
                        gap-3
                        text-white/60
                      "
                    >

                      <div
                        className="
                          w-2
                          h-2
                          rounded-full
                          bg-white/40
                        "
                      />

                      {item}

                    </div>

                  )
                )
              }

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3
              className="
                text-2xl
                font-bold
                mb-8
              "
            >

              Contact Us

            </h3>

            <div
              className="
                space-y-6
              "
            >

              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >

                  <MapPin
                    size={20}
                  />

                </div>

                <div>

                  <p
                    className="
                      text-white/50
                      text-sm
                      mb-1
                    "
                  >

                    Address

                  </p>

                  <p
                    className="
                      text-white/80
                      leading-7
                    "
                  >

                    New Delhi,
                    India

                  </p>

                </div>

              </div>

              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >

                  <Phone
                    size={20}
                  />

                </div>

                <div>

                  <p
                    className="
                      text-white/50
                      text-sm
                      mb-1
                    "
                  >

                    Phone

                  </p>

                  <p
                    className="
                      text-white/80
                    "
                  >

                    +91 99999 99999

                  </p>

                </div>

              </div>

              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >

                  <Mail
                    size={20}
                  />

                </div>

                <div>

                  <p
                    className="
                      text-white/50
                      text-sm
                      mb-1
                    "
                  >

                    Email

                  </p>

                  <p
                    className="
                      text-white/80
                    "
                  >

                    info@estatehub.com

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div
          className="
            pt-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
          "
        >

          <p
            className="
              text-white/40
              text-center
              md:text-left
            "
          >

            © 2026 EstateHub.
            All rights reserved.

          </p>

          <div
            className="
              flex
              items-center
              gap-6
              text-white/40
              text-sm
            "
          >

            <button
              className="
                hover:text-white
                transition-all
              "
            >

              Privacy Policy

            </button>

            <button
              className="
                hover:text-white
                transition-all
              "
            >

              Terms & Conditions

            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;