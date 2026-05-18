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

import MainLayout
  from "../components/layout/MainLayout";
import {
  toast
} from "react-toastify";

import API
  from "../services/api";
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

  const [property,
    setProperty] =
    useState(null);

  const [loading,
    setLoading] =
    useState(true);

  const [activeImage,
    setActiveImage] =
    useState(0);
const [sending,
  setSending] =
  useState(false);

const [enquiryForm,
  setEnquiryForm] =
  useState({

    name: "",

    phone: "",

    message: ""
  });
  /*
  =====================================
  FETCH PROPERTY
  =====================================
  */

  useEffect(() => {

    fetchProperty();

  }, [id]);
const handleEnquiry =
  async (e) => {

    e.preventDefault();

    try {

      setSending(true);

      const response =
        await API.post(

          `/properties/${property._id}/enquiry`,

          enquiryForm
        );

      /*
      =====================================
      SUCCESS
      =====================================
      */

      toast.success(

        response.data.message
      );

      /*
      =====================================
      RESET
      =====================================
      */

      setEnquiryForm({

        name: "",

        phone: "",

        message: ""
      });

    } catch (error) {

      toast.error(

        error.response?.data
          ?.message ||

        "Failed to send enquiry"
      );

    } finally {

      setSending(false);
    }
  };
  const fetchProperty =
    async () => {

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
            bg-[#f8fafc]
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
          bg-gradient-to-b
          from-[#f8fafc]
          to-[#eef2f7]
          pt-[30px]
          pb-24
          overflow-hidden
        "
      >

        {/* BG EFFECTS */}

        <div
          className="
            fixed
            top-0
            right-0
            w-[500px]
            h-[500px]
            bg-primary/10
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
                font-medium
              "
            >

              <ChevronLeft size={22} />

              Back To Properties

            </Link>

            {/* ACTIONS */}

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
                  bg-white/80
                  backdrop-blur-xl
                  border
                  border-white
                  flex
                  items-center
                  justify-center
                  hover:bg-primary
                  hover:text-white
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-lg
                "
              >

                <Heart size={22} />

              </button>

              <button
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/80
                  backdrop-blur-xl
                  border
                  border-white
                  flex
                  items-center
                  justify-center
                  hover:bg-primary
                  hover:text-white
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-lg
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
              xl:grid-cols-[1.2fr_0.8fr]
              gap-14
            "
          >

            {/* LEFT */}

            <div>

              {/* MAIN IMAGE */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[40px]
                  h-[420px]
                  md:h-[550px]
                  xl:h-[680px]
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
                    from-black/50
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
                  gap-4
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
                          h-[90px]
                          md:h-[110px]
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

            {/* RIGHT */}

            <div
              className="
                xl:sticky
                xl:top-[100px]
                self-start
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
                  text-4xl
                  md:text-5xl
                  xl:text-6xl
                  font-black
                  leading-[1.1]
                  text-gray-900
                "
              >

                {property.title}

              </h1>

              {/* PRICE */}

              <div className="mt-7">

                <h2
                  className="
                    text-5xl
                    md:text-6xl
                    font-black
                    text-primary
                  "
                >

                  ₹
                  {property.price?.toLocaleString()}

                </h2>

              </div>

              {/* META */}

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-3
                  mt-7
                "
              >

                <div
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-green-100
                    text-green-700
                    text-sm
                    font-semibold
                  "
                >

                  Verified Property

                </div>

                <div
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-blue-100
                    text-blue-700
                    text-sm
                    font-semibold
                  "
                >

                  Ready To Move

                </div>

                <div
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-orange-100
                    text-orange-700
                    text-sm
                    font-semibold
                  "
                >

                  {property.listingType}

                </div>

              </div>

              {/* FEATURES */}

              <div
                className="
                  grid
                  grid-cols-3
                  gap-4
                  mt-10
                "
              >

                <div
                  className="
                    bg-white
                    rounded-[30px]
                    border
                    p-5
                    md:p-6
                    text-center
                    shadow-sm
                  "
                >

                  <BedDouble
                    size={28}
                    className="
                      mx-auto
                      mb-4
                      text-primary
                    "
                  />

                  <h3
                    className="
                      text-2xl
                      md:text-3xl
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
                    p-5
                    md:p-6
                    text-center
                    shadow-sm
                  "
                >

                  <Bath
                    size={28}
                    className="
                      mx-auto
                      mb-4
                      text-primary
                    "
                  />

                  <h3
                    className="
                      text-2xl
                      md:text-3xl
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
                    p-5
                    md:p-6
                    text-center
                    shadow-sm
                  "
                >

                  <Maximize
                    size={28}
                    className="
                      mx-auto
                      mb-4
                      text-primary
                    "
                  />

                  <h3
                    className="
                      text-2xl
                      md:text-3xl
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

              {/* QUICK OVERVIEW */}

              <div
                className="
                  mt-10
                  grid
                  grid-cols-2
                  md:grid-cols-4
                  gap-4
                "
              >

                <div
                  className="
                    bg-white
                    rounded-3xl
                    p-5
                    border
                    shadow-sm
                  "
                >

                  <p
                    className="
                      text-gray-500
                      text-sm
                    "
                  >

                    Property ID

                  </p>

                  <h4
                    className="
                      text-lg
                      font-bold
                      mt-2
                    "
                  >

                    #
                    {property._id.slice(-6)}

                  </h4>

                </div>

                <div
                  className="
                    bg-white
                    rounded-3xl
                    p-5
                    border
                    shadow-sm
                  "
                >

                  <p
                    className="
                      text-gray-500
                      text-sm
                    "
                  >

                    Floor

                  </p>

                  <h4
                    className="
                      text-lg
                      font-bold
                      mt-2
                    "
                  >

                    {property.floor || "N/A"}

                  </h4>

                </div>

                <div
                  className="
                    bg-white
                    rounded-3xl
                    p-5
                    border
                    shadow-sm
                  "
                >

                  <p
                    className="
                      text-gray-500
                      text-sm
                    "
                  >

                    Total Floors

                  </p>

                  <h4
                    className="
                      text-lg
                      font-bold
                      mt-2
                    "
                  >

                    {
                      property.totalFloors ||
                      "N/A"
                    }

                  </h4>

                </div>

                <div
                  className="
                    bg-white
                    rounded-3xl
                    p-5
                    border
                    shadow-sm
                  "
                >

                  <p
                    className="
                      text-gray-500
                      text-sm
                    "
                  >

                    Posted

                  </p>

                  <h4
                    className="
                      text-lg
                      font-bold
                      mt-2
                    "
                  >

                    Recently

                  </h4>

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
                    grid-cols-1
                    sm:grid-cols-2
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

                      {
                        property.furnishing ||
                        "N/A"
                      }

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

                      {
                        property.facing ||
                        "N/A"
                      }

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
                                px-5
                                py-3
                                rounded-2xl
                                bg-gradient-to-br
                                from-gray-50
                                to-gray-100
                                border
                                border-gray-200
                                hover:border-primary
                                hover:bg-primary
                                hover:text-white
                                hover:scale-105
                                transition-all
                                font-medium
                                shadow-sm
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

             {/* CONTACT */}

{/* CONTACT */}

<div
  className="
    mt-10
    relative
    overflow-hidden
    rounded-[40px]
    bg-gradient-to-br
    from-[#0f172a]
    via-[#111827]
    to-primary
    p-6
    md:p-10
    shadow-[0_30px_80px_rgba(0,0,0,0.25)]
  "
>

  {/* GLOW */}

  <div
    className="
      absolute
      top-0
      right-0
      w-[260px]
      h-[260px]
      bg-white/10
      rounded-full
      blur-[120px]
    "
  />

  {/* CONTENT */}

  <div
    className="
      relative
      z-10
    "
  >

    {/* TAG */}

    <div
      className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        bg-white/10
        backdrop-blur-xl
        text-white
        text-sm
        font-semibold
        mb-6
      "
    >

      <div
        className="
          w-2
          h-2
          rounded-full
          bg-green-400
          animate-pulse
        "
      />

      Available For Contact

    </div>

    {/* TITLE */}

    <h3
      className="
        text-4xl
        md:text-5xl
        font-black
        text-white
        leading-tight
      "
    >

      Contact Agent

    </h3>

    {/* TEXT */}

    <p
      className="
        text-white/80
        leading-8
        text-lg
        mt-5
        max-w-xl
      "
    >

      Interested in this
      property? Send your
      enquiry and the owner
      will contact you soon.

    </p>

    {/* CALL BUTTON */}

    <a

      href={`tel:${property.contactNumber}`}

      className="
        mt-8
        h-[68px]
        rounded-2xl
        bg-white
        text-[#0f172a]
        flex
        items-center
        justify-center
        gap-4
        font-bold
        text-lg
        hover:scale-[1.02]
        hover:bg-gray-100
        transition-all
        shadow-[0_15px_40px_rgba(0,0,0,0.20)]
      "
    >

      <div
        className="
          w-11
          h-11
          rounded-full
          bg-primary/10
          flex
          items-center
          justify-center
          text-primary
        "
      >

        <Phone size={20} />

      </div>

      <span>

        {property.contactNumber}

      </span>

    </a>

    {/* FORM */}

    <form
      onSubmit={handleEnquiry}
      className="
        mt-8
        space-y-4
      "
    >

      {/* NAME */}

      <input

        type="text"

        placeholder="Your Name"

        value={enquiryForm.name}

        onChange={(e) =>
          setEnquiryForm({

            ...enquiryForm,

            name:
              e.target.value
          })
        }

        required

        className="
          w-full
          h-[60px]
          rounded-2xl
          bg-white/90
          backdrop-blur-xl
          px-5
          outline-none
          text-[#0f172a]
          placeholder:text-gray-500
          border
          border-white/20
        "
      />

      {/* PHONE */}

      <input

        type="text"

        placeholder="Mobile Number"

        value={enquiryForm.phone}

        onChange={(e) =>
          setEnquiryForm({

            ...enquiryForm,

            phone:
              e.target.value
          })
        }

        required

        className="
          w-full
          h-[60px]
          rounded-2xl
          bg-white/90
          backdrop-blur-xl
          px-5
          outline-none
          text-[#0f172a]
          placeholder:text-gray-500
          border
          border-white/20
        "
      />

      {/* MESSAGE */}

      <textarea

        rows={5}

        placeholder="
          I'm interested in this property...
        "

        value={enquiryForm.message}

        onChange={(e) =>
          setEnquiryForm({

            ...enquiryForm,

            message:
              e.target.value
          })
        }

        className="
          w-full
          rounded-2xl
          bg-white/90
          backdrop-blur-xl
          p-5
          outline-none
          text-[#0f172a]
          placeholder:text-gray-500
          border
          border-white/20
          resize-none
        "
      />

      {/* SUBMIT */}

      <button

        type="submit"

        disabled={sending}

        className="
          w-full
          h-[65px]
          rounded-2xl
          bg-white
          text-[#0f172a]
          font-bold
          text-lg
          hover:scale-[1.02]
          hover:bg-gray-100
          transition-all
          shadow-[0_15px_40px_rgba(0,0,0,0.20)]
          disabled:opacity-70
        "
      >

        {
          sending

            ? "Sending Enquiry..."

            : "Send Enquiry"
        }

      </button>

    </form>

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