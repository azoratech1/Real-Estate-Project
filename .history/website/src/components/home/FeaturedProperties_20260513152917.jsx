import PropertyCard from "../property/PropertyCard";

function FeaturedProperties() {

  /*
  =====================================
  DUMMY DATA
  =====================================
  */

  const properties = [

    {
      _id: 1,

      title:
        "Luxury Villa in Gurgaon",

      city: "Gurgaon",

      state: "Haryana",

      price: 25000000,

      bedrooms: 4,

      bathrooms: 4,

      thumbnail:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    },

    {
      _id: 2,

      title:
        "Modern Apartment in Delhi",

      city: "Delhi",

      state: "Delhi",

      price: 12000000,

      bedrooms: 3,

      bathrooms: 2,

      thumbnail:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde"
    },

    {
      _id: 3,

      title:
        "Premium Penthouse",

      city: "Mumbai",

      state: "Maharashtra",

      price: 45000000,

      bedrooms: 5,

      bathrooms: 5,

      thumbnail:
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e"
    }
  ];

  return (

    <section
      className="
        py-24
        bg-gray-50
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-5
        "
      >

        {/* HEADER */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-6
            mb-14
          "
        >

          <div>

            <p
              className="
                text-sm
                uppercase
                tracking-[4px]
                text-gray-500
                mb-3
              "
            >

              Featured Listings

            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                leading-tight
              "
            >

              Handpicked
              Premium Properties

            </h2>

          </div>

          <button
            className="
              bg-black
              text-white
              px-6
              py-3
              rounded-2xl
              hover:bg-gray-800
              transition-all
              w-fit
            "
          >

            View All

          </button>

        </div>

        {/* GRID */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >

          {
            properties.map(
              (property) => (

                <PropertyCard
                  key={property._id}
                  property={property}
                />

              )
            )
          }

        </div>

      </div>

    </section>
  );
}

export default FeaturedProperties;