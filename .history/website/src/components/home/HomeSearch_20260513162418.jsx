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

  /*
  =====================================
  SEARCH
  =====================================
  */

  const handleSearch = () => {

    const params =
      new URLSearchParams();

    if (location) {

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

      <div
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
            flex
            items-center
            gap-4
            border
            border-gray-200
            rounded-2xl
            px-5
            py-4
          "
        >

          <MapPin
            size={22}
            className="
              text-primary
            "
          />

          <input

            type="text"

            placeholder="
              Search city or locality
            "

            value={location}

            onChange={(e) =>
              setLocation(
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

          onClick={handleSearch}

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
            transition-all
            py-4
            text-lg
          "
        >

          <Search size={22} />

          Search

        </button>

      </div>

    </div>
  );
}

export default HomeSearch;