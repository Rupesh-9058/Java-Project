// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   GraduationCap,
//   BookOpenText,
//   Route,
//   MessageCircleMore,
//   LogIn,
// } from "lucide-react";

// const Navbar = () => {
//   return (
//     <div className="w-full h-[60px] bg-gradient-to-r from-emerald-500 to-indigo-700 flex justify-between items-center px-10 shadow-lg animate-fade-down">
      
//       {/* Logo with Icon */}
//       <div className="text-3xl font-extrabold tracking-wide flex items-center gap-2 text-white">
//         <GraduationCap className="w-7 h-7 text-white" />
//         <NavLink
//           to="/"
//           className="hover:scale-105 transition-transform duration-300"
//         >
//           JavaBuddy
//         </NavLink>
//       </div>

//       {/* Navigation Links */}
//       <ul className="flex space-x-8 font-semibold text-white">
//         <li className="flex items-center gap-1 transition duration-300 transform hover:scale-110 hover:text-yellow-300">
//           <BookOpenText className="w-5 h-5" />
//           <NavLink to="/about">About</NavLink>
//         </li>
//         <li className="flex items-center gap-1 transition duration-300 transform hover:scale-110 hover:text-yellow-300">
//           <Route className="w-5 h-5" />
//           <NavLink to="/roadmap">Roadmap</NavLink>
//         </li>
//         <li className="flex items-center gap-1 transition duration-300 transform hover:scale-110 hover:text-yellow-300">
//           <MessageCircleMore className="w-5 h-5" />
//           <NavLink to="/contact">Contact</NavLink>
//         </li>
//         <li className="flex items-center gap-1 transition duration-100 transform hover:scale-110 hover:text-yellow-300">
//           <LogIn className="w-5 h-5" />
//           <NavLink to="/signup">SignUp</NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  GraduationCap,
  BookOpenText,
  Route,
  MessageCircleMore,
  LogIn,
  User,
  Shield,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full h-[60px] bg-gradient-to-r from-emerald-500 to-indigo-700 flex justify-between items-center px-10 shadow-lg animate-fade-down">
      {/* Logo */}
      <div className="text-3xl font-extrabold tracking-wide flex items-center gap-2 text-white">
        <GraduationCap className="w-7 h-7 text-white" />
        <NavLink
          to="/"
          className="hover:scale-105 transition-transform duration-300"
        >
          JavaBuddy
        </NavLink>
      </div>

      {/* Navigation */}
      <ul className="flex space-x-8 font-semibold text-white items-center">
        <li className="flex items-center gap-1 transition duration-300 transform hover:scale-110 hover:text-yellow-300">
          <BookOpenText className="w-5 h-5" />
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="flex items-center gap-1 transition duration-300 transform hover:scale-110 hover:text-yellow-300">
          <Route className="w-5 h-5" />
          <NavLink to="/roadmap">Roadmap</NavLink>
        </li>
        <li className="flex items-center gap-1 transition duration-300 transform hover:scale-110 hover:text-yellow-300">
          <MessageCircleMore className="w-5 h-5" />
          <NavLink to="/contact">Contact</NavLink>
        </li>

        {/* Dropdown for Admin/User */}
        <li className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 transition duration-300 transform hover:scale-110 hover:text-yellow-300"
          >
            <LogIn className="w-5 h-5" />
            <span>Login</span>
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-50">
              <NavLink
                to="/user/signin"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
                onClick={() => setDropdownOpen(false)}
              >
                <User className="w-4 h-4 mr-2" />
                User Login
              </NavLink>
              <NavLink
                to="/admin/signin"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
                onClick={() => setDropdownOpen(false)}
              >
                <Shield className="w-4 h-4 mr-2" />
                Admin Login
              </NavLink>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
