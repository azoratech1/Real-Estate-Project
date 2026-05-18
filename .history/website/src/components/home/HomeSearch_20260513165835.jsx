import {
  Search,
  MapPin,
  Building2
} from "lucide-react";

import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import API from "../../services/api";

function HomeSearch() {

  const navigate =
    useNavigate();

  /*
  =====================================
  STATES
  =====================================
  */

  const [location, setLocation] =
    useState("");

  const [propertyType, setPropertyType] =
    useState("");

  const [budget, setBudget] =
    useState("");

  const [suggestions,
    setSuggestions] =
    useState([]);

  const [showSuggestions,
    setShowSuggestions] =
    useState(false);

  /*
  =====================================
  FETCH SUGGESTIONS
  =====================================
  */

  const fetchSuggestions =
    async (value) => {

      try {

        const response =
          await API.get(
            `/properties/suggestions?q=${value}`
          );

        if (
          response.data.success
        ) {

          setSuggestions(
            response.data
              .suggestions
          );
        }

      } catch (error) {

        console.log(error);
      }
    };

  /*
  =====================================
  SEARCH
  =====================================
  */

  const handleSearch = () => {

    const params =
      new URLSearchParams();

    /*
    =====================================
    LOCATION
    =====================================
    */

    if (location.trim()) {

      params.append(
        "location",
        location
      );
    }

    /*
    =====================================
    PROPERTY TYPE
    =====================================
    */

    if (propertyType) {

      params.append(
        "propertyType",
        propertyType
      );
    }

    /*
    =====================================
    BUDGET
    =====================================
    */

    if (budget) {

      params.append(
        "budget",
        budget
      );
    }

    /*
    =====================================
    NAVIGATE
    =====================================
    */

    navigate(
      `/properties?${params.toString()}`
    );

    setShowSuggestions(
      false
    );
  };

  return (

    <div
      className="
        bg-white
        rounded-[35px]
        shadow-2xl
        p-5
        md:p-6
        w-full
      "
    >

      {/* FORM */}

      <form

        onSubmit={(e) => {

          e.preventDefault();

          handleSearch();
        }}

        className="
          grid
          grid-cols-1
          lg:grid-cols-4
          gap-4
        "
      >

        {/* LOCATION */}

        <div
          className="
            relative
            flex
            items-center
            gap-4
            border
            border-gray-200
            rounded-2xl
            px-5
            py-4
            hover:border-primary
            transition-all
          "
        >

          <MapPin
            size={22}
            className="
              text-primary
              shrink-0
            "
          />

          <input

            type="text"

            placeholder="
              Search city, locality or property
            "

            value={location}

            onChange={async (e) => {

              const value =
                e.target.value;

              setLocation(
                value
              );

              if (
                value.trim()
                  .length > 1
              ) {

                await fetchSuggestions(
                  value
                );

                setShowSuggestions(
                  true
                );

              } else {

                setSuggestions([]);

                setShowSuggestions(
                  false
                );
              }
            }}

            onFocus={() => {

              if (
                suggestions.length > 0
              ) {

                setShowSuggestions(
                  true
                );
              }
            }}

            className="
              w-full
              outline-none
              bg-transparent
            "
          />

          {/* SUGGESTIONS */}

          {
            showSuggestions &&
            suggestions.length > 0 && (

              <div
                className="
                  absolute
                  top-full
                  left-0
                  w-full
                  mt-3
                  bg-white
                  rounded-3xl
                  shadow-2xl
                  border
                  overflow-hidden
                  z-50
                "
              >

                {
                  suggestions.map(
                    (item) => (

                      <button

                        key={item.id}

                        type="button"

                        onClick={() => {

                          setLocation(

                            `${item.locality}, ${item.city}`
                          );

                          setShowSuggestions(
                            false
                          );
                        }}

                        className="
                          w-full
                          text-left
                          px-5
                          py-4
                          hover:bg-gray-50
                          transition-all
                          border-b
                          last:border-b-0
                        "
                      >

                        <div
                          className="
                            flex
                            items-start
                            gap-3
                          "
                        >

                          <div
                            className="
                              w-10
                              h-10
                              rounded-xl
                              bg-primary/10
                              flex
                              items-center
                              justify-center
                              shrink-0
                            "
                          >

                            <MapPin
                              size={18}
                              className="
                                text-primary
                              "
                            />

                          </div>

                          <div>

                            <h4
                              className="
                                font-semibold
                                text-black
                                line-clamp-1
                              "
                            >

                              {item.title}

                            </h4>

                            <p
                              className="
                                text-sm
                                text-gray-500
                                mt-1
                              "
                            >

                              {item.locality}
                              {" • "}
                              {item.city}
                              {" • "}
                              {item.type}

                            </p>

                          </div>

                        </div>

                      </button>

                    )
                  )
                }

              </div>

            )
          }

        </div>

        {/* PROPERTY TYPE */}

        <div
          className="
            flex
            items-center
            gap-4
            border
            border-gray-200
            rounded-2xl
            px-5
            py-4
            hover:border-primary
            transition-all
          "
        >

          <Building2
            size={22}
            className="
              text-primary
            "
          />

          <select

            value={propertyType}

            onChange={(e) =>
              setPropertyType(
                e.target.value
              )
            }

            className="
              w-full
              outline-none
              bg-transparent
              cursor-pointer
            "
          >

            <option value="">
              Property Type
            </option>

            <option value="Apartment">
              Apartment
            </option>

            <option value="Villa">
              Villa
            </option>

            <option value="Plot">
              Plot
            </option>

            <option value="Office">
              Office
            </option>

            <option value="Commercial">
              Commercial
            </option>

          </select>

        </div>

        {/* PRICE */}

        <div
          className="
            border
            border-gray-200
            rounded-2xl
            px-5
            py-4
            hover:border-primary
            transition-all
          "
        >

          <select

            value={budget}

            onChange={(e) =>
              setBudget(
                e.target.value
              )
            }

            className="
              w-full
              outline-none
              bg-transparent
              cursor-pointer
            "
          >

            <option value="">
              Budget
            </option>

            <option value="5000000">
              Under ₹50L
            </option>

            <option value="10000000">
              Under ₹1Cr
            </option>

            <option value="50000000">
              Above ₹1Cr
            </option>

          </select>

        </div>

        {/* BUTTON */}

        <button

          type="submit"

          className="
            bg-primary
            text-white
            rounded-2xl
            flex
            items-center
            justify-center
            gap-3
            font-semibold
            hover:scale-[1.02]
            hover:bg-primary-light
            transition-all
            py-4
            text-lg
            shadow-lg
          "
        >

          <Search size={22} />

          Search

        </button>

      </form>

    </div>
  );
}

export default HomeSearch;