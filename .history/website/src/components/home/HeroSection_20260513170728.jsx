import {
  Search,
  MapPin
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

  const [keyword, setKeyword] =
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

    if (!keyword.trim()) {
      return;
    }

    navigate(
      `/properties?location=${keyword}`
    );

    setShowSuggestions(false);
  };

  return (

    <div
      className="
        relative
        w-full
      "
    >

      {/* SEARCH BAR */}

      <form

        onSubmit={(e) => {

          e.preventDefault();

          handleSearch();
        }}

        className="
          relative
        "
      >

        <div
          className="
            h-[82px]
            bg-white
            rounded-[30px]
            shadow-[0_25px_60px_rgba(0,0,0,0.18)]
            flex
            items-center
            px-4
            md:px-5
            gap-4
            border
            border-gray-100
          "
        >

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

            <MapPin
              size={24}
              className="
                text-primary
              "
            />

          </div>

          {/* INPUT */}

          <div className="flex-1">

            <p
              className="
                text-xs
                uppercase
                tracking-[2px]
                text-gray-400
                mb-1
              "
            >

              Search Properties

            </p>

            <input

              type="text"

              placeholder="
                Search city, locality, villa, apartment...
              "

              value={keyword}

              onChange={async (e) => {

                const value =
                  e.target.value;

                setKeyword(value);

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
                text-lg
                font-semibold
                placeholder:text-gray-400
              "
            />

          </div>

          {/* BUTTON */}

          <button

            type="submit"

            className="
              h-[58px]
              px-7
              rounded-2xl
              bg-black
              text-white
              font-semibold
              flex
              items-center
              justify-center
              gap-3
              hover:scale-[1.03]
              transition-all
              shadow-xl
              shrink-0
            "
          >

            <Search size={20} />

            <span className="hidden md:block">

              Search

            </span>

          </button>

        </div>

      </form>

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
              rounded-[30px]
              shadow-[0_25px_60px_rgba(0,0,0,0.18)]
              overflow-hidden
              border
              border-gray-100
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

                      const value =

                        `${item.locality}, ${item.city}`;

                      setKeyword(value);

                      setShowSuggestions(
                        false
                      );

                      navigate(
                        `/properties?location=${value}`
                      );
                    }}

                    className="
                      w-full
                      px-6
                      py-5
                      hover:bg-gray-50
                      transition-all
                      border-b
                      last:border-b-0
                      text-left
                    "
                  >

                    <div
                      className="
                        flex
                        gap-4
                        items-start
                      "
                    >

                      {/* ICON */}

                      <div
                        className="
                          w-12
                          h-12
                          rounded-2xl
                          bg-primary/10
                          flex
                          items-center
                          justify-center
                          shrink-0
                        "
                      >

                        <MapPin
                          size={20}
                          className="
                            text-primary
                          "
                        />

                      </div>

                      {/* TEXT */}

                      <div>

                        <h4
                          className="
                            text-black
                            font-bold
                            text-base
                          "
                        >

                          {item.title}

                        </h4>

                        <p
                          className="
                            text-gray-500
                            text-sm
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
  );
}

export default HomeSearch;