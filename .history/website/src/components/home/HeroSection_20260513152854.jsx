import HomeSearch from "./HomeSearch";

function HeroSection() {

  return (

    <section
      className="
        relative
        min-h-screen
        bg-black
        text-white
        flex
        items-center
      "
    >

      {/* BACKGROUND IMAGE */}

      <div
        className="
          absolute
          inset-0
        "
      >

        <img
          src="
            https://images.unsplash.com/photo-1600585154526-990dced4db0d
          "
          alt="Hero"

          className="
            w-full
            h-full
            object-cover
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/60
          "
        />

      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          w-full
        "
      >

        <div
          className="
            max-w-4xl
          "
        >

          <p
            className="
              uppercase
              tracking-[5px]
              text-sm
              text-gray-300
              mb-6
            "
          >

            Find Your Dream Home

          </p>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
            "
          >

            Discover Luxury
            Properties Across
            India

          </h1>

          <p
            className="
              text-lg
              md:text-xl
              text-gray-200
              mt-8
              leading-8
              max-w-2xl
            "
          >

            Explore apartments,
            villas, plots and
            commercial properties
            with modern search and
            premium experience.

          </p>

          {/* SEARCH */}

          <div className="mt-12">

            <HomeSearch />

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;