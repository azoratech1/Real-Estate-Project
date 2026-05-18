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
          py-24
          bg-white
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
          "
        >

          {/* HEADER */}

          <div
            className="
              text-center
              max-w-3xl
              mx-auto
              mb-16
            "
          >

            <p
              className="
                uppercase
                tracking-[4px]
                text-sm
                text-gray-500
                mb-4
              "
            >

              Why Choose Us

            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                leading-tight
              "
            >

              Modern Real Estate
              Experience Built For
              Everyone

            </h2>

          </div>

          {/* GRID */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-8
            "
          >

            {/* CARD 1 */}

            <div
              className="
                bg-gray-50
                rounded-3xl
                p-10
                border
              "
            >

              <div
                className="
                  text-5xl
                  mb-6
                "
              >

                🏡

              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  mb-4
                "
              >

                Premium Properties

              </h3>

              <p
                className="
                  text-gray-600
                  leading-8
                "
              >

                Discover verified
                apartments, villas,
                plots and luxury
                properties across
                India.

              </p>

            </div>

            {/* CARD 2 */}

            <div
              className="
                bg-gray-50
                rounded-3xl
                p-10
                border
              "
            >

              <div
                className="
                  text-5xl
                  mb-6
                "
              >

                📍

              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  mb-4
                "
              >

                Smart Location Search

              </h3>

              <p
                className="
                  text-gray-600
                  leading-8
                "
              >

                Search nearby
                properties with
                modern map based
                browsing and advanced
                filtering.

              </p>

            </div>

            {/* CARD 3 */}

            <div
              className="
                bg-gray-50
                rounded-3xl
                p-10
                border
              "
            >

              <div
                className="
                  text-5xl
                  mb-6
                "
              >

                ⚡

              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  mb-4
                "
              >

                Fast & Modern

              </h3>

              <p
                className="
                  text-gray-600
                  leading-8
                "
              >

                Built with modern
                technologies for
                smooth browsing,
                faster loading and
                premium experience.

              </p>

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