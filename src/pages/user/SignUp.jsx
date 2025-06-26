

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Eye, EyeOff, ImagePlus } from 'lucide-react';
import { motion } from 'framer-motion';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    try {
      const userData = { ...formData, profileImage: previewImage };
      localStorage.setItem('logindetails', JSON.stringify(userData));
      toast.success('SignUp successful!');
      navigate('/signin');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans bg-gradient-to-tr from-blue-50 to-blue-100">

      {/* Left Panel */}
      <div className="lg:w-1/2 flex items-center justify-center bg-blue-700 text-white py-20 px-10 text-center">
        <div>
          <h2 className="text-5xl font-extrabold mb-4 animate-pulse">
            Welcome Back{formData.nickname ? `, ${formData.nickname}!` : ' User!'}
          </h2>
          <p className="text-lg mb-6">
            To keep connected with us, please login with your personal info.
          </p>
          <Link
            to="/user/signin"
            className="inline-block px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300"
          >
            SIGN IN
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
          {/* Upload Image */}
          <div className="flex flex-col items-center mb-4">
            <label
              htmlFor="profileImage"
              className="cursor-pointer text-blue-700 hover:text-blue-900 flex items-center gap-2 animate-bounce hover:animate-none transition-all duration-500"
              title="Upload Profile Image"
            >
              <ImagePlus size={24} />
            </label>
            <input
              id="profileImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-3 w-20 h-20 object-cover rounded-full shadow"
              />
            )}
          </div>

          <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">Create Account</h2>
          <p className="text-center text-gray-500 mb-6">Or use your email for registration</p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Username */}
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            {/* Nickname */}
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              placeholder="Nickname"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword.password ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <span
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    password: !prev.password,
                  }))
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-blue-500"
              >
                {showPassword.password ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showPassword.confirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <span
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    confirmPassword: !prev.confirmPassword,
                  }))
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-blue-500"
              >
                {showPassword.confirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-600 transition duration-300 shadow-md"
            >
              SIGN UP
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
