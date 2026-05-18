import {
  Search,
  MapPin,
  ArrowRight,
  Building2,
  Home,
  Landmark,
  Star,
  ShieldCheck,
  BadgeIndianRupee
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
import HomeSearch from "./HomeSearch";
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
  SEARCH
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

  /*
  =====================================
  PROPERTY TYPES
  =====================================
  */

  const propertyTypes = [

    {
      name: "Apartment",
      icon: <Building2 size={24} />
    },

    {
      name: "Villa",
      icon: <Home size={24} />
    },

    {
      name: "Commercial",
      icon: <Landmark size={24} />
    }
  ];

  return (

    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        flex
        items-center
      "
    >

      {/* BACKGROUND */}

      <div
        className="
          absolute
          inset-0
        "
      >

        <img

          src="
            https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1974&auto=format&fit=crop
          "

          alt="Luxury Real Estate"

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
            from-black/90
            via-black/75
            to-black/50
          "
        />

      </div>

      {/* BLUR CIRCLES */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[500px]
          h-[500px]
          bg-white/10
          rounded-full
          blur-[150px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[400px]
          h-[400px]
          bg-gray-500/20
          rounded-full
          blur-[120px]
        "
      />

      {/* MAIN CONTENT */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          w-full
          pt-16
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

            {/* TOP BADGE */}

            <motion.div

              initial={{
                opacity: 0,
                y: 20
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.5
              }}

              className="
                inline-flex
                items-center
                gap-3
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                px-5
                py-3
                rounded-full
                text-sm
                text-white
                mb-8
              "
            >

              <Star
                size={16}
                className="
                  fill-yellow-400
                  text-yellow-400
                "
              />

              India’s Trusted
              Real Estate Platform

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
                leading-[1.05]
                text-white
              "
            >

              Discover Your
              <span
                className="
                  block
                  text-gray-300
                "
              >

                Dream Property

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
                leading-9
                mt-8
                max-w-2xl
              "
            >

              Buy luxury villas,
              modern apartments,
              plots and commercial
              spaces with smart
              location search,
              premium listings and
              trusted real estate
              experience across India.

            </motion.p>

            {/* FEATURES */}

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
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-5
                mt-12
              "
            >

              {/* FEATURE */}

              <div
                className="
                  bg-white/10
                  backdrop-blur-lg
                  border
                  border-white/10
                  rounded-3xl
                  p-5
                "
              >

                <ShieldCheck
                  className="
                    text-green-400
                    mb-4
                  "
                />

                <h3
                  className="
                    text-white
                    font-bold
                    text-lg
                  "
                >

                  Verified Listings

                </h3>

                <p
                  className="
                    text-gray-300
                    text-sm
                    mt-2
                    leading-6
                  "
                >

                  100% genuine and
                  verified properties.

                </p>

              </div>

              {/* FEATURE */}

              <div
                className="
                  bg-white/10
                  backdrop-blur-lg
                  border
                  border-white/10
                  rounded-3xl
                  p-5
                "
              >

                <MapPin
                  className="
                    text-blue-400
                    mb-4
                  "
                />

                <h3
                  className="
                    text-white
                    font-bold
                    text-lg
                  "
                >

                  Smart Search

                </h3>

                <p
                  className="
                    text-gray-300
                    text-sm
                    mt-2
                    leading-6
                  "
                >

                  Find nearby homes
                  using live maps.

                </p>

              </div>

              {/* FEATURE */}

              <div
                className="
                  bg-white/10
                  backdrop-blur-lg
                  border
                  border-white/10
                  rounded-3xl
                  p-5
                "
              >

                <BadgeIndianRupee
                  className="
                    text-yellow-400
                    mb-4
                  "
                />

                <h3
                  className="
                    text-white
                    font-bold
                    text-lg
                  "
                >

                  Best Deals

                </h3>

                <p
                  className="
                    text-gray-300
                    text-sm
                    mt-2
                    leading-6
                  "
                >

                  Premium properties
                  at competitive prices.

                </p>

              </div>

            </motion.div>

            {/* STATS */}

            <motion.div

              initial={{
                opacity: 0,
                y: 20
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 1.4
              }}

              className="
                flex
                flex-wrap
                gap-10
                mt-14
              "
            >

              <div>

                <h2
                  className="
                    text-5xl
                    font-black
                    text-white
                  "
                >

                  500+

                </h2>

                <p className="text-gray-400 mt-2">

                  Premium Properties

                </p>

              </div>

              <div>

                <h2
                  className="
                    text-5xl
                    font-black
                    text-white
                  "
                >

                  20+

                </h2>

                <p className="text-gray-400 mt-2">

                  Cities Covered

                </p>

              </div>

              <div>

                <h2
                  className="
                    text-5xl
                    font-black
                    text-white
                  "
                >

                  120+

                </h2>

                <p className="text-gray-400 mt-2">

                  Happy Families

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
    relative
  "
>

  {/* GLOW */}

  <div
    className="
      absolute
      inset-0
      bg-white/10
      blur-[120px]
      rounded-[50px]
      scale-110
    "
  />

  {/* CARD */}

  <div
    className="
      relative
      bg-white/10
      backdrop-blur-2xl
      border
      border-white/10
      rounded-[40px]
      p-6
      md:p-8
      shadow-[0_20px_80px_rgba(0,0,0,0.35)]
      overflow-visible
    "
  >

    {/* BADGE */}

    <div
      className="
        inline-flex
        items-center
        gap-3
        bg-white/10
        border
        border-white/10
        rounded-full
        px-5
        py-3
        text-sm
        text-white
        mb-6
      "
    >

      <Star
        size={16}
        className="
          fill-yellow-400
          text-yellow-400
        "
      />

      AI Powered Search

    </div>

    {/* TITLE */}

    <h2
      className="
        text-4xl
        md:text-5xl
        font-black
        text-white
        leading-tight
      "
    >

      Search Premium
      Properties

    </h2>

    {/* DESC */}

    <p
      className="
        text-gray-300
        mt-6
        text-lg
        leading-8
      "
    >

      Discover luxury villas,
      apartments, plots and
      commercial spaces with
      intelligent location
      suggestions and smart
      property filters.

    </p>

    {/* SEARCH */}

    <div className="mt-10">

      <HomeSearch />

    </div>

    {/* STATS */}

    <div
      className="
        grid
        grid-cols-3
        gap-4
        mt-10
      "
    >

      <div
        className="
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-5
          text-center
        "
      >

        <h3
          className="
            text-3xl
            md:text-4xl
            font-black
            text-white
          "
        >

          500+

        </h3>

        <p
          className="
            text-gray-400
            mt-2
            text-sm
          "
        >

          Listings

        </p>

      </div>

      <div
        className="
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-5
          text-center
        "
      >

        <h3
          className="
            text-3xl
            md:text-4xl
            font-black
            text-white
          "
        >

          20+

        </h3>

        <p
          className="
            text-gray-400
            mt-2
            text-sm
          "
        >

          Cities

        </p>

      </div>

      <div
        className="
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-5
          text-center
        "
      >

        <h3
          className="
            text-3xl
            md:text-4xl
            font-black
            text-white
          "
        >

          24/7

        </h3>

        <p
          className="
            text-gray-400
            mt-2
            text-sm
          "
        >

          Support

        </p>

      </div>

    </div>

  </div>

</motion.div>
        
  
        </div>

      </div>

    </section>
  );
}

export default HeroSection;