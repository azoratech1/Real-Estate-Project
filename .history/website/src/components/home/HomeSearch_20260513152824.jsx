import {
  Search,
  MapPin,
  Building2
} from "lucide-react";

function HomeSearch() {

  return (

    <div
      className="
        bg-white
        rounded-3xl
        shadow-2xl
        p-4
        md:p-6
        w-full
      "
    >

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-4
        "
      >

        {/* LOCATION */}

        <div
          className="
            flex
            items-center
            gap-3
            border
            rounded-2xl
            px-4
            py-3
          "
        >

          <MapPin
            size={20}
            className="text-gray-500"
          />

          <input
            type="text"
            placeholder="Search city or location"
            className="
              w-full
              outline-none
              bg-transparent
            "
          />

        </div>

        {/* PROPERTY TYPE */}

        <div
          className="
            flex
            items-center
            gap-3
            border
            rounded-2xl
            px-4
            py-3
          "
        >

          <Building2
            size={20}
            className="text-gray-500"
          />

          <select
            className="
              w-full
              outline-none
              bg-transparent
            "
          >

            <option>
              Property Type
            </option>

            <option>
              Apartment
            </option>

            <option>
              Villa
            </option>

            <option>
              Plot
            </option>

          </select>

        </div>

        {/* PRICE */}

        <div
          className="
            border
            rounded-2xl
            px-4
            py-3
          "
        >

          <select
            className="
              w-full
              outline-none
              bg-transparent
            "
          >

            <option>
              Budget
            </option>

            <option>
              Under ₹50L
            </option>

            <option>
              ₹50L - ₹1Cr
            </option>

            <option>
              Above ₹1Cr
            </option>

          </select>

        </div>

        {/* BUTTON */}

        <button
          className="
            bg-black
            text-white
            rounded-2xl
            flex
            items-center
            justify-center
            gap-2
            font-semibold
            hover:bg-gray-800
            transition-all
            py-4
          "
        >

          <Search size={20} />

          Search

        </button>

      </div>

    </div>
  );
}

export default HomeSearch;