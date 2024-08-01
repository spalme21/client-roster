import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AuthenticatedLayout from "../components/AuthenticatedLayout";
import ErrorPage from "../pages/ErrorPage";
import Roster, { loader as rosterLoader } from "../pages/Roster";
import ClientForm from "../pages/ClientForm";
import ClientDetail, { loader as clientLoader } from "../pages/ClientDetail";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<AuthenticatedLayout />}
      errorElement={<ErrorPage />}
    >
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/roster"
        element={<Roster />}
        loader={rosterLoader(queryClient)}
      />
      <Route path="/add-client" element={<ClientForm />} />
      <Route
        path="/client-details/:clientId"
        element={<ClientDetail />}
        loader={clientLoader(queryClient)}
      />
    </Route>
  )
);

export default function AuthenticatedApp() {
  return <RouterProvider router={router} />;
}
