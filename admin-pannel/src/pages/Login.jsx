import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  /*
  =====================================
  HANDLE CHANGE
  =====================================
  */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /*
  =====================================
  LOGIN
  =====================================
  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await API.post(
        "/auth/login",
        formData
      );

      /*
      =====================================
      SAVE TOKEN
      =====================================
      */

      localStorage.setItem(
        "token",
        response.data.token
      );

      /*
      =====================================
      SAVE USER
      =====================================
      */

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      toast.success("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Login failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">

      <div className="bg-white w-full max-w-[400px] rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          Admin Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition-all"
          >
            {
              loading
                ? "Logging in..."
                : "Login"
            }
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;