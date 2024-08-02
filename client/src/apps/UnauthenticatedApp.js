import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<LogIn />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
);

export default function UnauthenticatedApp() {
  return <RouterProvider router={router} />;
}
