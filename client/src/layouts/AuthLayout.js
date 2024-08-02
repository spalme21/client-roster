import { Outlet } from "react-router-dom";
import AuthProvider from "../auth/AuthProvider";

export const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};
