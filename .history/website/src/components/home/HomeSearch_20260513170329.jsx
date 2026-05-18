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

  const [propertyType,
    setPropertyType] =
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

    if (location.trim()) {

      params.append(
        "location",
        location
      );
    }

    if (propertyType) {

      params.append(
        "propertyType",
        propertyType
      );
    }

    if (budget) {

      params.append(
        "budget",
        budget
      );
    }

    navigate(
      `/properties?${params.toString()}`
    );

    setShowSuggestions(false);
  };

  return (

    <div
      className="
        bg-white
        rounded-[35px]
        p-4
        md:p-5
        shadow-[0_20px_80px_rgba(0,0,0,0.25)]
      "
    >

      <form

        onSubmit={(e) => {

          e.preventDefault();

          handleSearch();
        }}

        className="
          grid
          grid-cols-1
          lg:grid-cols-[2fr_1fr_1fr_auto]
          gap-4
          items-center
        "
      >

        {/* LOCATION */}

        <div
          className="
            relative
          "
        >

          <div
            className="
              h-[72px]
              flex
              items-center
              gap-4
              bg-gray-50
              border
              border-gray-200
              rounded-2xl
              px-5
              transition-all
              focus-within:border-primary
              focus-within:bg-white
            "
          >

            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-primary/10
                flex
                items-center
                justify-center
                shrink-0
              "
            >

              <MapPin
                size={22}
                className="
                  text-primary
                "
              />

            </div>

            <div className="w-full">

              <p
                className="
                  text-xs
                  text-gray-500
                  mb-1
                "
              >

                Location

              </p>

              <input

                type="text"

                placeholder="
                  Search city, locality or property
                "

                value={location}

                onChange={async (e) => {

                  const value =
                    e.target.value;

                  setLocation(value);

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

                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-black
                  font-medium
                  placeholder:text-gray-400
                "
              />

            </div>

          </div>

          {/* SUGGESTIONS */}

          {
            showSuggestions &&
            suggestions.length > 0 && (

              <div
                className="
                  absolute
                  top-full
                  left-0
                  mt-4
                  w-full
                  bg-white
                  rounded-3xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.15)]
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
                          px-5
                          py-4
                          text-left
                          hover:bg-gray-50
                          transition-all
                          border-b
                          last:border-b-0
                        "
                      >

                        <div
                          className="
                            flex
                            gap-4
                            items-start
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
            h-[72px]
            flex
            items-center
            gap-4
            bg-gray-50
            border
            border-gray-200
            rounded-2xl
            px-5
          "
        >

          <div
            className="
              w-11
              h-11
              rounded-xl
              bg-primary/10
              flex
              items-center
              justify-center
              shrink-0
            "
          >

            <Building2
              size={20}
              className="
                text-primary
              "
            />

          </div>

          <div className="w-full">

            <p
              className="
                text-xs
                text-gray-500
                mb-1
              "
            >

              Property Type

            </p>

            <select

              value={propertyType}

              onChange={(e) =>
                setPropertyType(
                  e.target.value
                )
              }

              className="
                w-full
                bg-transparent
                outline-none
                font-medium
                cursor-pointer
              "
            >

              <option value="">
                Any Type
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

              <option value="Commercial">
                Commercial
              </option>

            </select>

          </div>

        </div>

        {/* BUDGET */}

        <div
          className="
            h-[72px]
            flex
            items-center
            bg-gray-50
            border
            border-gray-200
            rounded-2xl
            px-5
          "
        >

          <div className="w-full">

            <p
              className="
                text-xs
                text-gray-500
                mb-1
              "
            >

              Budget

            </p>

            <select

              value={budget}

              onChange={(e) =>
                setBudget(
                  e.target.value
                )
              }

              className="
                w-full
                bg-transparent
                outline-none
                font-medium
                cursor-pointer
              "
            >

              <option value="">
                Any Budget
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

        </div>

        {/* BUTTON */}

        <button

          type="submit"

          className="
            h-[72px]
            px-8
            rounded-2xl
            bg-primary
            text-white
            font-bold
            flex
            items-center
            justify-center
            gap-3
            hover:scale-[1.02]
            transition-all
            shadow-xl
            whitespace-nowrap
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