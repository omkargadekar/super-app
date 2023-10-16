import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Category from "./pages/category/Category";
import Register from "./pages/register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Entertainment from "./pages/entertainment/Entertainment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/entertainment",
        element: <Entertainment />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
