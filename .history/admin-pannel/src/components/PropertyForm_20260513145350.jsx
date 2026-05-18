import { useState ,useEffect} from "react";

import API from "../services/api";
import LocationPicker from "./LocationPicker";
function PropertyForm({
  onSubmit,
  loading,
  initialData
}) {

  

  const [formData, setFormData] = useState({

    title: initialData?.title || "",

    description:
      initialData?.description || "",

    shortDescription:
      initialData?.shortDescription || "",

    propertyType:
      initialData?.propertyType || "",

    listingType:
      initialData?.listingType || "",

  state:
  initialData?.state?._id || "",

city:
  initialData?.city?._id || "",

    locality:
      initialData?.locality || "",

    address:
      initialData?.address || "",

    pincode:
      initialData?.pincode || "",

    price:
      initialData?.price || "",

    maintenance:
      initialData?.maintenance || "",

    securityDeposit:
      initialData?.securityDeposit || "",

    bedrooms:
      initialData?.bedrooms || "",

    bathrooms:
      initialData?.bathrooms || "",

    balconies:
      initialData?.balconies || "",

    furnishing:
      initialData?.furnishing || "",

    builtUpArea:
      initialData?.builtUpArea || "",

    carpetArea:
      initialData?.carpetArea || "",

    contactName:
      initialData?.contactName || "",

    contactNumber:
      initialData?.contactNumber || "",

    featured:
      initialData?.featured || false
  });

  /*
  =====================================
  AMENITIES
  =====================================
  */

  const amenitiesList = [
    "Parking",
    "Gym",
    "Swimming Pool",
    "Lift",
    "Power Backup",
    "Security",
    "Garden",
    "Clubhouse",
    "Wifi"
  ];

  const [selectedAmenities, setSelectedAmenities] =
    useState(
      initialData?.amenities || []
    );

  /*
  =====================================
  IMAGES
  =====================================
  */

  const [images, setImages] =
    useState([]);
    const [
  coordinates,
  setCoordinates
] = useState(

  initialData?.location
    ?.coordinates

    ? {

        latitude:
          initialData.location
            .coordinates[1],

        longitude:
          initialData.location
            .coordinates[0]
      }

    : null
);
/*
=====================================
LOCATION STATES
=====================================
*/

const [states, setStates] =
  useState([]);

const [cities, setCities] =
  useState([]);

/*
=====================================
FETCH STATES
=====================================
*/

const fetchStates =
  async () => {

    try {

      const response =
        await API.get(
          "/locations/states"
        );

      setStates(
        response.data.states
      );

    } catch (error) {

      console.log(error);

    }
  };

/*
=====================================
FETCH CITIES
=====================================
*/

const fetchCities =
  async (stateId) => {

    try {

      const response =
        await API.get(
          `/locations/cities/${stateId}`
        );

      setCities(
        response.data.cities
      );

    } catch (error) {

      console.log(error);

    }
  };

  /*
  =====================================
  HANDLE CHANGE
  =====================================
  */

  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked
    } = e.target;

   /*
=====================================
RESET CITY WHEN STATE CHANGES
=====================================
*/

if (name === "state") {

  setFormData({

    ...formData,

    state: value,

    city: ""

  });

  fetchCities(value);

  return;
}

setFormData({
  ...formData,
  [name]:
    type === "checkbox"
      ? checked
      : value
});
  };

  /*
  =====================================
  HANDLE IMAGES
  =====================================
  */

  const handleImages = (e) => {

    const files = Array.from(
      e.target.files
    );

    if (files.length > 4) {
      alert(
        "Maximum 4 images allowed"
      );
      return;
    }

    setImages(files);
  };

  /*
  =====================================
  HANDLE AMENITIES
  =====================================
  */

  const toggleAmenity = (amenity) => {

    if (
      selectedAmenities.includes(
        amenity
      )
    ) {

      setSelectedAmenities(
        selectedAmenities.filter(
          (item) =>
            item !== amenity
        )
      );

    } else {

      setSelectedAmenities([
        ...selectedAmenities,
        amenity
      ]);

    }
  };

  /*
  =====================================
  SUBMIT FORM
  =====================================
  */

  const handleSubmit = (e) => {

    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach(
      (key) => {

        data.append(
          key,
          formData[key]
        );

      }
    );

    /*
    =====================================
    APPEND AMENITIES
    =====================================
    */

    selectedAmenities.forEach(
      (amenity) => {

        data.append(
          "amenities",
          amenity
        );

      }
    );

    /*
    =====================================
    APPEND IMAGES
    =====================================
    */

    images.forEach((image) => {

      data.append(
        "images",
        image
      );

    });
data.append(

  "location",

  JSON.stringify({

    type: "Point",

    coordinates: [

      77.2090, // longitude

      28.6139  // latitude
    ]
  })
);

    onSubmit(data);
  };
/*
=====================================
LOAD STATES
=====================================
*/

useEffect(() => {

  fetchStates();

}, []);
/*
=====================================
UPDATE FORM IN EDIT MODE
=====================================
*/

useEffect(() => {

  if (initialData) {

    setFormData({

      title:
        initialData.title || "",

      description:
        initialData.description || "",

      shortDescription:
        initialData.shortDescription || "",

      propertyType:
        initialData.propertyType || "",

      listingType:
        initialData.listingType || "",

      state:
        initialData.state?._id || "",

      city:
        initialData.city?._id || "",

      locality:
        initialData.locality || "",

      address:
        initialData.address || "",

      pincode:
        initialData.pincode || "",

      price:
        initialData.price || "",

      maintenance:
        initialData.maintenance || "",

      securityDeposit:
        initialData.securityDeposit || "",

      bedrooms:
        initialData.bedrooms || "",

      bathrooms:
        initialData.bathrooms || "",

      balconies:
        initialData.balconies || "",

      furnishing:
        initialData.furnishing || "",

      builtUpArea:
        initialData.builtUpArea || "",

      carpetArea:
        initialData.carpetArea || "",

      contactName:
        initialData.contactName || "",

      contactNumber:
        initialData.contactNumber || "",

      featured:
        initialData.featured || false

    });

    setSelectedAmenities(
      initialData.amenities || []
    );

  }

}, [initialData]);
/*
=====================================
LOAD CITIES IN EDIT MODE
=====================================
*/

useEffect(() => {

  if (formData.state) {

    fetchCities(
      formData.state
    );

  }

}, [formData.state]);
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border p-5 md:p-8 space-y-8"
    >

      {/* BASIC INFO */}

      <div>

        <h2 className="text-2xl font-bold mb-5">
          Basic Information
        </h2>

        <div className="space-y-5">

          <input
            type="text"
            name="title"
            placeholder="Property Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <textarea
            name="shortDescription"
            placeholder="Short Description"
            value={
              formData.shortDescription
            }
            onChange={handleChange}
            rows="2"
            className="w-full border p-4 rounded-xl"
          />

          <textarea
            name="description"
            placeholder="Full Description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full border p-4 rounded-xl"
          />

        </div>

      </div>

      {/* PROPERTY DETAILS */}

      <div>

        <h2 className="text-2xl font-bold mb-5">
          Property Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          >

            <option value="">
              Property Type
            </option>

            <option>
              Apartment
            </option>

            <option>
              Villa
            </option>

            <option>
              Plot
            </option>

            <option>
              Office
            </option>

          </select>

          <select
            name="listingType"
            value={formData.listingType}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          >

            <option value="">
              Listing Type
            </option>

            <option>
              Sale
            </option>

            <option>
              Rent
            </option>

          </select>

        </div>

      </div>

      {/* LOCATION */}

      <div>

        <h2 className="text-2xl font-bold mb-5">
          Location
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* STATE */}

<div>

  <label className="block mb-2 font-medium">
    State
  </label>

  <select
    name="state"
    value={formData.state}
    onChange={handleChange}
    className="border p-4 rounded-xl w-full"
  >

    <option value="">
      Select State
    </option>

    {
      states.map((state) => (

        <option
          key={state._id}
          value={state._id}
        >

          {state.name}

        </option>

      ))
    }

  </select>

</div>

{/* CITY */}

<div>

  <label className="block mb-2 font-medium">
    City
  </label>

  <select
    name="city"
    value={formData.city}
    onChange={handleChange}
    disabled={!formData.state}
    className="border p-4 rounded-xl w-full"
  >

    <option value="">
      Select City
    </option>

    {
      cities.map((city) => (

        <option
          key={city._id}
          value={city._id}
        >

          {city.name}

        </option>

      ))
    }

  </select>

</div>
          <input
            type="text"
            name="locality"
            placeholder="Locality"
            value={formData.locality}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

        </div>

        <textarea
          name="address"
          placeholder="Full Address"
          value={formData.address}
          onChange={handleChange}
          rows="3"
          className="w-full border p-4 rounded-xl mt-5"
        />

      </div>

      {/* PRICE */}

      <div>

        <h2 className="text-2xl font-bold mb-5">
          Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="number"
            name="maintenance"
            placeholder="Maintenance"
            value={formData.maintenance}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="number"
            name="securityDeposit"
            placeholder="Security Deposit"
            value={
              formData.securityDeposit
            }
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

        </div>

      </div>

      {/* PROPERTY FEATURES */}

      <div>

        <h2 className="text-2xl font-bold mb-5">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

          <div>

  <label className="block mb-2 font-medium">
    Bedrooms
  </label>

  <input
    type="number"
    name="bedrooms"
    placeholder="Enter bedrooms"
    value={formData.bedrooms}
    onChange={handleChange}
    className="
      border
      p-4
      rounded-xl
      w-full
      focus:outline-none
      focus:ring-2
      focus:ring-black
    "
  />

</div>

<div>

  <label className="block mb-2 font-medium">
    Bathrooms
  </label>

  <input
    type="number"
    name="bathrooms"
    placeholder="Enter bathrooms"
    value={formData.bathrooms}
    onChange={handleChange}
    className="
      border
      p-4
      rounded-xl
      w-full
      focus:outline-none
      focus:ring-2
      focus:ring-black
    "
  />

</div>

<div>

  <label className="block mb-2 font-medium">
    Balconies
  </label>

  <input
    type="number"
    name="balconies"
    placeholder="Enter balconies"
    value={formData.balconies}
    onChange={handleChange}
    className="
      border
      p-4
      rounded-xl
      w-full
      focus:outline-none
      focus:ring-2
      focus:ring-black
    "
  />

</div>

         <div>

  <label className="block mb-2 font-medium">
    Furnishing Status
  </label>

  <select
    name="furnishing"
    value={formData.furnishing}
    onChange={handleChange}
    className="border p-4 rounded-xl w-full"
  >

    <option value="">
      Select Furnishing
    </option>

    <option value="Furnished">
      Furnished
    </option>

    <option value="Semi-Furnished">
      Semi-Furnished
    </option>

    <option value="Unfurnished">
      Unfurnished
    </option>

  </select>

</div>
        </div>

      </div>

      {/* AMENITIES */}

      <div>

        <h2 className="text-2xl font-bold mb-5">
          Amenities
        </h2>

        <div className="flex flex-wrap gap-3">

          {amenitiesList.map(
            (amenity) => (

              <button
                type="button"
                key={amenity}
                onClick={() =>
                  toggleAmenity(
                    amenity
                  )
                }
                className={`
                  px-4 py-2 rounded-full border transition-all
                  
                  ${
                    selectedAmenities.includes(
                      amenity
                    )
                      ? "bg-black text-white"
                      : "bg-white"
                  }
                `}
              >

                {amenity}

              </button>

            )
          )}

        </div>

      </div>

      {/* CONTACT */}

      <div>

        <h2 className="text-2xl font-bold mb-5">
          Contact Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <input
            type="text"
            name="contactName"
            placeholder="Contact Name"
            value={formData.contactName}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

        </div>

      </div>

      {/* IMAGES */}

      {/* <div>

        <h2 className="text-2xl font-bold mb-5">
          Property Images
        </h2>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImages}
          className="w-full border p-4 rounded-xl"
        />

        <p className="text-sm text-gray-500 mt-2">
          Maximum 4 images allowed
        </p>

      </div> */}

      {/* IMAGE PREVIEW */}

      {/* {
        images.length > 0 && (

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {images.map(
              (image, index) => (

                <img
                  key={index}
                  src={URL.createObjectURL(
                    image
                  )}
                  alt="Preview"
                  className="w-full h-[150px] object-cover rounded-xl"
                />

              )
            )}

          </div>

        )
      } */}
{/* EXISTING IMAGES */}

{/* IMAGES */}

<div>

  <div className="flex items-center justify-between mb-5">

    <div>

      <h2 className="text-2xl font-bold">
        Property Images
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Upload maximum 4 images
      </p>

    </div>

  </div>

  {/* FILE INPUT */}

  <label className="border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-black transition-all bg-gray-50">

    <div className="text-center">

      <h3 className="text-xl font-semibold mb-2">
        Upload Property Images
      </h3>

      <p className="text-gray-500">
        Click here to select images
      </p>

    </div>

    <input
      type="file"
      multiple
      accept="image/*"
      onChange={handleImages}
      className="hidden"
    />

  </label>

</div>

{/* EXISTING IMAGES */}

{
  initialData?.images?.length > 0 && (

    <div>

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-2xl font-bold">
          Existing Images
        </h2>

        <p className="text-sm text-gray-500">
          Uploading new images will replace these
        </p>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {
          initialData.images.map(
            (image, index) => (

             <div
  key={index}
  className="relative group"
>

  <img
    src={image.url}
    alt="Property"
    className="w-full h-[180px] object-cover rounded-2xl border"
  />

  {/* OVERLAY */}

  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all rounded-2xl flex flex-col items-center justify-center gap-3">

    <p className="text-white font-medium">
      Existing Image
    </p>

    <button
      type="button"
      onClick={async () => {

        const confirmDelete =
          window.confirm(
            "Delete this image?"
          );

        if (!confirmDelete)
          return;

        try {

          await API.delete(
            `/properties/image/${initialData._id}/${index}`
          );

          window.location.reload();

        } catch (error) {

          alert(
            "Failed to delete image"
          );

        }
      }}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
    >

      Delete Image

    </button>

  </div>

</div>

            )
          )
        }

      </div>

    </div>

  )
}

{/* NEW IMAGE PREVIEW */}

{
  images.length > 0 && (

    <div>

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-2xl font-bold">
          New Selected Images
        </h2>

        <p className="text-sm text-gray-500">
          These will replace existing images
        </p>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {
          images.map(
            (image, index) => (

              <div
                key={index}
                className="relative"
              >

                <img
                  src={URL.createObjectURL(
                    image
                  )}
                  alt="Preview"
                  className="w-full h-[180px] object-cover rounded-2xl border-2 border-black"
                />

                <div className="absolute top-2 right-2 bg-black text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">

                  {index + 1}

                </div>

              </div>

            )
          )
        }

      </div>

    </div>

  )
}
      {/* FEATURED */}

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
          className="w-5 h-5"
        />

        <label className="font-medium">
          Mark as Featured Property
        </label>

      </div>

      {/* SUBMIT */}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-all"
      >

        {
          loading
            ? "Processing..."
            : initialData
              ? "Update Property"
              : "Create Property"
        }

      </button>

    </form>
  );
}

export default PropertyForm;