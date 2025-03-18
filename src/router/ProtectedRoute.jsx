import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {

  const { user } = useAuth();

  // If user is not authenticated, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the nested routes (i.e. Dashboard)
  return <Outlet />;

};

export default ProtectedRoute;
