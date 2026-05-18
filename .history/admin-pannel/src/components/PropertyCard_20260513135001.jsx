function PropertyCard({ property }) {

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">

      <img
        src={property.images[0]?.url}
        alt={property.title}
        className="w-full h-[220px] object-cover"
      />

      <div className="p-4">

        <h2 className="text-xl font-bold mb-2">
          {property.title}
        </h2>

        <p className="text-gray-600 mb-2">
          {property.location}
        </p>

        <p className="text-lg font-semibold mb-3">
          ₹ {property.price}
        </p>

        <div className="flex justify-between text-sm text-gray-500">

          <span>
            {property.bedrooms} Beds
          </span>

          <span>
            {property.bathrooms} Baths
          </span>

        </div>

      </div>
    </div>
  );
}

export default PropertyCard;