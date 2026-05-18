import { useState } from "react";

import {
  Link,
  useLocation
} from "react-router-dom";

import {
  LayoutDashboard,
  PlusSquare,
  Building2,
  Menu,
X,
PanelLeftClose,
PanelLeftOpen
} from "lucide-react";

function Sidebar() {

  const location = useLocation();

  /*
  =====================================
  MOBILE SIDEBAR STATE
  =====================================
  */

  const [isOpen, setIsOpen] =
    useState(false);
const [collapsed, setCollapsed] =
  useState(false);
  /*
  =====================================
  MENU ITEMS
  =====================================
  */

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />
    },

    {
      name: "Add Property",
      path: "/add-property",
      icon: <PlusSquare size={20} />
    },

    {
      name: "Properties",
      path: "/properties",
      icon: <Building2 size={20} />
    }
  ];

  return (
    <>
      {/* MOBILE HEADER */}

      <div className="md:hidden bg-white border-b h-[70px] px-4 flex items-center justify-between sticky top-0 z-50">

        <h1 className="text-2xl font-bold">
          Admin
        </h1>

        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
        >
          {
            isOpen
              ? <X size={28} />
              : <Menu size={28} />
          }
        </button>

      </div>

      {/* OVERLAY */}

      {
        isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() =>
              setIsOpen(false)
            }
          />
        )
      }

      {/* SIDEBAR */}

      <aside
        className={`
          
          fixed top-0 left-0 z-50
          
          w-[260px]
          
          h-screen
          
          bg-white
          
          border-r
          
          transition-all duration-300
          
          flex flex-col
          
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >

        {/* LOGO */}

        <div className="h-[80px] border-b flex items-center px-6">

          <div>

            <h1 className="text-2xl font-bold">
              Admin Panel
            </h1>

            <p className="text-sm text-gray-500">
              Property Dashboard
            </p>

          </div>

        </div>

        {/* MENU */}

        <div className="flex-1 overflow-y-auto p-4">

          <div className="space-y-2">

            {menuItems.map((item) => {

              const isActive =
                location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className={`
                    
                    flex items-center gap-3
                    
                    px-4 py-3
                    
                    rounded-xl
                    
                    transition-all duration-200
                    
                    font-medium
                    
                    ${
                      isActive
                        ? "bg-black text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >

                  {item.icon}

                  <span>
                    {item.name}
                  </span>

                </Link>
              );
            })}

          </div>

        </div>

        {/* FOOTER */}

        <div className="p-4 border-t">

          <div className="bg-gray-100 rounded-xl p-4">

            <p className="font-semibold">
              Real Estate Admin
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Manage properties easily
            </p>

          </div>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;