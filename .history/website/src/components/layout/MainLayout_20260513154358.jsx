import Navbar from "./Navbar";

import Footer from "./Footer";

function MainLayout({
  children
}) {

  return (

    <div
      className="
        min-h-screen
        bg-gray-50
      "
    >

      {/* NAVBAR */}

      <Navbar />

      {/* PAGE CONTENT */}

      <main
        className="
          pt-[80px]
        "
      >

        {children}

      </main>

      {/* FOOTER */}

      <Footer />

    </div>
  );
}

export default MainLayout;