import {
  useEffect,
  useMemo,
  useState
} from "react";

import { toast } from "react-toastify";

import {
  Link
} from "react-router-dom";

import {
  Plus,
  Search,
  SlidersHorizontal,
  Grid3X3,
  List
} from "lucide-react";

import AdminLayout from "../layouts/AdminLayout";

import Loader from "../components/Loader";

import PropertyCard from "../components/PropertyCard";

import API from "../services/api";

function Properties() {

  /*
  =====================================
  STATES
  =====================================
  */

  const [properties, setProperties] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState("grid");

  /*
  =====================================
  FETCH PROPERTIES
  =====================================
  */

  const fetchProperties =
    async () => {

      try {

        const response =
          await API.get(
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

  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Are you sure you want to delete this property?"
        );

      if (!confirmDelete)
        return;

      try {

        await API.delete(
          `/properties/${id}`
        );

        toast.success(
          "Property deleted successfully"
        );

        setProperties(
          properties.filter(
            (property) =>
              property._id !== id
          )
        );

      } catch (error) {

        toast.error(
          error.response?.data
            ?.message ||
            "Delete failed"
        );

      }
    };

  /*
  =====================================
  FILTERED PROPERTIES
  =====================================
  */

  const filteredProperties =
    useMemo(() => {

      return properties.filter(
        (property) => {

          const keyword =
            search.toLowerCase();

          return (
            property.title
              ?.toLowerCase()
              .includes(keyword) ||

            property.city
              ?.toLowerCase()
              .includes(keyword) ||

            property.state
              ?.toLowerCase()
              .includes(keyword)
          );
        }
      );

    }, [properties, search]);

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

      {/* PAGE HEADER */}

      <div
        className="
          flex
          flex-col
          xl:flex-row
          xl:items-center
          xl:justify-between
          gap-6
          mb-10
        "
      >

        {/* LEFT */}

        <div>

          <h1
            className="
              text-4xl
              md:text-5xl
              font-black
              tracking-tight
            "
          >

            Properties

          </h1>

          <p
            className="
              text-gray-500
              mt-3
              text-lg
            "
          >

            Manage and organize
            all property listings

          </p>

        </div>

        {/* RIGHT */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            gap-4
          "
        >

          {/* SEARCH */}

          <div
            className="
              relative
              min-w-[280px]
            "
          >

            <Search
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              placeholder="Search properties..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="
                w-full
                border
                rounded-2xl
                pl-11
                pr-4
                py-3
                bg-white
                focus:outline-none
                focus:ring-2
                focus:ring-black
              "
            />

          </div>

          {/* VIEW SWITCH */}

          <div
            className="
              flex
              items-center
              bg-white
              border
              rounded-2xl
              p-1
              w-fit
            "
          >

            <button
              onClick={() =>
                setView("grid")
              }
              className={`
                p-3
                rounded-xl
                transition-all
                
                ${
                  view === "grid"

                    ? `
                      bg-black
                      text-white
                    `

                    : `
                      text-gray-600
                    `
                }
              `}
            >

              <Grid3X3 size={18} />

            </button>

            <button
              onClick={() =>
                setView("list")
              }
              className={`
                p-3
                rounded-xl
                transition-all
                
                ${
                  view === "list"

                    ? `
                      bg-black
                      text-white
                    `

                    : `
                      text-gray-600
                    `
                }
              `}
            >

              <List size={18} />

            </button>

          </div>

          {/* ADD BUTTON */}

          <Link
            to="/add-property"
            className="
              bg-black
              hover:bg-gray-900
              text-white
              px-6
              py-3
              rounded-2xl
              flex
              items-center
              justify-center
              gap-2
              transition-all
              font-medium
            "
          >

            <Plus size={20} />

            Add Property

          </Link>

        </div>

      </div>

      {/* STATS */}

      <div
        className="
          bg-white
          border
          rounded-3xl
          p-6
          mb-8
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-5
        "
      >

        <div>

          <p className="text-gray-500">

            Total Listings

          </p>

          <h2
            className="
              text-4xl
              font-black
              mt-2
            "
          >

            {
              filteredProperties.length
            }

          </h2>

        </div>

        <div
          className="
            flex
            items-center
            gap-3
            text-gray-500
          "
        >

          <SlidersHorizontal
            size={18}
          />

          Smart property
          management dashboard

        </div>

      </div>

      {/* LOADING */}

      {
        loading ? (

          <Loader />

        ) : filteredProperties.length === 0 ? (

          <div
            className="
              bg-white
              border
              rounded-3xl
              p-14
              text-center
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                mb-3
              "
            >

              No Properties Found

            </h2>

            <p
              className="
                text-gray-500
                mb-8
              "
            >

              Start adding your
              first property

            </p>

            <Link
              to="/add-property"
              className="
                inline-flex
                items-center
                gap-2
                bg-black
                text-white
                px-6
                py-3
                rounded-2xl
              "
            >

              <Plus size={18} />

              Add Property

            </Link>

          </div>

        ) : (

          <div
            className={
              view === "grid"

                ? `
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  2xl:grid-cols-3
                  gap-7
                `

                : `
                  flex
                  flex-col
                  gap-7
                `
            }
          >

            {
              filteredProperties.map(
                (property) => (

                  <div
                    key={property._id}
                    className="
                      bg-white
                      border
                      rounded-3xl
                      p-4
                      hover:shadow-xl
                      transition-all
                    "
                  >

                    <PropertyCard
                      property={
                        property
                      }
                    />

                    {/* ACTIONS */}

                    <div
                      className="
                        flex
                        gap-3
                        mt-5
                      "
                    >

                      <Link
                        to={`/property/${property._id}`}
                        className="
                          flex-1
                          text-center
                          py-3
                          rounded-xl
                          bg-blue-500
                          text-white
                          font-medium
                        "
                      >

                        View

                      </Link>

                      <Link
                        to={`/edit-property/${property._id}`}
                        className="
                          flex-1
                          text-center
                          py-3
                          rounded-xl
                          bg-green-500
                          text-white
                          font-medium
                        "
                      >

                        Edit

                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(
                            property._id
                          )
                        }
                        className="
                          flex-1
                          py-3
                          rounded-xl
                          bg-red-500
                          text-white
                          font-medium
                        "
                      >

                        Delete

                      </button>

                    </div>

                  </div>

                )
              )
            }

          </div>

        )
      }

    </AdminLayout>
  );
}

export default Properties;