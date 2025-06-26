import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("jwttoken");
  return token ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
