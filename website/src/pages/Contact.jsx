import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  MessageSquare,
  Headphones,
  Building2,
  Globe2
} from "lucide-react";

import {
  motion
} from "framer-motion";

import {
  useState
} from "react";
import {
  toast
} from "react-toastify";
import MainLayout
  from "../components/layout/MainLayout"
  
  import API from "../services/api"

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

      message: ""
    });
const [loading,
  setLoading] =
  useState(false);
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
  SUBMIT
  =====================================
  */
/*
=====================================
SUBMIT
=====================================
*/

const handleSubmit =
  async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      /*
      =====================================
      API CALL
      =====================================
      */

      const response =
        await API.post(

          "/contact/enquiry",

          formData
        );

      /*
      =====================================
      SUCCESS
      =====================================
      */

      toast.success(

        response.data.message
      );

      /*
      =====================================
      RESET
      =====================================
      */

      setFormData({

        name: "",

        email: "",

        phone: "",

        message: ""
      });

    } catch (error) {

      toast.error(

        error.response?.data
          ?.message ||

        "Failed to send message"
      );

    } finally {

      setLoading(false);
    }
  };

  /*
  =====================================
  CONTACT CARDS
  =====================================
  */

  const cards = [

    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
      desc:
        "Talk directly with our real estate experts."
    },

    {
      icon: Mail,
      title: "Email Us",
      value: "support@estatehub.com",
      desc:
        "Send us your questions anytime."
    },

    {
      icon: MapPin,
      title: "Visit Office",
      value: "Chandigarh, India",
      desc:
        "Experience luxury property consulting."
    }
  ];

  return (

    <MainLayout>

      <div
        className="
          bg-[#f8fafc]
          overflow-hidden
        "
      >

        {/* HERO */}

        <section
          className="
            relative
            overflow-hidden
            bg-white
          "
        >

          {/* TOP GRADIENT */}

          <div
            className="
              absolute
              top-0
              left-0
              right-0
              h-[500px]
              bg-gradient-to-br
              from-primary/10
              via-blue-500/5
              to-transparent
            "
          />

          {/* BLUR */}

          <div
            className="
              absolute
              top-20
              left-1/2
              -translate-x-1/2
              w-[700px]
              h-[700px]
              bg-primary/10
              blur-[150px]
              rounded-full
            "
          />

          <div
            className="
              relative
              max-w-7xl
              mx-auto
              px-5
              pt-16
              pb-28
            "
          >

            {/* HEADER */}

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

              className="
                text-center
                max-w-5xl
                mx-auto
              "
            >

              {/* MINI BADGE */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-white
                  shadow-lg
                  border
                  border-gray-100
                  rounded-full
                  px-6
                  py-3
                  mb-8
                "
              >

                <MessageSquare
                  size={18}
                  className="
                    text-primary
                  "
                />

                <span
                  className="
                    text-sm
                    font-semibold
                    text-gray-700
                  "
                >

                  Contact Our Team

                </span>

              </div>

              {/* TITLE */}

              <h1
                className="
                  text-6xl
                  md:text-8xl
                  font-black
                  tracking-[-4px]
                  leading-[0.95]
                  text-[#0f172a]
                "
              >

                We Help You
                Find The Perfect
                Property

              </h1>

              {/* DESC */}

              <p
                className="
                  text-xl
                  md:text-2xl
                  text-gray-600
                  leading-10
                  mt-10
                  max-w-4xl
                  mx-auto
                "
              >

                Connect with our luxury
                real estate specialists
                for property buying,
                selling, renting and
                investment opportunities.

              </p>

            </motion.div>

            {/* FLOATING CONTACT BAR */}

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
                duration: 1,
                delay: 0.3
              }}

              className="
                mt-20
                bg-white/80
                backdrop-blur-2xl
                border
                border-white/50
                rounded-[40px]
                p-8
                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              "
            >

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-3
                  gap-8
                "
              >

                {
                  cards.map(
                    (
                      item,
                      index
                    ) => {

                      const Icon =
                        item.icon;

                      return (

                        <div

                          key={index}

                          className="
                            flex
                            gap-5
                            items-start
                          "
                        >

                          {/* ICON */}

                          <div
                            className="
                              w-16
                              h-16
                              rounded-2xl
                              bg-primary/10
                              flex
                              items-center
                              justify-center
                              shrink-0
                            "
                          >

                            <Icon
                              size={28}
                              className="
                                text-primary
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
                              "
                            >

                              {item.title}

                            </h3>

                            <p
                              className="
                                text-primary
                                font-semibold
                                mt-2
                                text-lg
                              "
                            >

                              {item.value}

                            </p>

                            <p
                              className="
                                text-gray-500
                                mt-3
                                leading-7
                              "
                            >

                              {item.desc}

                            </p>

                          </div>

                        </div>

                      );
                    }
                  )
                }

              </div>

            </motion.div>

          </div>

        </section>

        {/* MAIN SECTION */}

        <section
          className="
            pb-32
          "
        >

          <div
            className="
              max-w-7xl
              mx-auto
              px-5
              grid
              grid-cols-1
              lg:grid-cols-[1fr_520px]
              gap-14
              items-start
            "
          >

            {/* LEFT SIDE */}

            <div
              className="
                space-y-10
              "
            >

              {/* CARD */}

              <motion.div

                initial={{
                  opacity: 0,
                  y: 50
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  duration: 0.7
                }}

                className="
                  relative
                  overflow-hidden
                  rounded-[40px]
                  min-h-[650px]
                "
              >

                <img

                  src="
                    https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1800&auto=format&fit=crop
                  "

                  alt="Luxury"

                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/40
                    to-transparent
                  "
                />

                {/* CONTENT */}

                <div
                  className="
                    relative
                    h-full
                    flex
                    flex-col
                    justify-end
                    p-10
                    text-white
                  "
                >

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-3
                      bg-white/10
                      backdrop-blur-xl
                      border
                      border-white/10
                      rounded-full
                      px-5
                      py-3
                      w-fit
                      mb-8
                    "
                  >

                    <Building2
                      size={18}
                    />

                    Luxury Real Estate

                  </div>

                  <h2
                    className="
                      text-5xl
                      font-black
                      leading-tight
                      max-w-2xl
                    "
                  >

                    Premium Property
                    Experience Tailored
                    For You

                  </h2>

                  <p
                    className="
                      text-gray-300
                      text-lg
                      leading-9
                      mt-8
                      max-w-2xl
                    "
                  >

                    Explore verified
                    homes, luxury villas
                    and commercial spaces
                    with our next
                    generation property
                    platform.

                  </p>

                </div>

              </motion.div>

              {/* SMALL CARDS */}

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-8
                "
              >

                {/* CARD */}

                <div
                  className="
                    bg-white
                    rounded-[32px]
                    p-8
                    shadow-sm
                    border
                    border-gray-100
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

                    <Headphones
                      size={30}
                      className="
                        text-primary
                      "
                    />

                  </div>

                  <h3
                    className="
                      text-3xl
                      font-black
                      text-[#0f172a]
                    "
                  >

                    Dedicated Support

                  </h3>

                  <p
                    className="
                      text-gray-600
                      mt-5
                      leading-8
                    "
                  >

                    Our team is available
                    to guide you
                    throughout your real
                    estate journey.

                  </p>

                </div>

                {/* CARD */}

                <div
                  className="
                    bg-white
                    rounded-[32px]
                    p-8
                    shadow-sm
                    border
                    border-gray-100
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

                    <Globe2
                      size={30}
                      className="
                        text-primary
                      "
                    />

                  </div>

                  <h3
                    className="
                      text-3xl
                      font-black
                      text-[#0f172a]
                    "
                  >

                    Pan India Presence

                  </h3>

                  <p
                    className="
                      text-gray-600
                      mt-5
                      leading-8
                    "
                  >

                    Discover properties
                    across premium cities
                    and luxury locations
                    in India.

                  </p>

                </div>

              </div>

            </div>

            {/* FORM */}

            <motion.div

              initial={{
                opacity: 0,
                y: 50
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.7
              }}

              className="
                sticky
                top-28
                bg-white
                rounded-[40px]
                p-8
                md:p-10
                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                border
                border-gray-100
              "
            >

              {/* HEADER */}

              <div
                className="
                  mb-10
                "
              >

                <h2
                  className="
                    text-4xl
                    font-black
                    text-[#0f172a]
                  "
                >

                  Send A Message

                </h2>

                <p
                  className="
                    text-gray-500
                    mt-4
                    leading-8
                  "
                >

                  Fill out the form and
                  our experts will
                  connect with you soon.

                </p>

              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="
                  space-y-6
                "
              >

                {/* NAME */}

                <input

                  type="text"

                  name="name"
                  required
                  value={formData.name}

                  onChange={handleChange}

                  placeholder="
                    Full Name
                  "

                  className="
                    w-full
                    h-[68px]
                    rounded-2xl
                    border
                    border-gray-200
                    px-5
                    outline-none
                    focus:border-primary
                  "
                />

                {/* EMAIL */}

                <input

                  type="email"

                  name="email"
                 required
                  value={formData.email}

                  onChange={handleChange}

                  placeholder="
                    Email Address
                  "

                  className="
                    w-full
                    h-[68px]
                    rounded-2xl
                    border
                    border-gray-200
                    px-5
                    outline-none
                    focus:border-primary
                  "
                />

                {/* PHONE */}

                <input

                  type="text"

                  name="phone"
                  required
                  value={formData.phone}

                  onChange={handleChange}

                  placeholder="
                    Phone Number
                  "

                  className="
                    w-full
                    h-[68px]
                    rounded-2xl
                    border
                    border-gray-200
                    px-5
                    outline-none
                    focus:border-primary
                  "
                />

                {/* MESSAGE */}

                <textarea

                  rows="6"

                  name="message"
                  required
                  value={formData.message}

                  onChange={handleChange}

                  placeholder="
                    Tell us about your requirement...
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
                  "
                />

                {/* BUTTON */}

                <button
                  type="submit"
                    disabled={loading}
                  className="
                    w-full
                    h-[72px]
                    rounded-2xl
                    bg-[#0f172a]
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

                 {
  loading

    ? "Sending..."

    : "Send Message"
}

                  <Send size={22} />

                </button>

              </form>

            </motion.div>

          </div>

        </section>

        {/* CTA */}

        <section
          className="
            py-28
            bg-[#0f172a]
            text-white
            relative
            overflow-hidden
          "
        >

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

              Let's Build Your
              Property Future

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

              Discover premium homes,
              luxury apartments and
              investment opportunities
              with our modern real
              estate platform.

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

export default ContactPage;