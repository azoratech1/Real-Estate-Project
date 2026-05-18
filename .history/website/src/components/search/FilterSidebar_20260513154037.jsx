function FilterSidebar({

  filters,

  setFilters

}) {

  /*
  =====================================
  HANDLE CHANGE
  =====================================
  */

  const handleChange = (
    key,
    value
  ) => {

    setFilters({

      ...filters,

      [key]: value
    });
  };

  return (

    <div
      className="
        bg-white
        rounded-3xl
        shadow-sm
        border
        p-6
        sticky
        top-24
      "
    >

      {/* TITLE */}

      <div className="mb-8">

        <h2
          className="
            text-2xl
            font-bold
          "
        >

          Filters

        </h2>

        <p
          className="
            text-gray-500
            mt-2
          "
        >

          Refine your search

        </p>

      </div>

      <div className="space-y-6">

        {/* PROPERTY TYPE */}

        <div>

          <label
            className="
              block
              font-semibold
              mb-3
            "
          >

            Property Type

          </label>

          <select

            value={
              filters.propertyType
            }

            onChange={(e) =>
              handleChange(
                "propertyType",
                e.target.value
              )
            }

            className="
              w-full
              border
              rounded-2xl
              p-4
              outline-none
            "
          >

            <option value="">
              All Types
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

        {/* LISTING TYPE */}

        <div>

          <label
            className="
              block
              font-semibold
              mb-3
            "
          >

            Listing Type

          </label>

          <select

            value={
              filters.listingType
            }

            onChange={(e) =>
              handleChange(
                "listingType",
                e.target.value
              )
            }

            className="
              w-full
              border
              rounded-2xl
              p-4
              outline-none
            "
          >

            <option value="">
              Any
            </option>

            <option value="Sale">
              Sale
            </option>

            <option value="Rent">
              Rent
            </option>

          </select>

        </div>

        {/* MIN PRICE */}

        <div>

          <label
            className="
              block
              font-semibold
              mb-3
            "
          >

            Min Price

          </label>

          <input

            type="number"

            placeholder="
              ₹ Minimum
            "

            value={
              filters.minPrice
            }

            onChange={(e) =>
              handleChange(
                "minPrice",
                e.target.value
              )
            }

            className="
              w-full
              border
              rounded-2xl
              p-4
              outline-none
            "
          />

        </div>

        {/* MAX PRICE */}

        <div>

          <label
            className="
              block
              font-semibold
              mb-3
            "
          >

            Max Price

          </label>

          <input

            type="number"

            placeholder="
              ₹ Maximum
            "

            value={
              filters.maxPrice
            }

            onChange={(e) =>
              handleChange(
                "maxPrice",
                e.target.value
              )
            }

            className="
              w-full
              border
              rounded-2xl
              p-4
              outline-none
            "
          />

        </div>

        {/* BEDROOMS */}

        <div>

          <label
            className="
              block
              font-semibold
              mb-3
            "
          >

            Bedrooms

          </label>

          <select

            value={
              filters.bedrooms
            }

            onChange={(e) =>
              handleChange(
                "bedrooms",
                e.target.value
              )
            }

            className="
              w-full
              border
              rounded-2xl
              p-4
              outline-none
            "
          >

            <option value="">
              Any
            </option>

            <option value="1">
              1 BHK
            </option>

            <option value="2">
              2 BHK
            </option>

            <option value="3">
              3 BHK
            </option>

            <option value="4">
              4+ BHK
            </option>

          </select>

        </div>

        {/* RESET */}

        <button

          onClick={() =>
            setFilters({

              propertyType: "",

              listingType: "",

              minPrice: "",

              maxPrice: "",

              bedrooms: ""
            })
          }

          className="
            w-full
            border
            border-black
            py-4
            rounded-2xl
            hover:bg-black
            hover:text-white
            transition-all
          "
        >

          Reset Filters

        </button>

      </div>

    </div>
  );
}

export default FilterSidebar;