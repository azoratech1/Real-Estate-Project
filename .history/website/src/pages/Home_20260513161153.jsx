import MainLayout from "../components/layout/MainLayout";

import HeroSection from "../components/home/HeroSection";

import FeaturedProperties from "../components/home/FeaturedProperties";

function Home() {

  return (

    <MainLayout>

      {/* HERO */}

      <HeroSection />

      {/* FEATURED PROPERTIES */}

      <FeaturedProperties />

      {/* WHY CHOOSE US */}
<section
  className="
    relative
    py-32
    overflow-hidden
    bg-gradient-to-b
    from-white
    via-gray-50
    to-white
  "
>

  {/* BACKGROUND EFFECTS */}

  <div
    className="
      absolute
      top-0
      left-0
      w-[400px]
      h-[400px]
      bg-gray-200/60
      rounded-full
      blur-[120px]
    "
  />

  <div
    className="
      absolute
      bottom-0
      right-0
      w-[500px]
      h-[500px]
      bg-black/5
      rounded-full
      blur-[140px]
    "
  />

  <div
    className="
      relative
      z-10
      max-w-7xl
      mx-auto
      px-5
    "
  >

    {/* HEADER */}

    <div
      className="
        text-center
        max-w-4xl
        mx-auto
        mb-20
      "
    >

      <div
        className="
          inline-flex
          items-center
          gap-3
          bg-black
          text-white
          px-6
          py-3
          rounded-full
          text-sm
          tracking-[3px]
          uppercase
          mb-8
        "
      >

        Why Choose EstateHub

      </div>

      <h2
        className="
          text-5xl
          md:text-7xl
          font-black
          leading-[1.1]
          text-gray-900
        "
      >

        Modern Real Estate
        Experience Built
        For The Future

      </h2>

      <p
        className="
          text-lg
          md:text-xl
          text-gray-600
          leading-9
          mt-8
          max-w-3xl
          mx-auto
        "
      >

        Discover premium properties,
        smart search tools and a
        seamless digital experience
        designed to help you buy,
        sell and explore real estate
        effortlessly.

      </p>

    </div>

    {/* GRID */}

    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-8
      "
    >

      {/* CARD 1 */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[40px]
          bg-white
          border
          border-gray-200
          p-10
          hover:-translate-y-3
          transition-all
          duration-500
          shadow-sm
          hover:shadow-2xl
        "
      >

        {/* GLOW */}

        <div
          className="
            absolute
            top-0
            right-0
            w-[180px]
            h-[180px]
            bg-black/5
            rounded-full
            blur-[80px]
            opacity-0
            group-hover:opacity-100
            transition-all
          "
        />

        {/* NUMBER */}

        <div
          className="
            absolute
            top-8
            right-8
            text-7xl
            font-black
            text-gray-100
          "
        >

          01

        </div>

        {/* ICON */}

        <div
          className="
            w-20
            h-20
            rounded-3xl
            bg-black
            text-white
            flex
            items-center
            justify-center
            text-4xl
            mb-8
            relative
            z-10
          "
        >

          🏡

        </div>

        {/* TITLE */}

        <h3
          className="
            text-3xl
            font-black
            mb-5
            relative
            z-10
          "
        >

          Premium Properties

        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            text-gray-600
            leading-9
            text-lg
            relative
            z-10
          "
        >

          Browse verified luxury
          villas, apartments,
          penthouses and commercial
          spaces in India’s top
          locations with complete
          transparency.

        </p>

        {/* BOTTOM */}

        <div
          className="
            mt-10
            pt-6
            border-t
            flex
            items-center
            justify-between
          "
        >

          <span
            className="
              text-gray-500
              font-medium
            "
          >

            Verified Listings

          </span>

          <div
            className="
              w-12
              h-12
              rounded-2xl
              bg-gray-100
              flex
              items-center
              justify-center
              group-hover:bg-black
              group-hover:text-white
              transition-all
            "
          >

            →

          </div>

        </div>

      </div>

      {/* CARD 2 */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[40px]
          bg-black
          text-white
          p-10
          hover:-translate-y-3
          transition-all
          duration-500
          shadow-2xl
        "
      >

        {/* NUMBER */}

        <div
          className="
            absolute
            top-8
            right-8
            text-7xl
            font-black
            text-white/10
          "
        >

          02

        </div>

        {/* ICON */}

        <div
          className="
            w-20
            h-20
            rounded-3xl
            bg-white
            text-black
            flex
            items-center
            justify-center
            text-4xl
            mb-8
            relative
            z-10
          "
        >

          📍

        </div>

        {/* TITLE */}

        <h3
          className="
            text-3xl
            font-black
            mb-5
            relative
            z-10
          "
        >

          Smart Location Search

        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            text-white/70
            leading-9
            text-lg
            relative
            z-10
          "
        >

          Discover nearby properties
          using intelligent search,
          live maps and advanced
          filtering tailored to your
          preferred location.

        </p>

        {/* FEATURES */}

        <div
          className="
            flex
            flex-wrap
            gap-3
            mt-10
          "
        >

          {
            [
              "Live Maps",
              "Nearby Search",
              "Location Insights"
            ].map((item) => (

              <div
                key={item}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/10
                  border
                  border-white/10
                  text-sm
                "
              >

                {item}

              </div>

            ))
          }

        </div>

      </div>

      {/* CARD 3 */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[40px]
          bg-white
          border
          border-gray-200
          p-10
          hover:-translate-y-3
          transition-all
          duration-500
          shadow-sm
          hover:shadow-2xl
        "
      >

        {/* GLOW */}

        <div
          className="
            absolute
            bottom-0
            left-0
            w-[180px]
            h-[180px]
            bg-gray-200
            rounded-full
            blur-[90px]
            opacity-0
            group-hover:opacity-100
            transition-all
          "
        />

        {/* NUMBER */}

        <div
          className="
            absolute
            top-8
            right-8
            text-7xl
            font-black
            text-gray-100
          "
        >

          03

        </div>

        {/* ICON */}

        <div
          className="
            w-20
            h-20
            rounded-3xl
            bg-black
            text-white
            flex
            items-center
            justify-center
            text-4xl
            mb-8
            relative
            z-10
          "
        >

          ⚡

        </div>

        {/* TITLE */}

        <h3
          className="
            text-3xl
            font-black
            mb-5
            relative
            z-10
          "
        >

          Fast & Modern Platform

        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            text-gray-600
            leading-9
            text-lg
            relative
            z-10
          "
        >

          Built using modern
          technologies for blazing
          fast loading, smooth
          browsing and premium user
          experience across devices.

        </p>

        {/* STATS */}

        <div
          className="
            mt-10
            grid
            grid-cols-2
            gap-5
          "
        >

          <div
            className="
              rounded-2xl
              bg-gray-50
              p-5
            "
          >

            <h4
              className="
                text-3xl
                font-black
              "
            >

              99%

            </h4>

            <p
              className="
                text-gray-500
                mt-2
                text-sm
              "
            >

              Faster Search

            </p>

          </div>

          <div
            className="
              rounded-2xl
              bg-gray-50
              p-5
            "
          >

            <h4
              className="
                text-3xl
                font-black
              "
            >

              24/7

            </h4>

            <p
              className="
                text-gray-500
                mt-2
                text-sm
              "
            >

              Support

            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* STATS */}

      <section
        className="
          py-24
          bg-black
          text-white
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
              text-center
            "
          >

            {/* STAT */}

            <div>

              <h2
                className="
                  text-5xl
                  font-bold
                  mb-3
                "
              >

                500+

              </h2>

              <p
                className="
                  text-gray-400
                "
              >

                Properties Listed

              </p>

            </div>

            {/* STAT */}

            <div>

              <h2
                className="
                  text-5xl
                  font-bold
                  mb-3
                "
              >

                120+

              </h2>

              <p
                className="
                  text-gray-400
                "
              >

                Happy Clients

              </p>

            </div>

            {/* STAT */}

            <div>

              <h2
                className="
                  text-5xl
                  font-bold
                  mb-3
                "
              >

                20+

              </h2>

              <p
                className="
                  text-gray-400
                "
              >

                Cities Covered

              </p>

            </div>

            {/* STAT */}

            <div>

              <h2
                className="
                  text-5xl
                  font-bold
                  mb-3
                "
              >

                24/7

              </h2>

              <p
                className="
                  text-gray-400
                "
              >

                Customer Support

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section
        className="
          py-24
          bg-gray-50
        "
      >

        <div
          className="
            max-w-5xl
            mx-auto
            px-5
            text-center
          "
        >

          <h2
            className="
              text-4xl
              md:text-6xl
              font-bold
              leading-tight
            "
          >

            Find Your Perfect
            Property Today

          </h2>

          <p
            className="
              text-gray-600
              text-lg
              mt-8
              leading-8
              max-w-3xl
              mx-auto
            "
          >

            Explore premium homes,
            apartments and commercial
            spaces with modern search
            and smart recommendations.

          </p>

          <button
            className="
              mt-10
              bg-black
              text-white
              px-10
              py-4
              rounded-2xl
              text-lg
              hover:bg-gray-800
              transition-all
            "
          >

            Explore Properties

          </button>

        </div>

      </section>

    </MainLayout>
  );
}

export default Home;