import { useEffect, useState } from "react";

import {
  useParams,
  Link
} from "react-router-dom";

import { toast } from "react-toastify";

import {
  MapPin,
  BedDouble,
  Bath,
  Building2,
  IndianRupee,
  Star,
  Phone,
  User,
  CalendarDays,
  Sofa,
  ShieldCheck,
  ArrowLeft
} from "lucide-react";

import AdminLayout from "../layouts/AdminLayout";

import Loader from "../components/Loader";

import API from "../services/api";

import {
  formatPrice,
  formatDate
} from "../utils/helpers";

function PropertyDetails() {

  const { id } = useParams();

  const [property, setProperty] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [activeImage, setActiveImage] =
    useState(0);

  /*
  =====================================
  FETCH PROPERTY
  =====================================
  */

  const fetchProperty = async () => {

    try {

      const response =
        await API.get(
          `/properties/${id}`
        );

      setProperty(
        response.data.property
      );

    } catch (error) {

      toast.error(
        "Failed to fetch property"
      );

    } finally {

      setLoading(false);

    }
  };

  /*
  =====================================
  LOAD DATA
  =====================================
  */

  useEffect(() => {

    fetchProperty();

  }, []);

  /*
  =====================================
  LOADING
  =====================================
  */

  if (loading) {

    return (
      <AdminLayout>

        <Loader />

      </AdminLayout>
    );
  }

  /*
  =====================================
  NOT FOUND
  =====================================
  */

  if (!property) {

    return (
      <AdminLayout>

        <div className="bg-white rounded-2xl border p-10 text-center">

          <h1 className="text-4xl font-bold">
            Property Not Found
          </h1>

        </div>

      </AdminLayout>
    );
  }

  return (
    <AdminLayout>

      {/* TOP BAR */}

      <div className="flex items-center justify-between mb-8">

        <Link
          to="/properties"
          className="flex items-center gap-2 text-gray-600 hover:text-black"
        >

          <ArrowLeft size={20} />

          Back

        </Link>

        {
          property.featured && (

            <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">

              <Star size={18} />

              Featured Property

            </div>

          )
        }

      </div>

      {/* TITLE */}

      <div className="mb-8">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">

              {property.title}

            </h1>

            <div className="flex items-center gap-2 text-gray-500 mt-4">

              <MapPin size={18} />

              <p>

                {property.locality},
                {" "}
                {property.city?.name},
                {" "}
                {property.state?.name}
              </p>

            </div>

          </div>

          {/* PRICE */}

          <div className="bg-white border rounded-2xl px-6 py-5">

            <p className="text-gray-500 text-sm mb-2">
              Property Price
            </p>

            <h1 className="text-4xl font-bold text-black">

              {formatPrice(
                property.price
              )}

            </h1>

          </div>

        </div>

      </div>

      {/* IMAGE SECTION */}

      <div className="mb-10">

        {/* MAIN IMAGE */}

        <img
          src={
  property.images?.[
    activeImage
  ]?.url
}
          alt="Property"
          className="w-full h-[500px] object-cover rounded-3xl border"
        />

        {/* THUMBNAILS */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">

          {property.images.map(
            (image, index) => (

              <img
                key={index}
                src={`http://localhost:5000/api/properties/image/${property._id}/${index}`}
                alt="Thumbnail"
                onClick={() =>
                  setActiveImage(index)
                }
                className={`
                  h-[120px]
                  w-full
                  object-cover
                  rounded-2xl
                  cursor-pointer
                  border-4
                  
                  ${
                    activeImage === index
                      ? "border-black"
                      : "border-transparent"
                  }
                `}
              />

            )
          )}

        </div>

      </div>

      {/* OVERVIEW CARDS */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">

        <div className="bg-white border rounded-2xl p-5">

          <div className="flex items-center gap-3 mb-3">

            <BedDouble />

            <h3 className="font-medium">
              Bedrooms
            </h3>

          </div>

          <h1 className="text-3xl font-bold">

            {property.bedrooms || 0}

          </h1>

        </div>

        <div className="bg-white border rounded-2xl p-5">

          <div className="flex items-center gap-3 mb-3">

            <Bath />

            <h3 className="font-medium">
              Bathrooms
            </h3>

          </div>

          <h1 className="text-3xl font-bold">

            {property.bathrooms || 0}

          </h1>

        </div>

        <div className="bg-white border rounded-2xl p-5">

          <div className="flex items-center gap-3 mb-3">

            <Building2 />

            <h3 className="font-medium">
              Type
            </h3>

          </div>

          <h1 className="text-2xl font-bold">

            {property.propertyType}

          </h1>

        </div>

        <div className="bg-white border rounded-2xl p-5">

          <div className="flex items-center gap-3 mb-3">

            <IndianRupee />

            <h3 className="font-medium">
              Listing
            </h3>

          </div>

          <h1 className="text-2xl font-bold">

            {property.listingType}

          </h1>

        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* LEFT SIDE */}

        <div className="xl:col-span-2 space-y-8">

          {/* DESCRIPTION */}

          <div className="bg-white border rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">

              Description

            </h2>

            <p className="text-gray-600 leading-8">

              {property.description}

            </p>

          </div>

          {/* PROPERTY DETAILS */}

          <div className="bg-white border rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">

              Property Details

            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <DetailItem
                label="State"
                value={property.state?.name}
              />

              <DetailItem
                label="City"
                value={property.city?.name}
              />

              <DetailItem
                label="Locality"
                value={property.locality}
              />

              <DetailItem
                label="Furnishing"
                value={
                  property.furnishing
                }
              />

              <DetailItem
                label="Built Up Area"
                value={`${property.builtUpArea || 0} sqft`}
              />

              <DetailItem
                label="Carpet Area"
                value={`${property.carpetArea || 0} sqft`}
              />

              <DetailItem
                label="Balconies"
                value={
                  property.balconies
                }
              />

              <DetailItem
                label="Posted On"
                value={formatDate(
                  property.createdAt
                )}
              />

            </div>

          </div>

          {/* AMENITIES */}

          <div className="bg-white border rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">

              Amenities

            </h2>

            <div className="flex flex-wrap gap-4">

              {
                property.amenities?.map(
                  (
                    amenity,
                    index
                  ) => (

                    <div
                      key={index}
                      className="bg-gray-100 px-5 py-3 rounded-full flex items-center gap-2"
                    >

                      <ShieldCheck
                        size={18}
                      />

                      {amenity}

                    </div>

                  )
                )
              }

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div>

          {/* CONTACT CARD */}

          <div className="bg-white border rounded-3xl p-8 sticky top-24">

            <h2 className="text-3xl font-bold mb-6">

              Contact Details

            </h2>

            <div className="space-y-5">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">

                  <User size={20} />

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Contact Person
                  </p>

                  <h3 className="font-semibold">

                    {
                      property.contactName
                    }

                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">

                  <Phone size={20} />

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Phone Number
                  </p>

                  <h3 className="font-semibold">

                    {
                      property.contactNumber
                    }

                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">

                  <CalendarDays
                    size={20}
                  />

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Listed On
                  </p>

                  <h3 className="font-semibold">

                    {formatDate(
                      property.createdAt
                    )}

                  </h3>

                </div>

              </div>

              <button className="w-full bg-black text-white py-4 rounded-2xl mt-5 hover:opacity-90 transition-all">

                Contact Now

              </button>

            </div>

          </div>

        </div>

      </div>

    </AdminLayout>
  );
}

/*
=====================================
DETAIL ITEM
=====================================
*/

function DetailItem({
  label,
  value
}) {

  return (
    <div>

      <p className="text-gray-500 mb-1">

        {label}

      </p>

      <h3 className="font-semibold text-lg">

        {value || "N/A"}

      </h3>

    </div>
  );
}

export default PropertyDetails;