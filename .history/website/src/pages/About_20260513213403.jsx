import {
  ShieldCheck,
  MapPinned,
  BadgeCheck,
  Users,
  ArrowRight,
  Sparkles,
  Building2,
  Star,
  CheckCircle2
} from "lucide-react";

import {
  motion
} from "framer-motion";

import {
  useNavigate
} from "react-router-dom";

import MainLayout
  from "../components/layout/MainLayout";

function AboutPage() {

  const navigate =
    useNavigate();

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
        "Every listing is manually verified to ensure trust, authenticity and premium quality."
    },

    {
      icon: MapPinned,
      title: "Smart Search",
      description:
        "Powerful location based search with intelligent suggestions and modern filtering."
    },

    {
      icon: BadgeCheck,
      title: "Premium Experience",
      description:
        "Beautiful modern interface focused on speed, simplicity and luxury browsing experience."
    },

    {
      icon: Users,
      title: "Trusted Platform",
      description:
        "Helping buyers, investors and families discover dream properties across India."
    }
  ];

  /*
  =====================================
  VALUES
  =====================================
  */

  const values = [

    "Verified Premium Listings",

    "Modern User Experience",

    "Fast Property Discovery",

    "Trusted By Thousands",

    "Transparent Platform",

    "Luxury Real Estate Focus"
  ];

  return (

    <MainLayout>

      <div
        className="
          bg-gradient-to-b
          from-white
          to-[#f8fafc]
          overflow-hidden
        "
      >

        {/* HERO */}

        <section
          className="
            relative
            min-h-screen
            flex
            items-center
            overflow-hidden
            bg-[#050816]
            text-white
          "
        >

          {/* IMAGE */}

          <div
            className="
              absolute
              inset-0
            "
          >

            <img

              src="
                https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2200&auto=format&fit=crop
              "

              alt="Luxury"

              className="
                w-full
                h-full
                object-cover
                opacity-30
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#050816]/95
                via-[#0f172a]/85
                to-black/90
              "
            />

          </div>

          {/* BLURS */}

          <div
            className="
              absolute
              top-20
              left-10
              w-72
              h-72
              bg-primary/30
              blur-[120px]
              rounded-full
            "
          />

          <div
            className="
              absolute
              bottom-10
              right-10
              w-96
              h-96
              bg-blue-500/20
              blur-[150px]
              rounded-full
            "
          />

          {/* CONTENT */}

          <div
            className="
              relative
              max-w-7xl
              mx-auto
              px-5
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-20
              items-center
              py-32
            "
          >

            {/* LEFT */}

            <motion.div

              initial={{
                opacity: 0,
                y: 60
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 1
              }}

            >

              {/* BADGE */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-white/10
                  backdrop-blur-2xl
                  border
                  border-white/10
                  rounded-full
                  px-6
                  py-3
                  mb-8
                "
              >

                <Sparkles
                  size={18}
                  className="
                    text-yellow-400
                  "
                />

                <span
                  className="
                    text-sm
                    font-medium
                  "
                >

                  Modern Luxury Real Estate

                </span>

              </div>

              {/* TITLE */}

              <h1
                className="
                  text-6xl
                  md:text-8xl
                  font-black
                  leading-[0.95]
                  tracking-[-4px]
                "
              >

                <span
                  className="
                    bg-gradient-to-r
                    from-white
                    via-gray-200
                    to-primary
                    bg-clip-text
                    text-transparent
                  "
                >

                  Redefining
                  Modern
                  Real Estate

                </span>

              </h1>

              {/* DESC */}

              <p
                className="
                  text-xl
                  md:text-2xl
                  text-gray-300
                  mt-10
                  leading-10
                  max-w-3xl
                "
              >

                We help buyers,
                investors and families
                discover luxury
                properties with modern
                search, verified
                listings and premium
                digital experience
                across India.

              </p>

              {/* BUTTONS */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-5
                  mt-12
                "
              >

                <button

                  onClick={() =>
                    navigate(
                      "/properties"
                    )
                  }

                  className="
                    bg-white
                    text-black
                    px-10
                    py-5
                    rounded-2xl
                    font-bold
                    text-lg
                    flex
                    items-center
                    gap-3
                    hover:scale-105
                    hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)]
                    transition-all
                    duration-500
                  "
                >

                  Explore Properties

                  <ArrowRight
                    size={22}
                  />

                </button>

                <button
                  className="
                    bg-white/10
                    backdrop-blur-2xl
                    border
                    border-white/10
                    px-10
                    py-5
                    rounded-2xl
                    font-semibold
                    text-lg
                    hover:bg-white/20
                    transition-all
                  "
                >

                  Learn More

                </button>

              </div>

            </motion.div>

            {/* RIGHT */}

            <motion.div

              initial={{
                opacity: 0,
                scale: 0.9
              }}

              animate={{
                opacity: 1,
                scale: 1
              }}

              transition={{
                duration: 1
              }}

              className="
                relative
              "
            >

              {/* MAIN IMAGE */}

              <img

                src="
                  https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop
                "

                alt="Luxury"

                className="
                  rounded-[40px]
                  h-[750px]
                  object-cover
                  w-full
                  shadow-[0_40px_120px_rgba(0,0,0,0.45)]
                "
              />

              {/* FLOATING CARD */}

              <div
                className="
                  absolute
                  -bottom-10
                  -left-10
                  bg-white/90
                  backdrop-blur-2xl
                  rounded-[32px]
                  p-8
                  shadow-2xl
                  max-w-[320px]
                  border
                  border-white/40
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    mb-5
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
                    "
                  >

                    <Building2
                      size={30}
                      className="
                        text-primary
                      "
                    />

                  </div>

                  <div>

                    <h3
                      className="
                        text-4xl
                        font-black
                        text-primary
                      "
                    >

                      10+

                    </h3>

                    <p
                      className="
                        text-gray-500
                      "
                    >

                      Years Experience

                    </p>

                  </div>

                </div>

                <p
                  className="
                    text-gray-600
                    leading-8
                  "
                >

                  Delivering trusted
                  real estate solutions
                  with premium user
                  experience.

                </p>

              </div>

            </motion.div>

          </div>

        </section>

        {/* STATS */}

        <section
          className="
            py-24
            relative
            z-10
            -mt-20
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
                  (
                    item,
                    index
                  ) => (

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
                        bg-white/70
                        backdrop-blur-2xl
                        rounded-[32px]
                        p-8
                        border
                        border-white/50
                        shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                        hover:-translate-y-2
                        hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                        transition-all
                        duration-500
                        text-center
                      "
                    >

                      <h2
                        className="
                          text-5xl
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

                    </motion.div>

                  )
                )
              }

            </div>

          </div>

        </section>

        {/* STORY */}

        <section
          className="
            py-32
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
              gap-20
              items-center
            "
          >

            {/* IMAGE */}

            <motion.div

              initial={{
                opacity: 0,
                x: -80
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
                  inset-0
                  bg-primary/20
                  blur-[120px]
                  rounded-full
                "
              />

              <img

                src="
                  https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop
                "

                alt="Story"

                className="
                  relative
                  rounded-[40px]
                  h-[650px]
                  object-cover
                  w-full
                  shadow-[0_30px_100px_rgba(0,0,0,0.12)]
                "
              />

            </motion.div>

            {/* CONTENT */}

            <motion.div

              initial={{
                opacity: 0,
                x: 80
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
                  tracking-[5px]
                  text-primary
                  text-sm
                  font-semibold
                  mb-6
                "
              >

                Our Mission

              </p>

              <h2
                className="
                  text-5xl
                  md:text-6xl
                  font-black
                  leading-tight
                  text-[#0f172a]
                "
              >

                Building The Future
                Of Real Estate

              </h2>

              <p
                className="
                  text-gray-600
                  text-lg
                  leading-9
                  mt-10
                "
              >

                We are focused on
                transforming property
                discovery through
                modern technology,
                premium design and
                verified real estate
                experiences.

              </p>

              {/* VALUES */}

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-5
                  mt-12
                "
              >

                {
                  values.map(
                    (
                      item,
                      index
                    ) => (

                      <div

                        key={index}

                        className="
                          flex
                          items-center
                          gap-4
                          bg-white
                          rounded-2xl
                          p-5
                          shadow-sm
                          border
                        "
                      >

                        <CheckCircle2
                          size={24}
                          className="
                            text-primary
                            shrink-0
                          "
                        />

                        <span
                          className="
                            font-medium
                            text-gray-700
                          "
                        >

                          {item}

                        </span>

                      </div>

                    )
                  )
                }

              </div>

            </motion.div>

          </div>

        </section>

        {/* FEATURES */}

        <section
          className="
            py-32
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
                mb-24
              "
            >

              <p
                className="
                  uppercase
                  tracking-[5px]
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
                  text-5xl
                  md:text-7xl
                  font-black
                  leading-tight
                  text-[#0f172a]
                "
              >

                Luxury Real Estate
                Experience Built
                For Modern Users

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
                          y: 50
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
                          group
                          bg-white/70
                          backdrop-blur-2xl
                          rounded-[36px]
                          p-8
                          border
                          border-white/50
                          shadow-[0_15px_50px_rgba(0,0,0,0.06)]
                          hover:-translate-y-3
                          hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)]
                          transition-all
                          duration-500
                        "
                      >

                        <div
                          className="
                            w-20
                            h-20
                            rounded-[24px]
                            bg-gradient-to-br
                            from-primary/20
                            to-blue-500/10
                            flex
                            items-center
                            justify-center
                            mb-8
                            group-hover:scale-110
                            transition-all
                            duration-500
                          "
                        >

                          <Icon
                            size={34}
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
            py-32
            relative
            overflow-hidden
            bg-gradient-to-br
            from-[#050816]
            via-[#0f172a]
            to-black
            text-white
          "
        >

          {/* BLUR */}

          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-[700px]
              h-[400px]
              bg-primary/20
              blur-[140px]
              rounded-full
            "
          />

          <div
            className="
              relative
              max-w-5xl
              mx-auto
              px-5
              text-center
            "
          >

            <div
              className="
                inline-flex
                items-center
                gap-3
                bg-white/10
                border
                border-white/10
                rounded-full
                px-6
                py-3
                mb-10
              "
            >

              <Star
                size={18}
                className="
                  fill-yellow-400
                  text-yellow-400
                "
              />

              Trusted By Thousands

            </div>

            <h2
              className="
                text-5xl
                md:text-7xl
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
                mt-10
                leading-10
                max-w-3xl
                mx-auto
              "
            >

              Explore verified
              listings, luxury homes,
              premium apartments and
              commercial spaces with
              our next generation real
              estate platform.

            </p>

            <button

              onClick={() =>
                navigate(
                  "/properties"
                )
              }

              className="
                mt-14
                inline-flex
                items-center
                gap-3
                bg-white
                text-black
                px-10
                py-5
                rounded-2xl
                text-lg
                font-bold
                hover:scale-105
                hover:shadow-[0_20px_50px_rgba(255,255,255,0.15)]
                transition-all
                duration-500
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