import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Building2,
  Sparkles
} from "lucide-react";

import {
  motion
} from "framer-motion";

import {
  useState
} from "react";

import MainLayout
  from "../components/layout/MainLayout";

function ContactPage() {

  /*
  =====================================
  STATES
  =====================================
  */

  const [formData, setFormData] =
    useState({

      name: "",

      email: "",

      phone: "",

      subject: "",

      message: ""
    });

  /*
  =====================================
  HANDLE CHANGE
  =====================================
  */

  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value
      });
    };

  /*
  =====================================
  HANDLE SUBMIT
  =====================================
  */

  const handleSubmit =
    (e) => {

      e.preventDefault();

      console.log(formData);
    };

  /*
  =====================================
  CONTACT INFO
  =====================================
  */

  const contactInfo = [

    {
      icon: Phone,
      title: "Phone Number",
      value: "+91 98765 43210",
      description:
        "Call us anytime for property assistance."
    },

    {
      icon: Mail,
      title: "Email Address",
      value: "support@estatehub.com",
      description:
        "Send us your questions anytime."
    },

    {
      icon: MapPin,
      title: "Office Address",
      value: "Chandigarh, India",
      description:
        "Visit our premium real estate office."
    },

    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sat : 9AM - 8PM",
      description:
        "We are available throughout the week."
    }
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
            min-h-[80vh]
            flex
            items-center
            bg-[#050816]
            overflow-hidden
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
                https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2000&auto=format&fit=crop
              "

              alt="Contact"

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
              bottom-0
              right-0
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
              py-32
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-20
              items-center
            "
          >

            {/* LEFT */}

            <motion.div

              initial={{
                opacity: 0,
                y: 50
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

                Premium Real Estate Support

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

                  Let's Talk
                  About Your
                  Dream Property

                </span>

              </h1>

              {/* DESC */}

              <p
                className="
                  text-xl
                  text-gray-300
                  leading-10
                  mt-10
                  max-w-3xl
                "
              >

                Whether you are buying,
                renting or investing,
                our team is here to help
                you discover premium
                real estate opportunities
                with a modern experience.

              </p>

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

              <img

                src="
                  https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop
                "

                alt="Office"

                className="
                  rounded-[40px]
                  h-[650px]
                  object-cover
                  w-full
                  shadow-[0_40px_120px_rgba(0,0,0,0.4)]
                "
              />

              {/* FLOAT CARD */}

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

                      24/7

                    </h3>

                    <p
                      className="
                        text-gray-500
                      "
                    >

                      Customer Support

                    </p>

                  </div>

                </div>

                <p
                  className="
                    text-gray-600
                    leading-8
                  "
                >

                  Dedicated real estate
                  experts ready to help
                  you anytime.

                </p>

              </div>

            </motion.div>

          </div>

        </section>

        {/* CONTACT INFO */}

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
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-4
                gap-6
              "
            >

              {
                contactInfo.map(
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
                            mb-6
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
                          "
                        >

                          {item.title}

                        </h3>

                        <p
                          className="
                            text-primary
                            font-semibold
                            mt-4
                            text-lg
                          "
                        >

                          {item.value}

                        </p>

                        <p
                          className="
                            text-gray-500
                            mt-4
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

        {/* FORM SECTION */}

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
            "
          >

            {/* LEFT */}

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

                Contact Us

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

                We Would Love
                To Hear From You

              </h2>

              <p
                className="
                  text-gray-600
                  text-lg
                  leading-9
                  mt-10
                "
              >

                Reach out to our team
                for property inquiries,
                investment opportunities
                or premium real estate
                assistance.

              </p>

              {/* IMAGE */}

              <div
                className="
                  mt-12
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
                    https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop
                  "

                  alt="Luxury"

                  className="
                    relative
                    rounded-[40px]
                    h-[450px]
                    object-cover
                    w-full
                    shadow-[0_30px_100px_rgba(0,0,0,0.12)]
                  "
                />

              </div>

            </motion.div>

            {/* RIGHT */}

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

              className="
                bg-white/70
                backdrop-blur-2xl
                rounded-[40px]
                p-8
                md:p-12
                border
                border-white/50
                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              "
            >

              <form
                onSubmit={handleSubmit}
                className="
                  space-y-6
                "
              >

                {/* NAME */}

                <div>

                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      text-gray-700
                      mb-3
                    "
                  >

                    Full Name

                  </label>

                  <input

                    type="text"

                    name="name"

                    value={formData.name}

                    onChange={handleChange}

                    placeholder="
                      Enter your name
                    "

                    className="
                      w-full
                      h-[65px]
                      rounded-2xl
                      border
                      border-gray-200
                      px-5
                      outline-none
                      focus:border-primary
                      bg-white
                    "
                  />

                </div>

                {/* EMAIL */}

                <div>

                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      text-gray-700
                      mb-3
                    "
                  >

                    Email Address

                  </label>

                  <input

                    type="email"

                    name="email"

                    value={formData.email}

                    onChange={handleChange}

                    placeholder="
                      Enter your email
                    "

                    className="
                      w-full
                      h-[65px]
                      rounded-2xl
                      border
                      border-gray-200
                      px-5
                      outline-none
                      focus:border-primary
                      bg-white
                    "
                  />

                </div>

                {/* PHONE */}

                <div>

                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      text-gray-700
                      mb-3
                    "
                  >

                    Phone Number

                  </label>

                  <input

                    type="text"

                    name="phone"

                    value={formData.phone}

                    onChange={handleChange}

                    placeholder="
                      Enter phone number
                    "

                    className="
                      w-full
                      h-[65px]
                      rounded-2xl
                      border
                      border-gray-200
                      px-5
                      outline-none
                      focus:border-primary
                      bg-white
                    "
                  />

                </div>

                {/* SUBJECT */}

                <div>

                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      text-gray-700
                      mb-3
                    "
                  >

                    Subject

                  </label>

                  <input

                    type="text"

                    name="subject"

                    value={formData.subject}

                    onChange={handleChange}

                    placeholder="
                      Enter subject
                    "

                    className="
                      w-full
                      h-[65px]
                      rounded-2xl
                      border
                      border-gray-200
                      px-5
                      outline-none
                      focus:border-primary
                      bg-white
                    "
                  />

                </div>

                {/* MESSAGE */}

                <div>

                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      text-gray-700
                      mb-3
                    "
                  >

                    Message

                  </label>

                  <textarea

                    rows="6"

                    name="message"

                    value={formData.message}

                    onChange={handleChange}

                    placeholder="
                      Write your message...
                    "

                    className="
                      w-full
                      rounded-2xl
                      border
                      border-gray-200
                      px-5
                      py-5
                      outline-none
                      focus:border-primary
                      resize-none
                      bg-white
                    "
                  />

                </div>

                {/* BUTTON */}

                <button
                  type="submit"
                  className="
                    w-full
                    h-[70px]
                    rounded-2xl
                    bg-black
                    text-white
                    font-bold
                    text-lg
                    flex
                    items-center
                    justify-center
                    gap-3
                    hover:scale-[1.02]
                    transition-all
                    duration-500
                    shadow-xl
                  "
                >

                  Send Message

                  <Send size={22} />

                </button>

              </form>

            </motion.div>

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

            <h2
              className="
                text-5xl
                md:text-7xl
                font-black
                leading-tight
              "
            >

              Start Your Real
              Estate Journey
              Today

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

              Discover luxury homes,
              premium apartments and
              verified commercial
              properties with our
              modern real estate
              platform.

            </p>

            <button
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

export default ContactPage;