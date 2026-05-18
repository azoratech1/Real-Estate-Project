import { useEffect, useState } from "react";

import {
  useParams,
  useNavigate
} from "react-router-dom";

import { toast } from "react-toastify";

import {
  ArrowLeft
} from "lucide-react";

import AdminLayout from "../layouts/AdminLayout";

import PropertyForm from "../components/PropertyForm";

import Loader from "../components/Loader";

import API from "../services/api";

function EditProperty() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [property, setProperty] =
    useState(null);

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

    }
  };

  /*
  =====================================
  UPDATE PROPERTY
  =====================================
  */

  const handleUpdateProperty =
    async (formData) => {

      try {

        setLoading(true);

        const response =
          await API.put(
            `/properties/${id}`,
            formData,
            {
              headers: {
                "Content-Type":
                  "multipart/form-data"
              }
            }
          );

        toast.success(
          response.data.message
        );

        navigate(
          "/properties"
        );

      } catch (error) {

        toast.error(
          error.response?.data
            ?.message ||
            "Update failed"
        );

      } finally {

        setLoading(false);

      }
    };

  /*
  =====================================
  LOAD PROPERTY
  =====================================
  */

  useEffect(() => {

    fetchProperty();

  }, []);

  return (
    <AdminLayout>

      {/* HEADER */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <button
            onClick={() =>
              navigate(-1)
            }
            className="flex items-center gap-2 text-gray-500 hover:text-black mb-4"
          >

            <ArrowLeft size={20} />

            Back

          </button>

          <h1 className="text-3xl md:text-5xl font-bold">

            Edit Property

          </h1>

          <p className="text-gray-500 mt-2">

            Update property details

          </p>

        </div>

      </div>

      {/* FORM */}

      {
        !property ? (

          <Loader />

        ) : (

          <PropertyForm
            initialData={property}
            onSubmit={
              handleUpdateProperty
            }
            loading={loading}
            isEdit={true}
          />

        )
      }

    </AdminLayout>
  );
}

export default EditProperty;