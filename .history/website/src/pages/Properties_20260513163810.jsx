import {
  useEffect,
  useState
} from "react";

import {
  Link
} from "react-router-dom";

import {
  BedDouble,
  Bath,
  MapPin,
  Maximize,
  Search,
  SlidersHorizontal,
  Heart,
  Loader2
} from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
import {
  useSearchParams
} from "react-router-dom";
function PropertiesPage() {

  /*
  =====================================
  STATES
  =====================================
  */

  const [properties, setProperties] =
    useState([]);

  const [loading, setLoading] =
    useState(true);


const [searchParams] =
  useSearchParams();
  const locationParam =
  searchParams.get("location") || "";
 const [search, setSearch] =
  useState(locationParam);
const propertyTypeParam =
  searchParams.get("propertyType") || "";

const budgetParam =
  searchParams.get("budget") || "";
  /*
  =====================================
  FETCH PROPERTIES
  =====================================
  */

  useEffect(() => {

    fetchProperties();

  }, []);

  const fetchProperties = async () => {

    try {

      setLoading(true);

      const response =
        await fetch(
          "http://localhost:5000/api/properties"
        );

      const data =
        await response.json();

      if (data.success) {

        setProperties(
          data.properties
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
  FILTER PROPERTIES
  =====================================
  */

const filteredProperties =
  properties.filter((property) => {

    const matchesSearch =

      property.title
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )

      ||

      property.city
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )

      ||

      property.locality
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        );

    const matchesType =

      propertyTypeParam

        ? property.propertyType ===
          propertyTypeParam

        : true;

    const matchesBudget =

      budgetParam

        ? property.price <=
          Number(budgetParam)

        : true;

    return (
      matchesSearch &&
      matchesType &&
      matchesBudget
    );
  });

  return (
   <MainLayout>
    <div
      className="
        min-h-screen
        bg-[#f6f6f3]
        pt-[110px]
        pb-16
      "
    >

      {/* HERO */}

      <section
        className="
          px-5
          lg:px-8
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            relative
            overflow-hidden
            rounded-[40px]
            h-[420px]
            bg-black
          "
        >

          {/* BACKGROUND */}

          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
            alt="hero"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />

          {/* OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-black/50
            "
          />

          {/* CONTENT */}

          <div
            className="
              relative
              z-10
              h-full
              flex
              flex-col
              justify-center
              px-8
              lg:px-16
            "
          >

            <p
              className="
                text-white/80
                uppercase
                tracking-[5px]
                text-sm
                mb-5
              "
            >

              Premium Collection

            </p>

            <h1
              className="
                text-white
                text-4xl
                md:text-6xl
                font-bold
                leading-tight
                max-w-3xl
              "
            >

              Discover Your
              Dream Property
              With Modern Luxury

            </h1>

            <p
              className="
                text-white/80
                mt-6
                max-w-2xl
                text-lg
              "
            >

              Browse premium homes,
              villas, apartments and
              luxury properties curated
              for modern living.

            </p>

          </div>

        </div>

      </section>

      {/* FILTER BAR */}

      <section
        className="
          px-5
          lg:px-8
          mt-10
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            bg-white
            rounded-[30px]
            p-5
            shadow-sm
            border
            flex
            flex-col
            lg:flex-row
            gap-4
            items-center
            justify-between
          "
        >

          {/* SEARCH */}

          <div
            className="
              flex
              items-center
              gap-3
              bg-gray-100
              rounded-2xl
              px-5
              h-[60px]
              flex-1
              w-full
            "
          >

            <Search
              className="
                text-gray-500
              "
              size={22}
            />

            <input
              type="text"
              placeholder="
                Search properties,
                cities, locality...
              "
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="
                bg-transparent
                outline-none
                w-full
                text-gray-700
              "
            />

          </div>

          {/* FILTER BUTTON */}

          <button
            className="
              h-[60px]
              px-7
              rounded-2xl
              bg-black
              text-white
              flex
              items-center
              gap-2
              hover:scale-105
              transition-all
            "
          >

            <SlidersHorizontal
              size={20}
            />

            Filters

          </button>

        </div>

      </section>

      {/* SECTION HEADER */}

      <section
        className="
          px-5
          lg:px-8
          mt-14
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            flex
            items-center
            justify-between
            flex-wrap
            gap-4
          "
        >

            <div>

              <p
                className="
                  text-gray-500
                  uppercase
                  tracking-[4px]
                  text-sm
                  mb-3
                "
              >

                Available Listings

              </p>

              <h2
                className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  text-black
                "
              >

                Explore Properties

              </h2>

            </div>

            <div
              className="
                bg-white
                px-5
                py-3
                rounded-2xl
                border
                shadow-sm
              "
            >

              <span
                className="
                  text-gray-600
                "
              >

                {filteredProperties.length}
                {" "}
                Properties Found

              </span>

            </div>

        </div>

      </section>

      {/* LOADING */}

      {
        loading && (

          <div
            className="
              flex
              items-center
              justify-center
              py-32
            "
          >

            <Loader2
              size={45}
              className="
                animate-spin
              "
            />

          </div>

        )
      }

      {/* EMPTY */}

      {
        !loading &&
        filteredProperties.length === 0 && (

          <div
            className="
              text-center
              py-32
            "
          >

            <h3
              className="
                text-3xl
                font-bold
              "
            >

              No Properties Found

            </h3>

            <p
              className="
                text-gray-500
                mt-4
              "
            >

              Try changing your search.

            </p>

          </div>

        )
      }

      {/* PROPERTIES GRID */}

      {
        !loading && (

          <section
            className="
              px-5
              lg:px-8
              mt-12
            "
          >

            <div
              className="
                max-w-7xl
                mx-auto
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-8
              "
            >

              {
                filteredProperties.map(
                  (property) => (

                    <Link

                      key={property._id}

                      to={`/properties/${property._id}`}

                      className="
                        group
                        bg-white
                        rounded-[30px]
                        overflow-hidden
                        border
                        shadow-sm
                        hover:shadow-2xl
                        hover:-translate-y-2
                        transition-all
                        duration-500
                      "
                    >

                      {/* IMAGE */}

                      <div
                        className="
                          relative
                          overflow-hidden
                          h-[280px]
                        "
                      >

                        <img
                          src={
                            property.thumbnail
                              ? `${property.thumbnail}?tr=w-800,q-70,f-webp`
                              : "https://placehold.co/800x600"
                          }

                          alt={
                            property.title
                          }

                          loading="lazy"

                          className="
                            w-full
                            h-full
                            object-cover
                            group-hover:scale-110
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
                            from-black/70
                            via-black/10
                            to-transparent
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
                            px-4
                            py-2
                            rounded-full
                            text-sm
                            font-medium
                          "
                        >

                          {
                            property.propertyType
                          }

                        </div>

                        {/* HEART */}

                        <button
                          className="
                            absolute
                            top-5
                            right-5
                            w-11
                            h-11
                            rounded-full
                            bg-white/90
                            backdrop-blur-md
                            flex
                            items-center
                            justify-center
                          "
                        >

                          <Heart
                            size={20}
                          />

                        </button>

                        {/* PRICE */}

                        <div
                          className="
                            absolute
                            bottom-5
                            left-5
                          "
                        >

                          <h3
                            className="
                              text-white
                              text-3xl
                              font-bold
                            "
                          >

                            ₹
                            {property.price
                              ?.toLocaleString()}

                          </h3>

                        </div>

                      </div>

                      {/* CONTENT */}

                      <div
                        className="
                          p-6
                        "
                      >

                        {/* LOCATION */}

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            text-gray-500
                            mb-3
                          "
                        >

                          <MapPin
                            size={18}
                          />

                          <span>

                            {
                              property.locality
                            }
                            {", "}
                            {
                              property.city
                            }

                          </span>

                        </div>

                        {/* TITLE */}

                        <h2
                          className="
                            text-2xl
                            font-bold
                            text-black
                            leading-snug
                            line-clamp-2
                          "
                        >

                          {property.title}

                        </h2>

                        {/* FEATURES */}

                        <div
                          className="
                            mt-6
                            pt-6
                            border-t
                            grid
                            grid-cols-3
                            gap-4
                          "
                        >

                          <div
                            className="
                              flex
                              flex-col
                              items-center
                              text-center
                            "
                          >

                            <BedDouble
                              size={22}
                              className="
                                mb-2
                              "
                            />

                            <span
                              className="
                                text-sm
                                text-gray-600
                              "
                            >

                              {
                                property.bedrooms
                              }
                              {" "}
                              Beds

                            </span>

                          </div>

                          <div
                            className="
                              flex
                              flex-col
                              items-center
                              text-center
                            "
                          >

                            <Bath
                              size={22}
                              className="
                                mb-2
                              "
                            />

                            <span
                              className="
                                text-sm
                                text-gray-600
                              "
                            >

                              {
                                property.bathrooms
                              }
                              {" "}
                              Baths

                            </span>

                          </div>

                          <div
                            className="
                              flex
                              flex-col
                              items-center
                              text-center
                            "
                          >

                            <Maximize
                              size={22}
                              className="
                                mb-2
                              "
                            />

                            <span
                              className="
                                text-sm
                                text-gray-600
                              "
                            >

                              {
                                property.builtUpArea
                              }
                              {" "}
                              sqft

                            </span>

                          </div>

                        </div>

                      </div>

                    </Link>

                  )
                )
              }

            </div>

          </section>

        )
      }

    </div>
    </MainLayout>
  );
}

export default PropertiesPage;