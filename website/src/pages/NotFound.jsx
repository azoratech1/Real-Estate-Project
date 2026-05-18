import {
  Link
} from "react-router-dom";

function NotFound() {

  return (

    <div
      className="
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        justify-center
        px-5
      "
    >

      <div
        className="
          text-center
          max-w-2xl
        "
      >

        <h1
          className="
            text-[120px]
            md:text-[180px]
            font-bold
            leading-none
          "
        >

          404

        </h1>

        <h2
          className="
            text-4xl
            md:text-6xl
            font-bold
            mt-4
          "
        >

          Page Not Found

        </h2>

        <p
          className="
            text-white/70
            mt-6
            text-lg
            leading-relaxed
          "
        >

          The page you are looking for
          does not exist or may have
          been moved.

        </p>

        <Link
          to="/"
          className="
            inline-flex
            items-center
            justify-center
            mt-10
            h-[60px]
            px-8
            rounded-2xl
            bg-white
            text-black
            font-semibold
            hover:scale-105
            transition-all
          "
        >

          Back To Home

        </Link>

      </div>

    </div>
  );
}

export default NotFound;