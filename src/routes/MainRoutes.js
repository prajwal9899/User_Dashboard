import React, { lazy } from "react";
import MainLayout from "layout/MainLayout";
import Loadable from "component/Loadable";
import UploadData from "views/uploadData/UploadData";
import SearchDefaulters from "views/SearchDefaulter/SearchDefaulters";
import ProtectedRoutes from "authentication/ProtectedRoutes";
import PDF from "views/PDF/PDF";
const DashboardDefault = Loadable(lazy(() => import("../views/Dashboard")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: (
        <ProtectedRoutes>
          <DashboardDefault />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/dashboard/default",
      element: (
        <ProtectedRoutes>
          <DashboardDefault />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/upload",
      element: (
        <ProtectedRoutes>
          <UploadData />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/search",
      element: (
        <ProtectedRoutes>
          <SearchDefaulters />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/pdf",
      element: (
        <ProtectedRoutes>
          <PDF />
        </ProtectedRoutes>
      ),
    },
  ],
};

export default MainRoutes;
