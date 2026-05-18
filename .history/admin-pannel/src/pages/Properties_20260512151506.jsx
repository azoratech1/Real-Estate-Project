import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { Link } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import Loader from "../components/Loader";

import PropertyCard from "../components/PropertyCard";

import API from "../services/api";

function Properties() {

  const [properties, setProperties] = useState([]);

  const [loading, setLoading] = useState(true);

  /*
  =====================================
  FETCH PROPERTIES
  =====================================
  */

  const fetchProperties = async () => {

    try {

      const response = await API.get(
        "/properties"
      );

      setProperties(
        response.data.properties
      );

    } catch (error) {

      toast.error(
        "Failed to fetch properties"
      );

    } finally {

      setLoading(false);

    }
  };

  /*
  =====================================
  DELETE PROPERTY
  =====================================
  */

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(
        `/properties/${id}`
      );

      toast.success(
        "Property deleted successfully"
      );

      fetchProperties();

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Delete failed"
      );

    }
  };

  /*
  =====================================
  LOAD DATA
  =====================================
  */

  useEffect(() => {

    fetchProperties();

  }, []);

  return (
    <AdminLayout>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">

        <div>

          <h1 className="text-3xl md:text-4xl font-bold">
            All Properties
          </h1>

          <p className="text-gray-600 mt-2">
            Manage all property listings
          </p>

        </div>

        <Link
          to="/add-property"
          className="bg-black text-white px-6 py-3 rounded-lg w-fit"
        >
          Add Property
        </Link>

      </div>

      {
        loading ? (

          <Loader />

        ) : properties.length === 0 ? (

          <div className="bg-white rounded-xl shadow-md p-10 text-center">

            <h2 className="text-2xl font-bold mb-2">
              No Properties Found
            </h2>

            <p className="text-gray-500">
              Start adding properties
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {properties.map((property) => (

              <div
                key={property._id}
                className="relative"
              >

                <PropertyCard property={property} />

                {/* ACTION BUTTONS */}

                <div className="flex gap-3 mt-3">

                  <Link
                    to={`/property/${property._id}`}
                    className="flex-1 bg-blue-500 text-white text-center py-2 rounded-lg"
                  >
                    View
                  </Link>

                  <Link
                    to={`/edit-property/${property._id}`}
                    className="flex-1 bg-green-500 text-white text-center py-2 rounded-lg"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      handleDelete(property._id)
                    }
                    className="flex-1 bg-red-500 text-white py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        )
      }

    </AdminLayout>
  );
}

export default Properties;