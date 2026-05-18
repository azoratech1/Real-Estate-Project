import { useState } from "react";

import { toast } from "react-toastify";

import AdminLayout from "../layouts/AdminLayout";

import PropertyForm from "../components/PropertyForm";

import API from "../services/api";

function AddProperty() {

  const [loading, setLoading] = useState(false);

  /*
  =====================================
  SUBMIT PROPERTY
  =====================================
  */

  const handleAddProperty = async (formData) => {

    try {

      setLoading(true);

      const response = await API.post(
        "/properties",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      toast.success(
        response.data.message
      );

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to create property"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <AdminLayout>

      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold">
          Add Property
        </h1>

        <p className="text-gray-600 mt-2">
          Create new property listing
        </p>

      </div>

      <PropertyForm
        onSubmit={handleAddProperty}
        loading={loading}
      />

    </AdminLayout>
  );
}

export default AddProperty;