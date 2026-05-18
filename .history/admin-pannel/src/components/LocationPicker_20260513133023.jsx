import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents
} from "react-leaflet";

import {
  useState,
  useEffect
} from "react";

import L from "leaflet";

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
MAP MARKER
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
  INITIAL POSITION
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

  return (

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
          attribution='&copy; OpenStreetMap contributors'
          url="
            https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
          "
        />

        <LocationMarker
          position={position}
          setPosition={setPosition}
        />

      </MapContainer>

    </div>
  );
}

export default LocationPicker;