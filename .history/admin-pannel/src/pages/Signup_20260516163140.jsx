import {
  useState
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  toast
} from "react-toastify";

import {
  User,
  Mail,
  Lock,
  ArrowRight,
  Building2
} from "lucide-react";

import API
  from "../services/api";

function Signup() {

  const navigate =
    useNavigate();

  /*
  =====================================
  STATES
  =====================================
  */

  const [loading,
    setLoading] =
    useState(false);

  const [formData,
    setFormData] =
    useState({

      name: "",

      email: "",

      password: ""
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
  SIGNUP
  =====================================
  */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        /*
        =====================================
        CREATE USER
        =====================================
        */

        const response =
          await API.post(

            "/auth/register",

            {

              ...formData,

              /*
              =====================================
              ALWAYS USER
              =====================================
              */

              role: "user"
            }
          );

        /*
        =====================================
        SUCCESS
        =====================================
        */

        toast.success(
          "Account created successfully"
        );

        /*
        =====================================
        AUTO LOGIN
        =====================================
        */

        localStorage.setItem(

          "token",

          response.data.token
        );

        localStorage.setItem(

          "user",

          JSON.stringify(
            response.data.user
          )
        );

        /*
        =====================================
        REDIRECT
        =====================================
        */

        navigate("/dashboard");

      } catch (error) {

        toast.error(

          error.response?.data
            ?.message ||

          "Signup failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div
      className="
        min-h-screen
        relative
        overflow-hidden
        bg-[#f8fafc]
        flex
        items-center
        justify-center
        px-5
        py-20
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
            https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2200&auto=format&fit=crop
          "

          alt="Luxury"

          className="
            w-full
            h-full
            object-cover
            opacity-10
          "
        />

      </div>

      {/* BLURS */}

      <div
        className="
          absolute
          top-10
          left-10
          w-[350px]
          h-[350px]
          bg-primary/20
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-10
          right-10
          w-[350px]
          h-[350px]
          bg-blue-500/10
          blur-[120px]
          rounded-full
        "
      />

      {/* CARD */}

      <div
        className="
          relative
          w-full
          max-w-[520px]
          bg-white/80
          backdrop-blur-2xl
          border
          border-white/50
          rounded-[40px]
          shadow-[0_30px_100px_rgba(0,0,0,0.12)]
          overflow-hidden
        "
      >

        {/* TOP */}

        <div
          className="
            bg-[#0f172a]
            text-white
            p-10
            text-center
            relative
            overflow-hidden
          "
        >

          {/* BG */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-primary/20
              to-transparent
            "
          />

          {/* ICON */}

          <div
            className="
              relative
              w-20
              h-20
              mx-auto
              rounded-3xl
              bg-white/10
              backdrop-blur-xl
              flex
              items-center
              justify-center
              mb-8
            "
          >

            <Building2 size={40} />

          </div>

          {/* TITLE */}

          <h1
            className="
              relative
              text-5xl
              font-black
              leading-tight
            "
          >

            Create
            Account

          </h1>

          <p
            className="
              relative
              text-gray-300
              text-lg
              mt-5
              leading-8
            "
          >

            Join our premium real
            estate platform and start
            exploring properties.

          </p>

        </div>

        {/* FORM */}

        <div
          className="
            p-8
            md:p-10
          "
        >

          <form
            onSubmit={handleSubmit}
            className="
              space-y-6
            "
          >

            {/* NAME */}

            <div
              className="
                relative
              "
            >

              <User
                size={22}
                className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input

                type="text"

                name="name"

                placeholder="
                  Full Name
                "

                value={formData.name}

                onChange={handleChange}

                required

                className="
                  w-full
                  h-[70px]
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  pl-14
                  pr-5
                  outline-none
                  focus:border-primary
                  transition-all
                "
              />

            </div>

            {/* EMAIL */}

            <div
              className="
                relative
              "
            >

              <Mail
                size={22}
                className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input

                type="email"

                name="email"

                placeholder="
                  Email Address
                "

                value={formData.email}

                onChange={handleChange}

                required

                className="
                  w-full
                  h-[70px]
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  pl-14
                  pr-5
                  outline-none
                  focus:border-primary
                  transition-all
                "
              />

            </div>

            {/* PASSWORD */}

            <div
              className="
                relative
              "
            >

              <Lock
                size={22}
                className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input

                type="password"

                name="password"

                placeholder="
                  Password
                "

                value={formData.password}

                onChange={handleChange}

                required

                className="
                  w-full
                  h-[70px]
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  pl-14
                  pr-5
                  outline-none
                  focus:border-primary
                  transition-all
                "
              />

            </div>

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
                hover:shadow-[0_20px_50px_rgba(15,23,42,0.3)]
                transition-all
                duration-500
              "
            >

              {
                loading

                ? "Creating Account..."

                : "Create Account"
              }

              <ArrowRight
                size={22}
              />

            </button>

          </form>

          {/* LOGIN LINK */}

          <p
            className="
              text-center
              text-gray-500
              mt-8
            "
          >

            Already have an account?

            <Link

              to="/login"

              className="
                text-primary
                font-bold
                ml-2
              "
            >

              Login

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;