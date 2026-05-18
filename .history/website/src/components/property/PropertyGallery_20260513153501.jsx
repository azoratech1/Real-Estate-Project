import {
  useState
} from "react";

function PropertyGallery({
  images = []
}) {

  /*
  =====================================
  ACTIVE IMAGE
  =====================================
  */

  const [
    activeImage,
    setActiveImage
  ] = useState(0);

  return (

    <div>

      {/* MAIN IMAGE */}

      <div
        className="
          overflow-hidden
          rounded-3xl
        "
      >

        <img

          src={

            images?.[
              activeImage
            ]?.url ||

            "https://placehold.co/1200x700?text=No+Image"

          }

          alt="Property"

          className="
            w-full
            h-[500px]
            object-cover
          "
        />

      </div>

      {/* THUMBNAILS */}

      {
        images.length > 1 && (

          <div
            className="
              grid
              grid-cols-4
              md:grid-cols-6
              gap-4
              mt-5
            "
          >

            {
              images.map(
                (
                  image,
                  index
                ) => (

                  <button

                    key={index}

                    onClick={() =>
                      setActiveImage(
                        index
                      )
                    }

                    className={`
                      
                      overflow-hidden
                      rounded-2xl
                      border-2
                      
                      ${
                        activeImage ===
                        index

                          ? "border-black"

                          : "border-transparent"
                      }
                    `}
                  >

                    <img

                      src={image.url}

                      alt="Thumbnail"

                      className="
                        w-full
                        h-[90px]
                        object-cover
                      "
                    />

                  </button>

                )
              )
            }

          </div>

        )
      }

    </div>
  );
}

export default PropertyGallery;