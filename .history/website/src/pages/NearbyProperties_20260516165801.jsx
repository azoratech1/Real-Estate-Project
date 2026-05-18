import {
  useEffect,
  useState
} from "react";

import {
  useLocation
} from "react-router-dom";

import MainLayout
  from "../components/layout/MainLayout";

import PropertyGrid
  from "../components/property/PropertyGrid";

import Loader
  from "../components/common/Loader";

import EmptyState
  from "../components/common/EmptyState";

import API
  from "../services/api";

function NearbyProperties() {

  /*
  =====================================
  STATES
  =====================================
  */

  const [properties,
    setProperties] =
    useState([]);

  const [loading,
    setLoading] =
    useState(true);

  const location =
    useLocation();

  /*
  =====================================
  FETCH NEARBY
  =====================================
  */

  const fetchNearby =
    async () => {

      try {

        const params =
          new URLSearchParams(
            location.search
          );

        const lat =
          params.get("lat");

        const lng =
          params.get("lng");

        const response =
          await API.get(

            `/properties/nearby/search?lat=${lat}&lng=${lng}`
          );

        if (
          response.data.success
        ) {

          setProperties(

            response.data
              .properties
          );
        }

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  /*
  =====================================
  LOAD
  =====================================
  */

  useEffect(() => {

    fetchNearby();

  }, []);

  return (

    <MainLayout>

      <div
        className="
          min-h-screen
          bg-[#f8fafc]
          pt-32
          pb-20
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
              mb-16
            "
          >

            <p
              className="
                uppercase
                tracking-[4px]
                text-primary
                text-sm
                font-semibold
                mb-4
              "
            >

              Nearby Properties

            </p>

            <h1
              className="
                text-5xl
                md:text-6xl
                font-black
                text-[#0f172a]
                leading-tight
              "
            >

              Properties Near You

            </h1>

            <p
              className="
                text-gray-500
                text-lg
                mt-6
                max-w-3xl
                leading-8
              "
            >

              Discover apartments,
              villas and luxury homes
              around your current
              location.

            </p>

          </div>

          {/* LOADING */}

          {
            loading ? (

              <Loader />

            ) : properties.length === 0 ? (

              <EmptyState

                title="
                  No Nearby Properties
                "

                description="
                  No properties found near your location.
                "

              />

            ) : (

              <PropertyGrid
                properties={properties}
              />

            )
          }

        </div>

      </div>

    </MainLayout>
  );
}

export default NearbyProperties;