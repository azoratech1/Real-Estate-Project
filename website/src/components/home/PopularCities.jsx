import {
  useNavigate
} from "react-router-dom";

function PopularCities() {

  const navigate =
    useNavigate();

  /*
  =====================================
  CITIES
  =====================================
  */

  const cities = [

    {
      name: "Chandigarh",
      properties: "12,000+",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name: "Mohali",
      properties: "8,500+",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name: "Delhi",
      properties: "45,000+",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name: "Gurgaon",
      properties: "18,000+",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name: "Bangalore",
      properties: "28,000+",
      image:
        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name: "Mumbai",
      properties: "32,000+",
      image:
        "https://images.unsplash.com/photo-1526481280695-3c4691f7f65c?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name: "Hyderabad",
      properties: "15,000+",
      image:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name: "Pune",
      properties: "14,000+",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  /*
  =====================================
  NAVIGATE
  =====================================
  */

  const handleCityClick =
    (city) => {

      navigate(

        `/properties?location=${city}`
      );
    };

  return (

    <section
      className="
        py-24
        bg-[#f8fafc]
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
            mb-16
          "
        >

          <p
            className="
              uppercase
              tracking-[4px]
              text-sm
              font-semibold
              text-primary
              mb-4
            "
          >

            Top Cities

          </p>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-black
              text-[#0f172a]
              leading-tight
              max-w-5xl
            "
          >

            Explore Real Estate
            in Popular Indian Cities

          </h2>

        </div>

        {/* GRID */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-8
          "
        >

          {
            cities.map(
              (city) => (

                <button

                  key={city.name}

                  onClick={() =>
                    handleCityClick(
                      city.name
                    )
                  }

                  className="
                    group
                    bg-white
                    rounded-[32px]
                    p-5
                    flex
                    items-center
                    gap-5
                    shadow-sm
                    hover:shadow-2xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    border
                    border-gray-100
                    text-left
                  "
                >

                  {/* IMAGE */}

                  <div
                    className="
                      w-[110px]
                      h-[110px]
                      rounded-[24px]
                      overflow-hidden
                      shrink-0
                    "
                  >

                    <img

                      src={city.image}

                      alt={city.name}

                      className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-110
                        transition-all
                        duration-500
                      "
                    />

                  </div>

                  {/* CONTENT */}

                  <div>

                    <h3
                      className="
                        text-2xl
                        font-black
                        text-[#0f172a]
                        group-hover:text-primary
                        transition-all
                      "
                    >

                      {city.name}

                    </h3>

                    <p
                      className="
                        text-gray-500
                        mt-3
                        text-lg
                        font-medium
                      "
                    >

                      {city.properties}
                      {" "}
                      Properties

                    </p>

                  </div>

                </button>

              )
            )
          }

        </div>

      </div>

    </section>
  );
}

export default PopularCities;