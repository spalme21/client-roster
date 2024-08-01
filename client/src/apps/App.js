import * as React from "react";
import { useAuth } from "../auth/AuthProvider";

const AuthenticatedApp = React.lazy(() => import("./AuthenticatedApp"));
const UnauthenticatedApp = React.lazy(() => import("./UnauthenticatedApp"));

export default function App() {
  const user = useAuth();
  return user.token ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}
