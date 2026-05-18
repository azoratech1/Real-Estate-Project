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
  Loader2,
  Building2,
  CalendarDays,
  Sofa,
  Compass,
  Car,
  Share2
} from "lucide-react";

import MainLayout from "../components/layout/MainLayout";

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

      <MainLayout>

        <div
          className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-[#f8f8f6]
          "
        >

          <Loader2
            size={55}
            className="
              animate-spin
              text-primary
            "
          />

        </div>

      </MainLayout>
    );
  }

  /*
  =====================================
  NOT FOUND
  =====================================
  */

  if (!property) {

    return (

      <MainLayout>

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
              text-5xl
              font-black
            "
          >

            Property Not Found

          </h2>

          <Link

            to="/properties"

            className="
              mt-8
              bg-primary
              text-white
              px-8
              py-4
              rounded-2xl
            "
          >

            Back To Properties

          </Link>

        </div>

      </MainLayout>
    );
  }

  return (

    <MainLayout>

      <div
        className="
          min-h-screen
          bg-[#f8f8f6]
          pt-[110px]
          pb-24
          overflow-hidden
        "
      >

        {/* BACKGROUND EFFECTS */}

        <div
          className="
            fixed
            top-0
            right-0
            w-[500px]
            h-[500px]
            bg-gray-200/40
            rounded-full
            blur-[140px]
            pointer-events-none
          "
        />

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            lg:px-8
            relative
            z-10
          "
        >

          {/* TOP BAR */}

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-5
              mb-10
            "
          >

            <Link

              to="/properties"

              className="
                inline-flex
                items-center
                gap-3
                text-gray-600
                hover:text-primary
                transition-all
              "
            >

              <ChevronLeft size={22} />

              Back To Properties

            </Link>

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              <button
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white
                  border
                  flex
                  items-center
                  justify-center
                  hover:bg-primary
                  hover:text-white
                  transition-all
                "
              >

                <Heart size={22} />

              </button>

              <button
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white
                  border
                  flex
                  items-center
                  justify-center
                  hover:bg-primary
                  hover:text-white
                  transition-all
                "
              >

                <Share2 size={22} />

              </button>

            </div>

          </div>

          {/* MAIN GRID */}

          <div
            className="
              grid
              grid-cols-1
              xl:grid-cols-2
              gap-14
            "
          >

            {/* LEFT SIDE */}

            <div>

              {/* MAIN IMAGE */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[40px]
                  h-[600px]
                  shadow-2xl
                "
              >

                <img

                  src={
                    property.images?.[
                      activeImage
                    ]?.url
                      ? `${property.images[
                          activeImage
                        ].url}?tr=w-1600,q-90,f-webp`

                      : "https://placehold.co/1400x900"
                  }

                  alt={property.title}

                  className="
                    w-full
                    h-full
                    object-cover
                    hover:scale-105
                    transition-all
                    duration-700
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/40
                    to-transparent
                  "
                />

                {/* BADGES */}

                <div
                  className="
                    absolute
                    top-6
                    left-6
                    flex
                    flex-wrap
                    gap-3
                  "
                >

                  <div
                    className="
                      px-5
                      py-2
                      rounded-full
                      bg-white/90
                      backdrop-blur-xl
                      font-semibold
                    "
                  >

                    {property.propertyType}

                  </div>

                  <div
                    className="
                      px-5
                      py-2
                      rounded-full
                      bg-primary
                      text-white
                      font-semibold
                    "
                  >

                    For {property.listingType}

                  </div>

                </div>

              </div>

              {/* THUMBNAILS */}

              <div
                className="
                  grid
                  grid-cols-4
                  gap-5
                  mt-6
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
                          
                          relative
                          overflow-hidden
                          rounded-[25px]
                          h-[110px]
                          border-[4px]
                          transition-all
                          
                          ${
                            activeImage ===
                            index

                              ? `
                                border-primary
                                scale-105
                              `

                              : `
                                border-transparent
                              `
                          }
                        `}
                      >

                        <img

                          src={`${image.url}?tr=w-400,q-70,f-webp`}

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

            {/* RIGHT SIDE */}

            <div
              className="
                xl:sticky
                xl:top-[110px]
                h-fit
              "
            >

              {/* LOCATION */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-gray-500
                  mb-5
                "
              >

                <MapPin size={20} />

                <span
                  className="
                    text-lg
                  "
                >

                  {property.locality},
                  {" "}
                  {property.city?.name ||
                    property.city}

                </span>

              </div>

              {/* TITLE */}

              <h1
                className="
                  text-5xl
                  md:text-6xl
                  font-black
                  leading-[1.1]
                  text-gray-900
                "
              >

                {property.title}

              </h1>

              {/* PRICE */}

              <div className="mt-8">

                <h2
                  className="
                    text-6xl
                    font-black
                    text-primary
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
                  mt-12
                "
              >

                <div
                  className="
                    bg-white
                    rounded-[30px]
                    border
                    p-7
                    text-center
                    shadow-sm
                  "
                >

                  <BedDouble
                    size={30}
                    className="
                      mx-auto
                      mb-4
                      text-primary
                    "
                  />

                  <h3
                    className="
                      text-3xl
                      font-black
                    "
                  >

                    {property.bedrooms}

                  </h3>

                  <p
                    className="
                      text-gray-500
                      mt-2
                    "
                  >

                    Bedrooms

                  </p>

                </div>

                <div
                  className="
                    bg-white
                    rounded-[30px]
                    border
                    p-7
                    text-center
                    shadow-sm
                  "
                >

                  <Bath
                    size={30}
                    className="
                      mx-auto
                      mb-4
                      text-primary
                    "
                  />

                  <h3
                    className="
                      text-3xl
                      font-black
                    "
                  >

                    {property.bathrooms}

                  </h3>

                  <p
                    className="
                      text-gray-500
                      mt-2
                    "
                  >

                    Bathrooms

                  </p>

                </div>

                <div
                  className="
                    bg-white
                    rounded-[30px]
                    border
                    p-7
                    text-center
                    shadow-sm
                  "
                >

                  <Maximize
                    size={30}
                    className="
                      mx-auto
                      mb-4
                      text-primary
                    "
                  />

                  <h3
                    className="
                      text-3xl
                      font-black
                    "
                  >

                    {property.builtUpArea}

                  </h3>

                  <p
                    className="
                      text-gray-500
                      mt-2
                    "
                  >

                    Sqft

                  </p>

                </div>

              </div>

              {/* PROPERTY DETAILS */}

              <div
                className="
                  mt-10
                  bg-white
                  rounded-[35px]
                  border
                  p-8
                  shadow-sm
                "
              >

                <h3
                  className="
                    text-3xl
                    font-black
                    mb-8
                  "
                >

                  Property Details

                </h3>

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-8
                  "
                >

                  <div>

                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        text-gray-500
                      "
                    >

                      <Building2 size={18} />

                      Property Type

                    </div>

                    <h4
                      className="
                        text-xl
                        font-bold
                        mt-3
                      "
                    >

                      {property.propertyType}

                    </h4>

                  </div>

                  <div>

                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        text-gray-500
                      "
                    >

                      <Sofa size={18} />

                      Furnishing

                    </div>

                    <h4
                      className="
                        text-xl
                        font-bold
                        mt-3
                      "
                    >

                      {property.furnishing ||
                        "N/A"}

                    </h4>

                  </div>

                  <div>

                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        text-gray-500
                      "
                    >

                      <Compass size={18} />

                      Facing

                    </div>

                    <h4
                      className="
                        text-xl
                        font-bold
                        mt-3
                      "
                    >

                      {property.facing ||
                        "N/A"}

                    </h4>

                  </div>

                  <div>

                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        text-gray-500
                      "
                    >

                      <CalendarDays
                        size={18}
                      />

                      Property Age

                    </div>

                    <h4
                      className="
                        text-xl
                        font-bold
                        mt-3
                      "
                    >

                      {
                        property.ageOfProperty
                      }
                      {" "}
                      Years

                    </h4>

                  </div>

                  <div>

                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        text-gray-500
                      "
                    >

                      <Car size={18} />

                      Balconies

                    </div>

                    <h4
                      className="
                        text-xl
                        font-bold
                        mt-3
                      "
                    >

                      {property.balconies}

                    </h4>

                  </div>

                </div>

              </div>

              {/* DESCRIPTION */}

              <div
                className="
                  mt-10
                  bg-white
                  rounded-[35px]
                  border
                  p-8
                  shadow-sm
                "
              >

                <h3
                  className="
                    text-3xl
                    font-black
                    mb-6
                  "
                >

                  Description

                </h3>

                <p
                  className="
                    text-gray-600
                    leading-[2]
                    text-lg
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
                      mt-10
                      bg-white
                      rounded-[35px]
                      border
                      p-8
                      shadow-sm
                    "
                  >

                    <h3
                      className="
                        text-3xl
                        font-black
                        mb-8
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
                                px-6
                                py-4
                                rounded-2xl
                                bg-gray-100
                                hover:bg-primary
                                hover:text-white
                                transition-all
                                font-medium
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

              {/* CONTACT CARD */}

              <div
                className="
                  mt-10
                  relative
                  overflow-hidden
                  rounded-[40px]
                  bg-primary
                  text-white
                  p-10
                "
              >

                <div
                  className="
                    absolute
                    top-0
                    right-0
                    w-[250px]
                    h-[250px]
                    bg-white/10
                    rounded-full
                    blur-[100px]
                  "
                />

                <div
                  className="
                    relative
                    z-10
                  "
                >

                  <h3
                    className="
                      text-4xl
                      font-black
                      mb-5
                    "
                  >

                    Contact Agent

                  </h3>

                  <p
                    className="
                      text-white/70
                      leading-8
                      text-lg
                      mb-8
                    "
                  >

                    Interested in this
                    property? Contact the
                    owner or agent for
                    more details and site
                    visits.

                  </p>

                  <a

                    href={`tel:${property.contactNumber}`}

                    className="
                      h-[65px]
                      rounded-2xl
                      bg-white
                      text-primary
                      flex
                      items-center
                      justify-center
                      gap-4
                      font-bold
                      text-lg
                      hover:scale-[1.02]
                      transition-all
                    "
                  >

                    <Phone size={24} />

                    {property.contactNumber}

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default PropertyDetails;