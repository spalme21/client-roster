import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Sidebar from "../components/SideBar";
import { useAuth } from "../auth/AuthProvider";

export default function ProtectedLayout() {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navigation />
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Sidebar />
          <main className="col-11 col-md-9 ms-sm-auto col-lg-10 px-md-4 py-md-3">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
