import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./apps/App";
import AuthProvider from "./auth/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AuthProvider>
  // </React.StrictMode>
);
