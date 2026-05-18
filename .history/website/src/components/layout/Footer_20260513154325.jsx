import {
  Link
} from "react-router-dom";

function Footer() {

  return (

    <footer
      className="
        bg-black
        text-white
        pt-20
        pb-10
        mt-20
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-5
        "
      >

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-4
            gap-10
            pb-16
            border-b
            border-white/10
          "
        >

          {/* BRAND */}

          <div>

            <h2
              className="
                text-3xl
                font-bold
                mb-5
              "
            >

              EstateHub

            </h2>

            <p
              className="
                text-gray-400
                leading-7
              "
            >

              Discover premium
              properties with modern
              real estate experience.

            </p>

          </div>

          {/* LINKS */}

          <div>

            <h3
              className="
                text-xl
                font-semibold
                mb-5
              "
            >

              Quick Links

            </h3>

            <div className="space-y-3">

              <Link
                to="/"
                className="
                  block
                  text-gray-400
                  hover:text-white
                "
              >

                Home

              </Link>

              <Link
                to="/properties"
                className="
                  block
                  text-gray-400
                  hover:text-white
                "
              >

                Properties

              </Link>

              <Link
                to="/about"
                className="
                  block
                  text-gray-400
                  hover:text-white
                "
              >

                About

              </Link>

            </div>

          </div>

          {/* PROPERTY TYPES */}

          <div>

            <h3
              className="
                text-xl
                font-semibold
                mb-5
              "
            >

              Property Types

            </h3>

            <div className="space-y-3">

              <p className="text-gray-400">
                Apartments
              </p>

              <p className="text-gray-400">
                Villas
              </p>

              <p className="text-gray-400">
                Commercial
              </p>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3
              className="
                text-xl
                font-semibold
                mb-5
              "
            >

              Contact

            </h3>

            <div className="space-y-3">

              <p className="text-gray-400">
                New Delhi, India
              </p>

              <p className="text-gray-400">
                +91 9999999999
              </p>

              <p className="text-gray-400">
                info@estatehub.com
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div
          className="
            pt-8
            text-center
            text-gray-500
          "
        >

          © 2026 EstateHub.
          All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;