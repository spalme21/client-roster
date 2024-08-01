import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Navigation />
      <div className="container-fluid h-100">
        <Outlet />
      </div>
    </>
  );
}
