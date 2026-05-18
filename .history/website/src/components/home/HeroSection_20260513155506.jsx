import {
  Search,
  MapPin,
  ArrowRight,
  Building2,
  Home,
  Landmark
} from "lucide-react";

import {
  motion
} from "framer-motion";

import {
  useNavigate
} from "react-router-dom";

import {
  useState
} from "react";

function HeroSection() {

  const navigate =
    useNavigate();

  /*
  =====================================
  STATES
  =====================================
  */

  const [search, setSearch] =
    useState("");

  const [propertyType, setPropertyType] =
    useState("");

  /*
  =====================================
  HANDLE SEARCH
  =====================================
  */

  const handleSearch = () => {

    const query =
      new URLSearchParams({

        search,

        propertyType
      });

    navigate(
      `/properties?${query.toString()}`
    );
  };

  return (

    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        bg-black
      "
    >

      {/* BACKGROUND IMAGE */}

      <div
        className="
          absolute
          inset-0
        "
      >

        <img

          src="
            https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1974&auto=format&fit=crop
          "

          alt="Luxury Home"

          className="
            w-full
            h-full
            object-cover
            scale-105
          "
        />

        {/* OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/80
            via-black/60
            to-black/40
          "
        />

      </div>

      {/* GLOW EFFECT */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[500px]
          h-[500px]
          bg-white/10
          blur-[150px]
          rounded-full
        "
      />

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          w-full
          pt-32
          pb-20
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-20
            items-center
          "
        >

          {/* LEFT CONTENT */}

          <div>

            {/* TAG */}

            <motion.div

              initial={{
                opacity: 0,
                y: 40
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.6
              }}

              className="
                inline-flex
                items-center
                gap-2
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                px-5
                py-3
                rounded-full
                text-sm
                text-white
                mb-8
              "
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-green-400
                "
              />

              Trusted Real Estate Platform

            </motion.div>

            {/* HEADING */}

            <motion.h1

              initial={{
                opacity: 0,
                y: 50
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.8
              }}

              className="
                text-5xl
                md:text-7xl
                font-black
                leading-[1.1]
                text-white
              "
            >

              Find Your
              Perfect
              <span
                className="
                  block
                  text-gray-300
                "
              >

                Dream Home

              </span>

            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p

              initial={{
                opacity: 0,
                y: 40
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 1
              }}

              className="
                text-lg
                md:text-xl
                text-gray-300
                leading-8
                mt-8
                max-w-2xl
              "
            >

              Explore luxury villas,
              apartments, plots and
              commercial properties
              with advanced search,
              smart recommendations
              and modern real estate
              experience.

            </motion.p>

            {/* STATS */}

            <motion.div

              initial={{
                opacity: 0,
                y: 30
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 1.2
              }}

              className="
                flex
                flex-wrap
                gap-10
                mt-12
              "
            >

              <div>

                <h3
                  className="
                    text-4xl
                    font-bold
                    text-white
                  "
                >

                  500+

                </h3>

                <p className="text-gray-400 mt-2">

                  Premium Listings

                </p>

              </div>

              <div>

                <h3
                  className="
                    text-4xl
                    font-bold
                    text-white
                  "
                >

                  20+

                </h3>

                <p className="text-gray-400 mt-2">

                  Cities Covered

                </p>

              </div>

              <div>

                <h3
                  className="
                    text-4xl
                    font-bold
                    text-white
                  "
                >

                  120+

                </h3>

                <p className="text-gray-400 mt-2">

                  Happy Clients

                </p>

              </div>

            </motion.div>

          </div>

          {/* SEARCH CARD */}

          <motion.div

            initial={{
              opacity: 0,
              y: 80
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 1
            }}

            className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              rounded-[40px]
              p-8
              shadow-2xl
            "
          >

            {/* HEADER */}

            <div className="mb-8">

              <h2
                className="
                  text-3xl
                  font-bold
                  text-white
                "
              >

                Search Properties

              </h2>

              <p
                className="
                  text-gray-300
                  mt-3
                "
              >

                Find your perfect
                property instantly

              </p>

            </div>

            {/* SEARCH INPUT */}

            <div className="space-y-5">

              {/* LOCATION */}

              <div
                className="
                  flex
                  items-center
                  gap-4
                  bg-white
                  rounded-2xl
                  px-5
                  py-5
                "
              >

                <MapPin
                  className="text-gray-500"
                />

                <input

                  type="text"

                  placeholder="
                    Search city or location
                  "

                  value={search}

                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }

                  className="
                    w-full
                    outline-none
                    text-black
                    bg-transparent
                  "
                />

              </div>

              {/* PROPERTY TYPE */}

              <div
                className="
                  grid
                  grid-cols-3
                  gap-4
                "
              >

                {/* APARTMENT */}

                <button

                  onClick={() =>
                    setPropertyType(
                      "Apartment"
                    )
                  }

                  className={`
                    
                    rounded-2xl
                    p-5
                    border
                    transition-all
                    
                    ${
                      propertyType ===
                      "Apartment"

                        ? "bg-white text-black border-white"

                        : "bg-white/10 text-white border-white/20"
                    }
                  `}
                >

                  <Building2
                    className="
                      mx-auto
                      mb-3
                    "
                  />

                  Apartment

                </button>

                {/* VILLA */}

                <button

                  onClick={() =>
                    setPropertyType(
                      "Villa"
                    )
                  }

                  className={`
                    
                    rounded-2xl
                    p-5
                    border
                    transition-all
                    
                    ${
                      propertyType ===
                      "Villa"

                        ? "bg-white text-black border-white"

                        : "bg-white/10 text-white border-white/20"
                    }
                  `}
                >

                  <Home
                    className="
                      mx-auto
                      mb-3
                    "
                  />

                  Villa

                </button>

                {/* COMMERCIAL */}

                <button

                  onClick={() =>
                    setPropertyType(
                      "Commercial"
                    )
                  }

                  className={`
                    
                    rounded-2xl
                    p-5
                    border
                    transition-all
                    
                    ${
                      propertyType ===
                      "Commercial"

                        ? "bg-white text-black border-white"

                        : "bg-white/10 text-white border-white/20"
                    }
                  `}
                >

                  <Landmark
                    className="
                      mx-auto
                      mb-3
                    "
                  />

                  Commercial

                </button>

              </div>

              {/* BUTTON */}

              <button

                onClick={handleSearch}

                className="
                  w-full
                  bg-white
                  text-black
                  py-5
                  rounded-2xl
                  font-bold
                  text-lg
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:scale-[1.02]
                  transition-all
                "
              >

                Search Properties

                <ArrowRight size={22} />

              </button>

            </div>

            {/* BOTTOM TEXT */}

            <div
              className="
                mt-6
                text-center
                text-sm
                text-gray-300
              "
            >

              Trusted by thousands
              of buyers across India

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;