// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { Eye, EyeOff, ImagePlus } from 'lucide-react';
// import { motion } from 'framer-motion';

// const AdminSignUp = () => {
//   const [formData, setFormData] = useState({
//     adminname: '',
//     role: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [profileImage, setProfileImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null);

//   const [showPassword, setShowPassword] = useState({
//     password: false,
//     confirmPassword: false,
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setProfileImage(file);
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => setPreviewImage(reader.result);
//       reader.readAsDataURL(file);
//     } else {
//       setPreviewImage(null);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       toast.error('Passwords do not match.');
//       return;
//     }

//     try {
//       const adminData = { ...formData, profileImage: previewImage };
//       localStorage.setItem('admin_signup', JSON.stringify(adminData));
//       toast.success('Admin account created!');
//       navigate('/admin/signin');
//     } catch (error) {
//       console.error(error);
//       toast.error('Something went wrong.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row font-sans bg-gradient-to-tr from-blue-50 to-blue-100">

//       {/* Left Panel */}
//       <div className="lg:w-1/2 flex items-center justify-center bg-blue-800 text-white py-20 px-10 text-center">
//         <div>
//           <h2 className="text-5xl font-extrabold mb-4 animate-pulse">
//             Welcome Admin{formData.role ? `, ${formData.role}!` : ' User!'}
//           </h2>
//           <p className="text-lg mb-6">
//             Already have access? Sign in to your admin dashboard.
//           </p>
//           <Link
//             to="/admin/signin"
//             className="inline-block px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300"
//           >
//             ADMIN SIGN IN
//           </Link>
//         </div>
//       </div>

//       {/* Right Panel */}
//       <div className="lg:w-1/2 flex items-center justify-center py-16 px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="w-full max-w-md bg-white rounded-xl shadow-xl p-8"
//         >
//           {/* Upload Image */}
//           <div className="flex flex-col items-center mb-4">
//             <label
//               htmlFor="profileImage"
//               className="cursor-pointer text-blue-700 hover:text-blue-900 flex items-center gap-2 animate-bounce hover:animate-none transition-all duration-500"
//               title="Upload Profile Image"
//             >
//               <ImagePlus size={24} />
//             </label>
//             <input
//               id="profileImage"
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="hidden"
//             />
//             {previewImage && (
//               <img
//                 src={previewImage}
//                 alt="Admin Preview"
//                 className="mt-3 w-20 h-20 object-cover rounded-full shadow"
//               />
//             )}
//           </div>

//           <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">Admin Sign Up</h2>
//           <p className="text-center text-gray-500 mb-6">Only authorized personnel allowed</p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             {/* Admin Name */}
//             <input
//               type="text"
//               name="adminname"
//               value={formData.adminname}
//               onChange={handleChange}
//               placeholder="Admin Name"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               required
//             />

//             {/* Role */}
//             <input
//               type="text"
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               placeholder="Admin Role (e.g. SuperAdmin)"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />

//             {/* Email */}
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               required
//             />

//             {/* Password */}
//             <div className="relative">
//               <input
//                 type={showPassword.password ? 'text' : 'password'}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Password"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                 required
//               />
//               <span
//                 onClick={() =>
//                   setShowPassword((prev) => ({
//                     ...prev,
//                     password: !prev.password,
//                   }))
//                 }
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-blue-500"
//               >
//                 {showPassword.password ? <EyeOff size={20} /> : <Eye size={20} />}
//               </span>
//             </div>

//             {/* Confirm Password */}
//             <div className="relative">
//               <input
//                 type={showPassword.confirmPassword ? 'text' : 'password'}
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 placeholder="Confirm Password"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                 required
//               />
//               <span
//                 onClick={() =>
//                   setShowPassword((prev) => ({
//                     ...prev,
//                     confirmPassword: !prev.confirmPassword,
//                   }))
//                 }
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-blue-500"
//               >
//                 {showPassword.confirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </span>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-600 transition duration-300 shadow-md"
//             >
//               SIGN UP AS ADMIN
//             </button>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AdminSignUp;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeOff, ImagePlus } from "lucide-react";
import { motion } from "framer-motion";

const AdminSignUp = () => {
  const [formData, setFormData] = useState({
    adminname: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();

  // Handle input changes for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image file input and preview generation
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

  
    const masterAdminEmail = "admin@portal.com";
    const masterAdminPassword = "admin123";

 
    if (
      formData.email !== masterAdminEmail ||
      formData.password !== masterAdminPassword
    ) {
      toast.error("Unauthorized access. Only verified admins can sign up.");
      return;
    }


    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    
    const existingAdmins = JSON.parse(localStorage.getItem("admin_list")) || [];

  
    if (existingAdmins.length >= 5) {
      toast.error("Admin limit reached. Only 5 admins allowed.");
      return;
    }

    try {
      
      const adminData = {
        ...formData,
        profileImage: previewImage,
      };

      // Save updated admin list to localStorage
      const updatedAdmins = [...existingAdmins, adminData];
      localStorage.setItem("admin_list", JSON.stringify(updatedAdmins));

      toast.success("Admin account created!");
      navigate("/admin/signin");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans bg-gradient-to-tr from-blue-50 to-blue-100">
      {/* Left Panel */}
      <div className="lg:w-1/2 flex items-center justify-center bg-blue-800 text-white py-20 px-10 text-center">
        <div>
          <h2 className="text-5xl font-extrabold mb-4 animate-pulse">
            Welcome Admin{formData.role ? `, ${formData.role}!` : " User!"}
          </h2>
          <p className="text-lg mb-6">
            Already have access? Sign in to your admin dashboard.
          </p>
          <Link
            to="/admin/signin"
            className="inline-block px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300"
          >
            ADMIN SIGN IN
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
              Upload Profile Image
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
                alt="Admin Preview"
                className="mt-3 w-20 h-20 object-cover rounded-full shadow"
              />
            )}
          </div>

          <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">
            Admin Sign Up
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Only authorized personnel allowed
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Admin Name */}
            <input
              type="text"
              name="adminname"
              value={formData.adminname}
              onChange={handleChange}
              placeholder="Admin Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            {/* Role */}
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Admin Role (e.g. SuperAdmin)"
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
                type={showPassword.password ? "text" : "password"}
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
                {showPassword.password ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
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
                {showPassword.confirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-600 transition duration-300 shadow-md"
            >
              SIGN UP AS ADMIN
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminSignUp;
