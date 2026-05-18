import {
  useEffect,
  useState
} from "react";

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
        py-24
        bg-gray-50
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
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-6
            mb-14
          "
        >

          <div>

            <p
              className="
                text-sm
                uppercase
                tracking-[4px]
                text-gray-500
                mb-3
              "
            >

              Featured Listings

            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                leading-tight
              "
            >

              Handpicked
              Premium Properties

            </h2>

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

          )
        }

      </div>

    </section>
  );
}

export default FeaturedProperties;