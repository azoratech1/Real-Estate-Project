import PropertyCard from "./PropertyCard";

import Loader from "../common/Loader";

import EmptyState from "../common/EmptyState";

function PropertyGrid({

  properties = [],

  loading = false

}) {

  /*
  =====================================
  LOADING
  =====================================
  */

  if (loading) {

    return <Loader />;
  }

  /*
  =====================================
  EMPTY
  =====================================
  */

  if (
    properties.length === 0
  ) {

    return (

      <EmptyState

        title="
          No Properties Found
        "

        description="
          Try changing filters or search criteria.
        "

      />

    );
  }

  return (

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
  );
}

export default PropertyGrid;