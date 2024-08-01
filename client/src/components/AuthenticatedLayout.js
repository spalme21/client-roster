import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Sidebar from "./SideBar";

export default function AuthenticatedLayout() {
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
