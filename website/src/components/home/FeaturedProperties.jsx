import {
  useEffect,
  useState
} from "react";

import {
  ArrowRight
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import PropertyCard from "../property/PropertyCard";

import Loader from "../common/Loader";

import EmptyState from "../common/EmptyState";

import {
  getFeaturedProperties
} from "../../services/api";

function FeaturedProperties() {

  /*
  =====================================
  STATES
  =====================================
  */

  const [properties, setProperties] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  /*
  =====================================
  FETCH PROPERTIES
  =====================================
  */

  const fetchProperties =
    async () => {

      try {

        const data =
          await getFeaturedProperties();

        setProperties(
          data.properties || []
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  /*
  =====================================
  LOAD DATA
  =====================================
  */

  useEffect(() => {

    fetchProperties();

  }, []);

  return (

    <section
      className="
        relative
        py-28
        bg-gradient-to-b
        from-gray-50
        to-white
        overflow-hidden
      "
    >

      {/* BACKGROUND BLUR */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[400px]
          h-[400px]
          bg-gray-200/50
          rounded-full
          blur-[120px]
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          relative
          z-10
        "
      >

        {/* TOP HEADER */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-8
            mb-16
          "
        >

          {/* LEFT */}

          <div
            className="
              max-w-3xl
            "
          >

            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-black
                text-white
                px-5
                py-2
                rounded-full
                text-sm
                tracking-wide
                mb-6
              "
            >

              Premium Collection

            </div>

            <h2
              className="
                text-4xl
                md:text-6xl
                font-black
                leading-tight
                text-gray-900
              "
            >

              Featured
              Luxury Properties

            </h2>

            <p
              className="
                text-lg
                text-gray-600
                leading-8
                mt-6
                max-w-2xl
              "
            >

              Explore handpicked
              premium apartments,
              villas and commercial
              properties in top
              locations with modern
              amenities and verified
              listings.

            </p>

          </div>

          {/* RIGHT */}

          <div
            className="
              flex
              items-center
              gap-4
            "
          >

            <div
              className="
                hidden
                md:flex
                items-center
                gap-10
                bg-white
                border
                rounded-3xl
                px-8
                py-5
                shadow-sm
              "
            >

              <div>

                <h3
                  className="
                    text-3xl
                    font-black
                  "
                >

                  500+

                </h3>

                <p
                  className="
                    text-gray-500
                    text-sm
                    mt-1
                  "
                >

                  Properties

                </p>

              </div>

              <div>

                <h3
                  className="
                    text-3xl
                    font-black
                  "
                >

                  20+

                </h3>

                <p
                  className="
                    text-gray-500
                    text-sm
                    mt-1
                  "
                >

                  Cities

                </p>

              </div>

            </div>

            {/* BUTTON */}

            <Link

              to="/properties"

              className="
                bg-black
                text-white
                px-7
                py-4
                rounded-2xl
                flex
                items-center
                gap-3
                hover:scale-105
                transition-all
                shadow-lg
              "
            >

              View All

              <ArrowRight size={20} />

            </Link>

          </div>

        </div>

        {/* LOADING */}

        {
          loading ? (

            <Loader />

          ) : properties.length === 0 ? (

            <EmptyState

              title="
                No Featured Properties
              "

              description="
                Featured properties will appear here.
              "

            />

          ) : (

            <>
              {/* GRID */}

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  xl:grid-cols-3
                  gap-8
                "
              >

                {
                  properties.map(
                    (property) => (

                      <PropertyCard

                        key={property._id}

                        property={property}

                      />

                    )
                  )
                }

              </div>

              {/* BOTTOM CTA */}

              <div
                className="
                  mt-20
                  bg-black
                  rounded-[40px]
                  p-10
                  md:p-16
                  text-white
                  flex
                  flex-col
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                  gap-10
                "
              >

                <div>

                  <h3
                    className="
                      text-3xl
                      md:text-5xl
                      font-black
                      leading-tight
                    "
                  >

                    Looking for Your
                    Perfect Property?

                  </h3>

                  <p
                    className="
                      text-gray-300
                      mt-5
                      text-lg
                      leading-8
                      max-w-2xl
                    "
                  >

                    Browse thousands of
                    verified properties
                    across India with
                    smart search and
                    premium experience.

                  </p>

                </div>

                <Link

                  to="/properties"

                  className="
                    bg-white
                    text-black
                    px-8
                    py-5
                    rounded-2xl
                    font-bold
                    flex
                    items-center
                    gap-3
                    w-fit
                    hover:scale-105
                    transition-all
                  "
                >

                  Explore Properties

                  <ArrowRight size={22} />

                </Link>

              </div>
            </>

          )
        }

      </div>

    </section>
  );
}

export default FeaturedProperties;