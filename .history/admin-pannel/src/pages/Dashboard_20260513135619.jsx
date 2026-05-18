import {
  useEffect,
  useState
} from "react";

import {
  Link
} from "react-router-dom";

import {
  Building2,
  Star,
  BadgeCheck,
  Plus
} from "lucide-react";

import AdminLayout from "../layouts/AdminLayout";

import Loader from "../components/Loader";

import API from "../services/api";

import {
  formatPrice,
  formatDate
} from "../utils/helpers";

function Dashboard() {

  /*
  =====================================
  USER
  =====================================
  */

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  /*
  =====================================
  STATES
  =====================================
  */

  const [loading, setLoading] =
    useState(true);

  const [stats, setStats] =
    useState({});

  const [
    recentProperties,
    setRecentProperties
  ] = useState([]);

  /*
  =====================================
  FETCH DASHBOARD
  =====================================
  */

  const fetchDashboard =
    async () => {

      try {

        const response =
          await API.get(
            "/properties/dashboard/stats"
          );

        setStats(
          response.data.stats
        );

        setRecentProperties(
          response.data
            .recentProperties
        );

      } catch (error) {

        console.log(error);

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

    fetchDashboard();

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
  CARDS
  =====================================
  */

  const cards = [

    {
      title:
        "Total Properties",

      value:
        stats.totalProperties || 0,

      icon:
        <Building2 size={28} />
    },

    {
      title:
        "Featured Properties",

      value:
        stats.featuredProperties || 0,

      icon:
        <Star size={28} />
    },

    {
      title:
        "Active Listings",

      value:
        stats.activeListings || 0,

      icon:
        <BadgeCheck size={28} />
    }

  ];

  return (
    <AdminLayout>

      {/* HEADER */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

        <div>

          <h1 className="text-4xl font-bold">

            Dashboard

          </h1>

          <p className="text-gray-500 mt-2">

            Welcome back,
            {" "}
            <span className="font-semibold text-black">

              {user?.name}

            </span>

          </p>

        </div>

        <Link
          to="/add-property"
          className="bg-black text-white px-6 py-4 rounded-2xl flex items-center gap-2 w-fit"
        >

          <Plus size={20} />

          Add Property

        </Link>

      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        {
          cards.map(
            (card, index) => (

              <div
                key={index}
                className="bg-white border rounded-3xl p-6"
              >

                <div className="flex items-center justify-between mb-6">

                  <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">

                    {card.icon}

                  </div>

                </div>

                <h2 className="text-gray-500">

                  {card.title}

                </h2>

                <h1 className="text-5xl font-bold mt-3">

                  {card.value}

                </h1>

              </div>

            )
          )
        }

      </div>

      {/* RECENT PROPERTIES */}

      <div className="bg-white border rounded-3xl p-6">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold">

            Recent Properties

          </h2>

          <Link
            to="/properties"
            className="text-sm font-medium text-blue-500"
          >

            View All

          </Link>

        </div>

        {
          recentProperties.length === 0 ? (

            <div className="text-center py-16">

              <h3 className="text-2xl font-bold mb-3">

                No Properties Found

              </h3>

              <p className="text-gray-500">

                Add your first property

              </p>

            </div>

          ) : (

            <div className="space-y-5">

              {
                recentProperties.map(
                  (property) => (

                    <div
                      key={property._id}
                      className="border rounded-2xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
                    >

                      <div className="flex items-center gap-5">

                        {/* IMAGE */}

                        <img
                          src={image.url}
                          alt="Property"
                          className="w-[100px] h-[80px] object-cover rounded-xl"
                        />

                        {/* INFO */}

                        <div>

                          <h3 className="text-xl font-semibold">

                            {
                              property.title
                            }

                          </h3>

                          <p className="text-gray-500 mt-1">

                            {
                              property.city?.name
                            }

                          </p>

                          <p className="font-bold mt-2">

                            {formatPrice(
                              property.price
                            )}

                          </p>

                        </div>

                      </div>

                      {/* DATE */}

                      <div className="text-sm text-gray-500">

                        {formatDate(
                          property.createdAt
                        )}

                      </div>

                    </div>

                  )
                )
              }

            </div>

          )
        }

      </div>

    </AdminLayout>
  );
}

export default Dashboard;