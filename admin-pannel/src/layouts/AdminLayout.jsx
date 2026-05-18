import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AdminLayout({ children }) {

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN AREA */}

      <div className="md:ml-[260px]">

        {/* NAVBAR */}

        <Navbar />

        {/* PAGE CONTENT */}

        <main className="p-4 md:p-8">

          {children}

        </main>

      </div>

    </div>
  );
}

export default AdminLayout;