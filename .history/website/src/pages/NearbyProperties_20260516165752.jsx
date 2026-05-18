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

          {/* HEADER */}

<div
  className="
    mb-12
    md:mb-16
    flex
    flex-col
    lg:flex-row
    lg:items-end
    lg:justify-between
    gap-8
  "
>

  {/* LEFT */}

  <div>

    {/* BADGE */}

    <div
      className="
        inline-flex
        items-center
        gap-2
        bg-primary/10
        text-primary
        px-4
        py-2
        rounded-full
        text-sm
        font-semibold
        mb-5
        border
        border-primary/10
        backdrop-blur-xl
      "
    >

      <div
        className="
          w-2
          h-2
          rounded-full
          bg-green-500
          animate-pulse
        "
      />

      Nearby Properties

    </div>

    {/* TITLE */}

    <h1
      className="
        text-4xl
        md:text-5xl
        lg:text-6xl
        font-black
        text-[#0f172a]
        leading-tight
        max-w-3xl
      "
    >

      Explore Homes
      Around Your
      Location

    </h1>

    {/* DESCRIPTION */}

    <p
      className="
        text-gray-500
        text-base
        md:text-lg
        mt-5
        max-w-2xl
        leading-8
      "
    >

      Discover apartments,
      villas and premium
      properties near your
      current location with
      real-time nearby search.

    </p>

  </div>

  {/* RIGHT CARD */}

  <div
    className="
      bg-white/80
      backdrop-blur-2xl
      border
      border-white/50
      shadow-[0_10px_40px_rgba(0,0,0,0.06)]
      rounded-3xl
      p-5
      min-w-[260px]
      w-full
      sm:w-auto
    "
  >

    <div
      className="
        flex
        items-center
        justify-between
        gap-5
      "
    >

      {/* INFO */}

      <div>

        <p
          className="
            text-sm
            text-gray-500
            mb-2
          "
        >

          Nearby Results

        </p>

        <h3
          className="
            text-3xl
            font-black
            text-[#0f172a]
          "
        >

          {properties.length}

        </h3>

      </div>

      {/* ICON */}

      <div
        className="
          w-14
          h-14
          rounded-2xl
          bg-primary/10
          flex
          items-center
          justify-center
          shrink-0
        "
      >

        📍

      </div>

    </div>

  </div>

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