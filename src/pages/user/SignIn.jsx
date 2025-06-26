
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("logindetails"));
    const token = "ekwokd30i93rk20o121enmmfoe3";

    if (!storedUser) {
      toast.error("No user found. Please sign up first.");
      return;
    }

    if (
      formData.email === storedUser.email &&
      formData.password === storedUser.password
    ) {
      toast.success("Login successful!");
      setTimeout(() => {
        localStorage.setItem("jwttoken", token);
        navigate("/dashboard");
      }, 1500);
    } else {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans bg-gradient-to-tr from-blue-50 to-blue-100">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Left Panel */}
      <div className="lg:w-1/2 flex items-center justify-center py-20 px-10 bg-blue-600 text-white text-center">
        <div>
          <h2 className="text-5xl font-extrabold mb-4 animate-pulse">Hello, Friend!</h2>
          <p className="text-lg mb-6">
            Enter your personal details and start your journey with us.
          </p>
          <Link
            to="/user/signup"
            className="inline-block px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300"
          >
            SIGN UP
          </Link>
        </div>
      </div>

      {/* Right Panel */}
      <div className="lg:w-1/2 flex items-center justify-center py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md bg-white rounded-xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">Sign In</h2>
          <p className="text-center text-gray-500 mb-6">Use your email and password</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer hover:text-blue-500 transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-600 transition duration-300 shadow-md"
            >
              SIGN IN
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;
