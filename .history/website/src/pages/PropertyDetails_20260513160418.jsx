import {
  useEffect,
  useState
} from "react";

import {
  useParams,
  Link
} from "react-router-dom";

import {
  BedDouble,
  Bath,
  Maximize,
  MapPin,
  ChevronLeft,
  Phone,
  Heart,
  Loader2
} from "lucide-react";

function PropertyDetails() {

  /*
  =====================================
  PARAMS
  =====================================
  */

  const { id } =
    useParams();

  /*
  =====================================
  STATES
  =====================================
  */

  const [property, setProperty] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [activeImage, setActiveImage] =
    useState(0);

  /*
  =====================================
  FETCH PROPERTY
  =====================================
  */

  useEffect(() => {

    fetchProperty();

  }, [id]);

  const fetchProperty = async () => {

    try {

      setLoading(true);

      const response =
        await fetch(
          `http://localhost:5000/api/properties/${id}`
        );

      const data =
        await response.json();

      if (data.success) {

        setProperty(
          data.property
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
  LOADING
  =====================================
  */

  if (loading) {

    return (

      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
        "
      >

        <Loader2
          size={50}
          className="
            animate-spin
          "
        />

      </div>
    );
  }

  /*
  =====================================
  NOT FOUND
  =====================================
  */

  if (!property) {

    return (

      <div
        className="
          min-h-screen
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-5
        "
      >

        <h2
          className="
            text-4xl
            font-bold
          "
        >

          Property Not Found

        </h2>

        <Link
          to="/properties"
          className="
            mt-6
            bg-black
            text-white
            px-6
            py-3
            rounded-2xl
          "
        >

          Back To Properties

        </Link>

      </div>
    );
  }

  return (

    <div
      className="
        min-h-screen
        bg-[#f6f6f3]
        pt-[110px]
        pb-20
      "
    >

      {/* CONTAINER */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          lg:px-8
        "
      >

        {/* BACK BUTTON */}

        <Link
          to="/properties"
          className="
            inline-flex
            items-center
            gap-2
            mb-8
            text-gray-600
            hover:text-black
          "
        >

          <ChevronLeft size={20} />

          Back To Properties

        </Link>

        {/* GRID */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
          "
        >

          {/* LEFT */}

          <div>

            {/* MAIN IMAGE */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[35px]
                h-[500px]
              "
            >

              <img
                src={
                  property.images?.[
                    activeImage
                  ]?.url
                    ? `${property.images[
                        activeImage
                      ].url}?tr=w-1400,q-80,f-webp`
                    : "https://placehold.co/1200x800"
                }

                alt={property.title}

                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              {/* TYPE */}

              <div
                className="
                  absolute
                  top-5
                  left-5
                  bg-white/90
                  backdrop-blur-md
                  px-5
                  py-2
                  rounded-full
                  font-medium
                "
              >

                {property.propertyType}

              </div>

              {/* HEART */}

              <button
                className="
                  absolute
                  top-5
                  right-5
                  w-12
                  h-12
                  rounded-full
                  bg-white/90
                  flex
                  items-center
                  justify-center
                "
              >

                <Heart size={22} />

              </button>

            </div>

            {/* THUMBNAILS */}

            <div
              className="
                grid
                grid-cols-4
                gap-4
                mt-5
              "
            >

              {
                property.images?.map(
                  (
                    image,
                    index
                  ) => (

                    <button

                      key={index}

                      onClick={() =>
                        setActiveImage(
                          index
                        )
                      }

                      className={`
                        overflow-hidden
                        rounded-2xl
                        h-[100px]
                        border-4

                        ${

                          activeImage === index

                            ? `
                              border-black
                            `

                            : `
                              border-transparent
                            `
                        }
                      `}
                    >

                      <img
                        src={`${image.url}?tr=w-300,q-60,f-webp`}
                        alt=""
                        className="
                          w-full
                          h-full
                          object-cover
                        "
                      />

                    </button>

                  )
                )
              }

            </div>

          </div>

          {/* RIGHT */}

          <div>

            {/* LOCATION */}

            <div
              className="
                flex
                items-center
                gap-2
                text-gray-500
                mb-4
              "
            >

              <MapPin size={20} />

              <span>

                {property.locality},
                {" "}
                {property.city?.name ||
                  property.city}

              </span>

            </div>

            {/* TITLE */}

            <h1
              className="
                text-4xl
                md:text-5xl
                font-bold
                leading-tight
              "
            >

              {property.title}

            </h1>

            {/* PRICE */}

            <div
              className="
                mt-6
              "
            >

              <h2
                className="
                  text-5xl
                  font-bold
                "
              >

                ₹
                {property.price?.toLocaleString()}

              </h2>

            </div>

            {/* FEATURES */}

            <div
              className="
                grid
                grid-cols-3
                gap-5
                mt-10
              "
            >

              <div
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  border
                  text-center
                "
              >

                <BedDouble
                  size={28}
                  className="
                    mx-auto
                    mb-3
                  "
                />

                <h3
                  className="
                    text-2xl
                    font-bold
                  "
                >

                  {property.bedrooms}

                </h3>

                <p
                  className="
                    text-gray-500
                  "
                >

                  Bedrooms

                </p>

              </div>

              <div
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  border
                  text-center
                "
              >

                <Bath
                  size={28}
                  className="
                    mx-auto
                    mb-3
                  "
                />

                <h3
                  className="
                    text-2xl
                    font-bold
                  "
                >

                  {property.bathrooms}

                </h3>

                <p
                  className="
                    text-gray-500
                  "
                >

                  Bathrooms

                </p>

              </div>

              <div
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  border
                  text-center
                "
              >

                <Maximize
                  size={28}
                  className="
                    mx-auto
                    mb-3
                  "
                />

                <h3
                  className="
                    text-2xl
                    font-bold
                  "
                >

                  {property.builtUpArea}

                </h3>

                <p
                  className="
                    text-gray-500
                  "
                >

                  Sqft

                </p>

              </div>

            </div>

            {/* DESCRIPTION */}

            <div
              className="
                mt-12
                bg-white
                rounded-[35px]
                p-8
                border
              "
            >

              <h3
                className="
                  text-3xl
                  font-bold
                  mb-5
                "
              >

                Description

              </h3>

              <p
                className="
                  text-gray-600
                  leading-[2]
                "
              >

                {property.description}

              </p>

            </div>

            {/* AMENITIES */}

            {
              property.amenities
                ?.length > 0 && (

                <div
                  className="
                    mt-8
                    bg-white
                    rounded-[35px]
                    p-8
                    border
                  "
                >

                  <h3
                    className="
                      text-3xl
                      font-bold
                      mb-6
                    "
                  >

                    Amenities

                  </h3>

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-4
                    "
                  >

                    {
                      property.amenities.map(
                        (
                          amenity,
                          index
                        ) => (

                          <div

                            key={index}

                            className="
                              px-5
                              py-3
                              rounded-2xl
                              bg-gray-100
                            "
                          >

                            {amenity}

                          </div>

                        )
                      )
                    }

                  </div>

                </div>

              )
            }

            {/* CONTACT */}

            <div
              className="
                mt-8
                bg-black
                text-white
                rounded-[35px]
                p-8
              "
            >

              <h3
                className="
                  text-3xl
                  font-bold
                  mb-4
                "
              >

                Contact Agent

              </h3>

              <p
                className="
                  text-white/70
                  mb-6
                "
              >

                Get in touch with the
                property owner or agent.

              </p>

              <a
                href={`tel:${property.contactNumber}`}
                className="
                  h-[60px]
                  rounded-2xl
                  bg-white
                  text-black
                  flex
                  items-center
                  justify-center
                  gap-3
                  font-semibold
                "
              >

                <Phone size={22} />

                {property.contactNumber}

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PropertyDetails;