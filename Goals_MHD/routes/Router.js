import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import DashBoard from "../pages/Supplier/DashBoard";
import Reporting from "../pages/Supplier/Reporting";
import Goals from "../pages/Supplier/Goals/Goals";
import Reportpillar from "../pages/Supplier/Reporting/Reportpillar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/goals", element: <Goals /> },
      { path: "/reporting", element: <Reporting /> },
      { path: "/dashboard", element: <DashBoard /> },
    ],
  },
  {
    path: "/report",
    element: <Reportpillar />,
  },
]);

export default router;
