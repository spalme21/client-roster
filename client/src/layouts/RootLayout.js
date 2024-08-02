import { useAuth } from "../auth/AuthProvider";
import Navigation from "../components/Navigation";
import { Navigate, Outlet } from "react-router-dom";

export default function RootLayout() {
  const { token } = useAuth();

  if (token) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <Navigation />
      <div className="container-fluid h-100">
        <Outlet />
      </div>
    </>
  );
}
