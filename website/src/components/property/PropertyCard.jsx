import {
  BedDouble,
  Bath,
  MapPin
} from "lucide-react";

function PropertyCard({
  property
}) {

  return (

    <div
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-sm
        hover:shadow-2xl
        transition-all
        duration-300
        group
      "
    >

      {/* IMAGE */}

      <div
        className="
          relative
          overflow-hidden
        "
      >

        <img

          src={
            property.thumbnail ||

            "https://placehold.co/600x400?text=No+Image"
          }

          alt={property.title}

          className="
            w-full
            h-[260px]
            object-cover
            group-hover:scale-105
            transition-all
            duration-500
          "
        />

        {/* BADGE */}

        <div
          className="
            absolute
            top-4
            left-4
            bg-black
            text-white
            text-sm
            px-4
            py-2
            rounded-full
          "
        >

          Featured

        </div>

      </div>

      {/* CONTENT */}

      <div className="p-6">

        {/* LOCATION */}

        <div
          className="
            flex
            items-center
            gap-2
            text-gray-500
            text-sm
            mb-3
          "
        >

          <MapPin size={16} />

          <span>

            {property.city}

            {
              property.state &&
              `, ${property.state}`
            }

          </span>

        </div>

        {/* TITLE */}

        <h2
          className="
            text-2xl
            font-bold
            leading-tight
            mb-4
          "
        >

          {property.title}

        </h2>

        {/* PRICE */}

        <h3
          className="
            text-3xl
            font-bold
            mb-6
          "
        >

          ₹ {
            property.price?.toLocaleString()
          }

        </h3>

        {/* FEATURES */}

        <div
          className="
            flex
            items-center
            justify-between
            pt-5
            border-t
          "
        >

          <div
            className="
              flex
              items-center
              gap-2
              text-gray-600
            "
          >

            <BedDouble size={18} />

            <span>

              {property.bedrooms}
              {" "}
              Beds

            </span>

          </div>

          <div
            className="
              flex
              items-center
              gap-2
              text-gray-600
            "
          >

            <Bath size={18} />

            <span>

              {property.bathrooms}
              {" "}
              Baths

            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PropertyCard;