import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="w-full h-screen flex">
      {/* Sidebar */}
      <div className="w-[20%] h-full bg-slate-800 shadow-lg">
        <ul className="w-full h-full bg-gradient-to-b from-yellow-500 to-orange-600 font-bold p-4 space-y-4">
          <li className="text-center p-3 rounded-md hover:scale-105 transition-transform duration-300">
            <NavLink
              to="/admindashboard/message"
              className={({ isActive }) =>
                isActive
                  ? "text-black underline"
                  : "text-white hover:text-black"
              }
            >
              Contact Messages
            </NavLink>
          </li>

          <li className="text-center p-3 rounded-md hover:scale-105 transition-transform duration-300">
            <NavLink
              to="/admindashboard/usercard"
              className={({ isActive }) =>
                isActive
                  ? "text-black underline"
                  : "text-white hover:text-black"
              }
            >
              User Cards
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-[80%] h-full overflow-y-auto bg-gradient-to-r from-orange-200 via-yellow-100 to-red-100 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
