import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import Sidebar from "./SideBar.js";

const PrivateRoute = () => {
  const user = useAuth();
  if (!user.token) return <Navigate to="/login" />;
  return (
    <div className="row h-100">
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <Outlet />
      </main>
    </div>
  );
};

export default PrivateRoute;
