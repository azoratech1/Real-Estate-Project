import {
  Building2,
  ShieldCheck,
  MapPinned,
  BadgeCheck,
  Users,
  ArrowRight
} from "lucide-react";

import {
  motion
} from "framer-motion";

import MainLayout from "../components/layout/MainLayout";

function AboutPage() {

  /*
  =====================================
  STATS
  =====================================
  */

  const stats = [

    {
      number: "500+",
      label: "Premium Properties"
    },

    {
      number: "20+",
      label: "Cities Covered"
    },

    {
      number: "10K+",
      label: "Happy Clients"
    },

    {
      number: "24/7",
      label: "Customer Support"
    }
  ];

  /*
  =====================================
  FEATURES
  =====================================
  */

  const features = [

    {
      icon: ShieldCheck,
      title: "Verified Listings",
      description:
        "Every property is carefully verified to ensure authentic and trusted listings for buyers and investors."
    },

    {
      icon: MapPinned,
      title: "Smart Location Search",
      description:
        "Explore properties using intelligent search, location based discovery and modern property filters."
    },

    {
      icon: BadgeCheck,
      title: "Premium Experience",
      description:
        "Built with a modern interface focused on speed, simplicity and premium browsing experience."
    },

    {
      icon: Users,
      title: "Trusted By Thousands",
      description:
        "Helping families, investors and businesses discover ideal real estate opportunities across India."
    }
  ];

  return (

    <MainLayout>

      <div
        className="
          bg-white
        "
      >

        {/* HERO */}

        <section
          className="
            relative
            overflow-hidden
            bg-black
            text-white
          "
        >

          {/* BACKGROUND */}

          <div
            className="
              absolute
              inset-0
            "
          >

            <img

              src="
                https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop
              "

              alt="About"

              className="
                w-full
                h-full
                object-cover
                opacity-40
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-black/70
              "
            />

          </div>

          {/* CONTENT */}

          <div
            className="
              relative
              max-w-7xl
              mx-auto
              px-5
              py-32
              md:py-40
            "
          >

            <motion.div

              initial={{
                opacity: 0,
                y: 40
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.8
              }}

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

                About Our Company

              </p>

              <h1
                className="
                  text-5xl
                  md:text-7xl
                  font-black
                  leading-tight
                "
              >

                Redefining Modern
                Real Estate
                Experience

              </h1>

              <p
                className="
                  text-lg
                  md:text-2xl
                  text-gray-300
                  mt-10
                  leading-9
                  max-w-3xl
                "
              >

                We help buyers,
                investors and families
                discover premium
                properties with modern
                search, verified
                listings and seamless
                digital experience.

              </p>

            </motion.div>

          </div>

        </section>

        {/* STATS */}

        <section
          className="
            py-20
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

            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-6
              "
            >

              {
                stats.map(
                  (item) => (

                    <div

                      key={item.label}

                      className="
                        bg-white
                        rounded-[30px]
                        p-8
                        text-center
                        shadow-sm
                        border
                        border-gray-100
                      "
                    >

                      <h2
                        className="
                          text-4xl
                          md:text-5xl
                          font-black
                          text-primary
                        "
                      >

                        {item.number}

                      </h2>

                      <p
                        className="
                          text-gray-500
                          mt-4
                          text-lg
                        "
                      >

                        {item.label}

                      </p>

                    </div>

                  )
                )
              }

            </div>

          </div>

        </section>

        {/* STORY */}

        <section
          className="
            py-28
          "
        >

          <div
            className="
              max-w-7xl
              mx-auto
              px-5
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-16
              items-center
            "
          >

            {/* LEFT */}

            <motion.div

              initial={{
                opacity: 0,
                x: -60
              }}

              whileInView={{
                opacity: 1,
                x: 0
              }}

              transition={{
                duration: 0.8
              }}

            >

              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-primary
                  text-sm
                  font-semibold
                  mb-5
                "
              >

                Our Story

              </p>

              <h2
                className="
                  text-4xl
                  md:text-6xl
                  font-black
                  leading-tight
                  text-[#0f172a]
                "
              >

                Building Trust In
                The Real Estate
                Industry

              </h2>

              <p
                className="
                  text-gray-600
                  mt-8
                  text-lg
                  leading-9
                "
              >

                Our mission is to make
                property discovery
                faster, smarter and more
                transparent for
                everyone. From luxury
                villas to modern
                apartments and
                commercial spaces, we
                bring premium listings
                with a seamless digital
                experience.

              </p>

              <p
                className="
                  text-gray-600
                  mt-6
                  text-lg
                  leading-9
                "
              >

                With intelligent search,
                modern UI and verified
                properties, we are
                shaping the future of
                real estate platforms
                across India.

              </p>

            </motion.div>

            {/* RIGHT */}

            <motion.div

              initial={{
                opacity: 0,
                x: 60
              }}

              whileInView={{
                opacity: 1,
                x: 0
              }}

              transition={{
                duration: 0.8
              }}

              className="
                relative
              "
            >

              <div
                className="
                  absolute
                  -top-10
                  -right-10
                  w-72
                  h-72
                  bg-primary/10
                  blur-3xl
                  rounded-full
                "
              />

              <img

                src="
                  https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop
                "

                alt="Office"

                className="
                  relative
                  rounded-[40px]
                  shadow-2xl
                  w-full
                  object-cover
                  h-[650px]
                "
              />

            </motion.div>

          </div>

        </section>

        {/* FEATURES */}

        <section
          className="
            py-28
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
                text-center
                max-w-4xl
                mx-auto
                mb-20
              "
            >

              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-primary
                  text-sm
                  font-semibold
                  mb-5
                "
              >

                Why Choose Us

              </p>

              <h2
                className="
                  text-4xl
                  md:text-6xl
                  font-black
                  text-[#0f172a]
                  leading-tight
                "
              >

                Modern Real Estate
                Platform Built For
                Everyone

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
                features.map(
                  (
                    item,
                    index
                  ) => {

                    const Icon =
                      item.icon;

                    return (

                      <motion.div

                        key={index}

                        initial={{
                          opacity: 0,
                          y: 40
                        }}

                        whileInView={{
                          opacity: 1,
                          y: 0
                        }}

                        transition={{
                          duration: 0.5,
                          delay:
                            index * 0.1
                        }}

                        className="
                          bg-white
                          rounded-[32px]
                          p-8
                          shadow-sm
                          border
                          border-gray-100
                          hover:shadow-2xl
                          transition-all
                        "
                      >

                        <div
                          className="
                            w-16
                            h-16
                            rounded-2xl
                            bg-primary/10
                            flex
                            items-center
                            justify-center
                            mb-8
                          "
                        >

                          <Icon
                            size={30}
                            className="
                              text-primary
                            "
                          />

                        </div>

                        <h3
                          className="
                            text-2xl
                            font-black
                            text-[#0f172a]
                            mb-5
                          "
                        >

                          {item.title}

                        </h3>

                        <p
                          className="
                            text-gray-600
                            leading-8
                          "
                        >

                          {
                            item.description
                          }

                        </p>

                      </motion.div>

                    );
                  }
                )
              }

            </div>

          </div>

        </section>

        {/* CTA */}

        <section
          className="
            py-28
            bg-black
            text-white
            relative
            overflow-hidden
          "
        >

          <div
            className="
              absolute
              inset-0
              opacity-20
            "
          >

            <img

              src="
                https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop
              "

              alt="CTA"

              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>

          <div
            className="
              relative
              max-w-5xl
              mx-auto
              px-5
              text-center
            "
          >

            <h2
              className="
                text-4xl
                md:text-6xl
                font-black
                leading-tight
              "
            >

              Find Your Dream
              Property Today

            </h2>

            <p
              className="
                text-gray-300
                text-xl
                mt-8
                leading-9
              "
            >

              Explore verified
              listings, premium homes
              and modern commercial
              spaces with our smart
              real estate platform.

            </p>

            <button
              className="
                mt-12
                inline-flex
                items-center
                gap-3
                bg-white
                text-black
                px-10
                py-5
                rounded-2xl
                text-lg
                font-semibold
                hover:scale-105
                transition-all
              "
            >

              Explore Properties

              <ArrowRight
                size={22}
              />

            </button>

          </div>

        </section>

      </div>

    </MainLayout>
  );
}

export default AboutPage;