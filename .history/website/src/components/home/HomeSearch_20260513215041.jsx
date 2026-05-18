import {
  Search,
  MapPin,
  Sparkles,
  ArrowRight
} from "lucide-react";

import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  motion,
  AnimatePresence
} from "framer-motion";

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

  const [loading,
    setLoading] =
    useState(false);

  /*
  =====================================
  FETCH
  =====================================
  */

  const fetchSuggestions =
    async (value) => {

      try {

        setLoading(true);

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

      } finally {

        setLoading(false);
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
        max-w-6xl
        mx-auto
      "
    >

      {/* GLOW */}

      <div
        className="
          absolute
          inset-0
          bg-primary/20
          blur-[120px]
          rounded-full
          scale-110
        "
      />

      {/* SEARCH CONTAINER */}

      <motion.div

        initial={{
          opacity: 0,
          y: 40
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.7
        }}

        className="
          relative
          bg-white/80
          backdrop-blur-2xl
          border
          border-white/50
          rounded-[38px]
          shadow-[0_25px_80px_rgba(0,0,0,0.12)]
          overflow-hidden
        "
      >

        {/* TOP BAR */}

        <div
          className="
            flex
            items-center
            justify-between
            px-7
            pt-6
          "
        >

          <div
            className="
              inline-flex
              items-center
              gap-3
              bg-primary/10
              rounded-full
              px-4
              py-2
            "
          >

            <Sparkles
              size={16}
              className="
                text-primary
              "
            />

            <span
              className="
                text-sm
                font-semibold
                text-primary
              "
            >

              AI Property Search

            </span>

          </div>

          <div
            className="
              hidden
              md:flex
              items-center
              gap-2
              text-sm
              text-gray-500
            "
          >

            <div
              className="
                w-2
                h-2
                rounded-full
                bg-green-500
              "
            />

            500+ Premium Listings

          </div>

        </div>

        {/* FORM */}

        <form

          onSubmit={(e) => {

            e.preventDefault();

            handleSearch();
          }}

          className="
            p-6
          "
        >

          <div
            className="
              flex
              flex-col
              lg:flex-row
              items-stretch
              gap-4
            "
          >

            {/* INPUT */}

            <div
              className="
                flex-1
                relative
              "
            >

              <div
                className="
                  h-[88px]
                  bg-white
                  rounded-[28px]
                  border
                  border-gray-200
                  flex
                  items-center
                  px-5
                  gap-5
                  shadow-sm
                  focus-within:border-primary
                  focus-within:shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                  transition-all
                "
              >

                {/* ICON */}

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-primary/10
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >

                  <MapPin
                    size={28}
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
                      tracking-[3px]
                      text-gray-400
                      mb-2
                    "
                  >

                    Search Location

                  </p>

                  <input

                    type="text"

                    placeholder="
                      Search Chandigarh, villas, apartments...
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
                      outline-none
                      bg-transparent
                      text-xl
                      font-bold
                      text-[#0f172a]
                      placeholder:text-gray-400
                    "
                  />

                </div>

              </div>

            </div>

            {/* BUTTON */}

            <button

              type="submit"

              className="
                h-[88px]
                px-10
                rounded-[28px]
                bg-[#0f172a]
                text-white
                font-bold
                text-lg
                flex
                items-center
                justify-center
                gap-3
                hover:scale-[1.02]
                hover:shadow-[0_20px_50px_rgba(15,23,42,0.3)]
                transition-all
                duration-500
                shrink-0
              "
            >

              <Search size={24} />

              Search

              <ArrowRight
                size={22}
              />

            </button>

          </div>

        </form>

      </motion.div>

      {/* SUGGESTIONS */}

      <AnimatePresence>

        {
          showSuggestions &&
          suggestions.length > 0 && (

            <motion.div

              initial={{
                opacity: 0,
                y: 20
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              exit={{
                opacity: 0,
                y: 20
              }}

              transition={{
                duration: 0.25
              }}

              className="
                absolute
                top-full
                left-0
                right-0
                mt-5
                bg-white/95
                backdrop-blur-2xl
                rounded-[35px]
                border
                border-white/50
                shadow-[0_30px_100px_rgba(0,0,0,0.12)]
                overflow-hidden
                z-50
              "
            >

              {/* HEADER */}

              <div
                className="
                  px-8
                  py-5
                  border-b
                  border-gray-100
                  flex
                  items-center
                  justify-between
                "
              >

                <h3
                  className="
                    text-lg
                    font-black
                    text-[#0f172a]
                  "
                >

                  Suggested Properties

                </h3>

                <span
                  className="
                    text-sm
                    text-gray-500
                  "
                >

                  {
                    suggestions.length
                  }
                  {" "}
                  Results

                </span>

              </div>

              {/* LIST */}

              <div
                className="
                  max-h-[500px]
                  overflow-y-auto
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

                            `
                              ${item.locality},
                              ${item.city}
                            `;

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
                          px-8
                          py-6
                          hover:bg-gray-50
                          transition-all
                          border-b
                          border-gray-100
                          text-left
                          group
                        "
                      >

                        <div
                          className="
                            flex
                            items-center
                            gap-5
                          "
                        >

                          {/* ICON */}

                          <div
                            className="
                              w-16
                              h-16
                              rounded-[22px]
                              bg-primary/10
                              flex
                              items-center
                              justify-center
                              shrink-0
                              group-hover:scale-110
                              transition-all
                            "
                          >

                            <MapPin
                              size={26}
                              className="
                                text-primary
                              "
                            />

                          </div>

                          {/* CONTENT */}

                          <div className="flex-1">

                            <div
                              className="
                                flex
                                flex-wrap
                                items-center
                                gap-3
                              "
                            >

                              <h4
                                className="
                                  text-xl
                                  font-black
                                  text-[#0f172a]
                                "
                              >

                                {item.title}

                              </h4>

                              <span
                                className="
                                  bg-primary/10
                                  text-primary
                                  px-3
                                  py-1
                                  rounded-full
                                  text-xs
                                  font-bold
                                "
                              >

                                {item.type}

                              </span>

                            </div>

                            <p
                              className="
                                text-gray-500
                                mt-2
                                text-base
                              "
                            >

                              {item.locality}
                              {" • "}
                              {item.city}

                            </p>

                          </div>

                          {/* PRICE */}

                          {
                            item.price && (

                              <div
                                className="
                                  hidden
                                  md:block
                                  text-right
                                "
                              >

                                <p
                                  className="
                                    text-xl
                                    font-black
                                    text-[#0f172a]
                                  "
                                >

                                  ₹
                                  {" "}
                                  {Number(
                                    item.price
                                  ).toLocaleString()}

                                </p>

                                <p
                                  className="
                                    text-sm
                                    text-gray-500
                                    mt-1
                                  "
                                >

                                  Starting Price

                                </p>

                              </div>

                            )
                          }

                        </div>

                      </button>

                    )
                  )
                }

              </div>

            </motion.div>

          )
        }

      </AnimatePresence>

      {/* LOADING */}

      {
        loading && (

          <div
            className="
              absolute
              top-full
              left-1/2
              -translate-x-1/2
              mt-4
              bg-white
              px-5
              py-3
              rounded-full
              shadow-lg
              text-sm
              font-medium
              text-gray-600
              z-50
            "
          >

            Searching properties...

          </div>

        )
      }

    </div>
  );
}

export default HomeSearch;