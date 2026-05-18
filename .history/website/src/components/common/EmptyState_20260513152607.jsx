function EmptyState({

  title = "No Data Found",

  description =
    "There is nothing to display right now.",

  buttonText,

  onClick

}) {

  return (

    <div
      className="
        bg-white
        rounded-3xl
        shadow-sm
        border
        p-10
        text-center
      "
    >

      {/* ICON */}

      <div
        className="
          w-20
          h-20
          mx-auto
          rounded-full
          bg-gray-100
          flex
          items-center
          justify-center
          text-4xl
        "
      >

        📭

      </div>

      {/* TITLE */}

      <h2
        className="
          text-2xl
          font-bold
          mt-6
        "
      >

        {title}

      </h2>

      {/* DESCRIPTION */}

      <p
        className="
          text-gray-500
          mt-3
          max-w-[400px]
          mx-auto
          leading-7
        "
      >

        {description}

      </p>

      {/* BUTTON */}

      {
        buttonText && (

          <button

            onClick={onClick}

            className="
              mt-6
              bg-black
              text-white
              px-6
              py-3
              rounded-xl
              hover:bg-gray-800
              transition-all
            "
          >

            {buttonText}

          </button>

        )
      }

    </div>
  );
}

export default EmptyState;