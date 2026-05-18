import {
  BedDouble,
  Bath,
  MapPin,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";

import {
  Link
} from "react-router-dom";

function PropertyCard({
  property
}) {

  return (

    <Link
      to={`/properties/${property._id}`}
      className="block"
    >

      <div
        className="
          group
          relative
          bg-white
          rounded-[32px]
          overflow-hidden
          border
          border-gray-100
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]
          hover:-translate-y-2
          transition-all
          duration-500
          cursor-pointer
        "
      >

        {/* IMAGE */}

        <div
          className="
            relative
            overflow-hidden
          "
        >

          {/* IMAGE */}

          <img

            src={
              property.thumbnail ||

              "https://placehold.co/600x400?text=No+Image"
            }

            alt={property.title}

            className="
              w-full
              h-[280px]
              object-cover
              group-hover:scale-110
              transition-all
              duration-700
            "
          />

          {/* DARK OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              via-black/10
              to-transparent
            "
          />

          {/* FEATURED BADGE */}

          <div
            className="
              absolute
              top-5
              left-5
              bg-white/90
              backdrop-blur-xl
              text-black
              text-sm
              px-4
              py-2
              rounded-full
              font-semibold
              shadow-lg
              flex
              items-center
              gap-2
            "
          >

            <ShieldCheck size={16} />

            Featured

          </div>

          {/* VIEW BUTTON */}

          <div
            className="
              absolute
              bottom-5
              right-5
              opacity-0
              group-hover:opacity-100
              translate-y-5
              group-hover:translate-y-0
              transition-all
              duration-500
            "
          >

            <div
              className="
                bg-white
                text-black
                px-5
                py-3
                rounded-full
                font-semibold
                flex
                items-center
                gap-2
                shadow-2xl
              "
            >

              View Details

              <ArrowUpRight
                size={18}
              />

            </div>

          </div>

        </div>

        {/* CONTENT */}

        <div
          className="
            p-7
          "
        >

          {/* TOP ROW */}

          <div
            className="
              flex
              items-start
              justify-between
              gap-4
              mb-4
            "
          >

            {/* LOCATION */}

            <div
              className="
                flex
                items-center
                gap-2
                text-gray-500
                text-sm
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

            {/* OWNER / DEALER */}
{/* 
            <div
              className={`
                px-3
                py-1
                rounded-full
                text-xs
                font-semibold
                whitespace-nowrap

                ${
                  property.postedBy
                    ?.accountType ===
                  "dealer"

                    ? `
                      bg-blue-100
                      text-blue-700
                    `

                    : `
                      bg-purple-100
                      text-purple-700
                    `
                }
              `}
            >

              {
    property.postedBy
      ?.accountType ===
    "dealer"

      ? "Verified Dealer"

      : "Property Owner"
  }
            </div> */}

          </div>

          {/* TITLE */}

          <h2
            className="
              text-[28px]
              font-black
              leading-tight
              text-[#0f172a]
              line-clamp-2
              min-h-[72px]
            "
          >

            {property.title}

          </h2>

          {/* PRICE */}

          <div
            className="
              mt-6
              flex
              items-end
              gap-2
            "
          >

            <h3
              className="
                text-4xl
                font-black
                text-[#0f172a]
              "
            >

              ₹ {
                property.price?.toLocaleString()
              }

            </h3>

            <span
              className="
                text-gray-500
                mb-1
              "
            >

              onwards

            </span>

          </div>

          {/* FEATURES */}

          <div
            className="
              mt-7
              pt-6
              border-t
              border-gray-100
              flex
              items-center
              justify-between
            "
          >

            {/* BEDS */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <div
                className="
                  w-11
                  h-11
                  rounded-2xl
                  bg-gray-100
                  flex
                  items-center
                  justify-center
                "
              >

                <BedDouble
                  size={18}
                />

              </div>

              <div>

                <p
                  className="
                    text-sm
                    text-gray-400
                  "
                >

                  Bedrooms

                </p>

                <h4
                  className="
                    font-bold
                    text-[#0f172a]
                  "
                >

                  {
                    property.bedrooms ||
                    0
                  }

                </h4>

              </div>

            </div>

            {/* BATHS */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <div
                className="
                  w-11
                  h-11
                  rounded-2xl
                  bg-gray-100
                  flex
                  items-center
                  justify-center
                "
              >

                <Bath
                  size={18}
                />

              </div>

              <div>

                <p
                  className="
                    text-sm
                    text-gray-400
                  "
                >

                  Bathrooms

                </p>

                <h4
                  className="
                    font-bold
                    text-[#0f172a]
                  "
                >

                  {
                    property.bathrooms ||
                    0
                  }

                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

    </Link>
  );
}

export default PropertyCard;