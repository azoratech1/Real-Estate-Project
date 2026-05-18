import {
  Search,
  MapPin
} from "lucide-react";

function SearchBar({

  search,

  setSearch,

  onSearch

}) {

  return (

    <div
      className="
        bg-white
        rounded-3xl
        shadow-sm
        border
        p-4
      "
    >

      <div
        className="
          flex
          flex-col
          md:flex-row
          gap-4
        "
      >

        {/* SEARCH INPUT */}

        <div
          className="
            flex-1
            flex
            items-center
            gap-3
            border
            rounded-2xl
            px-4
            py-4
          "
        >

          <Search
            size={20}
            className="text-gray-500"
          />

          <input

            type="text"

            placeholder="
              Search properties, cities...
            "

            value={search}

            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }

            className="
              w-full
              outline-none
              bg-transparent
            "
          />

        </div>

        {/* LOCATION */}

        <div
          className="
            flex
            items-center
            gap-3
            border
            rounded-2xl
            px-4
            py-4
            md:w-[250px]
          "
        >

          <MapPin
            size={20}
            className="text-gray-500"
          />

          <input

            type="text"

            placeholder="
              Location
            "

            className="
              w-full
              outline-none
              bg-transparent
            "
          />

        </div>

        {/* BUTTON */}

        <button

          onClick={onSearch}

          className="
            bg-black
            text-white
            px-8
            rounded-2xl
            hover:bg-gray-800
            transition-all
            py-4
          "
        >

          Search

        </button>

      </div>

    </div>
  );
}

export default SearchBar;