import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap
} from "react-leaflet";

import {
  useEffect,
  useState
} from "react";

import L from "leaflet";

import axios from "axios";
import debounce from "lodash/debounce";
/*
=====================================
FIX MARKER ICON
=====================================
*/

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({

  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
});

/*
=====================================
MOVE MAP
=====================================
*/

function ChangeMapView({
  center
}) {

  const map = useMap();

  useEffect(() => {

    map.setView(center, 14);

  }, [center]);

  return null;
}

/*
=====================================
MAP CLICK MARKER
=====================================
*/

function LocationMarker({
  position,
  setPosition
}) {

  useMapEvents({

    click(e) {

      setPosition([
        e.latlng.lat,
        e.latlng.lng
      ]);
    }
  });

  return (
    <Marker
      position={position}
    />
  );
}

function LocationPicker({
  coordinates,
  setCoordinates
}) {

  /*
  =====================================
  POSITION
  =====================================
  */

  const [position, setPosition] =
    useState(

      coordinates

        ? [
            coordinates.latitude,
            coordinates.longitude
          ]

        : [
            28.6139,
            77.2090
          ]
    );

  /*
  =====================================
  SEARCH
  =====================================
  */

  const [search, setSearch] =
    useState("");

  const [results, setResults] =
    useState([]);

  /*
  =====================================
  UPDATE COORDINATES
  =====================================
  */

  useEffect(() => {

    setCoordinates({

      latitude:
        position[0],

      longitude:
        position[1]
    });

  }, [position]);

  /*
  =====================================
  SEARCH LOCATION
  =====================================
  */

//   const searchLocation =
//     async (value) => {

//       setSearch(value);

//       if (value.length < 3) {

//         setResults([]);

//         return;
//       }

//       try {

//         const response =
//            await axios.get(

//     `http://localhost:5000/api/maps/search?query=${value}`
//   );

//         setResults(response.data);

//       } catch (error) {

//         console.log(error);
//       }
//     };

  /*
  =====================================
  SELECT LOCATION
  =====================================
  */

  const selectLocation =
    (place) => {

      const lat =
        parseFloat(place.lat);

      const lon =
        parseFloat(place.lon);

      setPosition([
        lat,
        lon
      ]);

      setSearch(
        place.display_name
      );

      setResults([]);
    };

  return (

    <div>

      {/* SEARCH */}

      <div className="relative mb-5">

        <input

          type="text"

          placeholder="
            Search location...
          "

          value={search}

          onChange={(e) =>
            searchLocation(
              e.target.value
            )
          }

          className="
            w-full
            border
            p-4
            rounded-2xl
          "
        />

        {/* RESULTS */}

        {
          results.length > 0 && (

            <div
              className="
                absolute
                z-[999]
                w-full
                bg-white
                border
                rounded-2xl
                mt-2
                max-h-[300px]
                overflow-y-auto
                shadow-lg
              "
            >

              {
                results.map(
                  (place, index) => (

                    <button

                      key={index}

                      type="button"

                      onClick={() =>
                        selectLocation(
                          place
                        )
                      }

                      className="
                        w-full
                        text-left
                        p-4
                        border-b
                        hover:bg-gray-100
                      "
                    >

                      {
                        place.display_name
                      }

                    </button>

                  )
                )
              }

            </div>

          )
        }

      </div>

      {/* MAP */}

      <div
        className="
          overflow-hidden
          rounded-2xl
          border
        "
      >

        <MapContainer

          center={position}

          zoom={13}

          style={{
            height: "400px",
            width: "100%"
          }}
        >

          <TileLayer
            attribution="
              &copy; OpenStreetMap contributors
            "
            url="
              https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
            "
          />

          <ChangeMapView
            center={position}
          />

          <LocationMarker
            position={position}
            setPosition={setPosition}
          />

        </MapContainer>

      </div>

    </div>
  );
}

export default LocationPicker;