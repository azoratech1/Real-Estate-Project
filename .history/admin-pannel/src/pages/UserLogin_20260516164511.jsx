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
  Mail,
  Lock,
  ArrowRight,
  Building2
} from "lucide-react";

import API
  from "../services/api";

function UserLogin() {

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
  LOGIN
  =====================================
  */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const response =
          await API.post(

            "/auth/login",

            formData
          );

        /*
        =====================================
        SAVE TOKEN
        =====================================
        */

        localStorage.setItem(

          "token",

          response.data.token
        );

        /*
        =====================================
        SAVE USER
        =====================================
        */

        localStorage.setItem(

          "user",

          JSON.stringify(
            response.data.user
          )
        );

        /*
        =====================================
        SUCCESS
        =====================================
        */

        toast.success(
          "Login Successful"
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

          "Login failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div
      className="
        min-h-screen
        bg-[#f8fafc]
        flex
        items-center
        justify-center
        px-5
        py-10
        relative
        overflow-hidden
      "
    >

      {/* BLURS */}

      <div
        className="
          absolute
          top-0
          left-0
          w-[300px]
          h-[300px]
          bg-primary/20
          blur-[100px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[300px]
          h-[300px]
          bg-blue-500/10
          blur-[100px]
          rounded-full
        "
      />

      {/* CARD */}

      <div
        className="
          relative
          w-full
          max-w-[430px]
          bg-white/80
          backdrop-blur-2xl
          border
          border-white/50
          rounded-[32px]
          shadow-[0_20px_80px_rgba(0,0,0,0.10)]
          overflow-hidden
        "
      >

        {/* TOP */}

        <div
          className="
            bg-[#0f172a]
            px-8
            py-8
            text-center
            text-white
            relative
          "
        >

          {/* ICON */}

          <div
            className="
              w-16
              h-16
              mx-auto
              rounded-2xl
              bg-white/10
              flex
              items-center
              justify-center
              mb-5
            "
          >

            <Building2 size={30} />

          </div>

          {/* TITLE */}

          <h1
            className="
              text-4xl
              font-black
            "
          >

            Welcome Back

          </h1>

          <p
            className="
              text-gray-300
              text-sm
              mt-3
            "
          >

            Login to continue to
            your real estate dashboard.

          </p>

        </div>

        {/* FORM */}

        <div
          className="
            p-6
            md:p-8
          "
        >

          <form
            onSubmit={handleSubmit}
            className="
              space-y-4
            "
          >

            {/* EMAIL */}

            <div
              className="
                relative
              "
            >

              <Mail
                size={20}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input

                type="email"

                name="email"

                placeholder="Email Address"

                value={formData.email}

                onChange={handleChange}

                required

                className="
                  w-full
                  h-[58px]
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  pl-12
                  pr-4
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
                size={20}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input

                type="password"

                name="password"

                placeholder="Password"

                value={formData.password}

                onChange={handleChange}

                required

                className="
                  w-full
                  h-[58px]
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  pl-12
                  pr-4
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
                h-[60px]
                rounded-2xl
                bg-[#0f172a]
                text-white
                font-bold
                flex
                items-center
                justify-center
                gap-3
                hover:scale-[1.01]
                hover:shadow-[0_20px_40px_rgba(15,23,42,0.25)]
                transition-all
                duration-300
                mt-2
              "
            >

              {
                loading

                ? "Logging in..."

                : "Login"
              }

              <ArrowRight size={20} />

            </button>

          </form>

          {/* SIGNUP */}

          <p
            className="
              text-center
              text-gray-500
              text-sm
              mt-6
            "
          >

            Don&apos;t have an account?

            <Link

              to="/signup"

              className="
                text-primary
                font-semibold
                ml-2
              "
            >

              Create Account

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default UserLogin;