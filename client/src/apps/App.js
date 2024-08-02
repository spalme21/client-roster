import * as React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import ProtectedLayout from "../layouts/ProtectedLayout";
import Roster, { loader as rosterLoader } from "../pages/Roster";
import ClientForm from "../pages/ClientForm";
import ClientDetail from "../pages/ClientDetail";
import { QueryClient } from "@tanstack/react-query";
import { AuthLayout } from "../layouts/AuthLayout";
import { clientLoader } from "../hooks/useClientDetail";

const queryClient = new QueryClient();

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />} errorElement={<ErrorPage />}>
      <Route element={<RootLayout />}>
        <Route path="/" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route element={<ProtectedLayout />} errorElement={<ErrorPage />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route
          path="roster"
          element={<Roster />}
          loader={rosterLoader(queryClient)}
        />
        <Route path="add-client" element={<ClientForm />} />
        <Route
          path="client/:clientId"
          element={<ClientDetail />}
          loader={clientLoader(queryClient)}
        />
        <Route
          path="client/:clientId/edit"
          element={<ClientForm />}
          loader={clientLoader(queryClient)}
        />
      </Route>
    </Route>
  )
);
