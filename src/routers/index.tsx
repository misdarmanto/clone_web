import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeView from "../pages/HomeView";
import NotfoundView from "../pages/404";
import LayoutView from "../layouts/LayoutView";
import DataSetView from "../pages/DatasetView";
import SectoralView from "../pages/SectoralView";
import UrusanView from "../pages/UrusanView";
import OrganizationView from "../pages/OrganizationView";
import PublicationView from "../pages/PublicationView";
import ContactView from "../pages/ContactView";
import LoginView from "../pages/LoginView";

export default function AppRouters() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <LayoutView />,
      errorElement: <NotfoundView />,
      children: [
        {
          path: "/",
          element: <HomeView />,
        },
        {
          path: "/datasets",
          element: <DataSetView />,
        },
        {
          path: "/sectorals",
          element: <SectoralView />,
        },
        {
          path: "/urusan",
          element: <UrusanView />,
        },
        {
          path: "/organizations",
          element: <OrganizationView />,
        },
        {
          path: "/publications",
          element: <PublicationView />,
        },
        {
          path: "/contacts",
          element: <ContactView />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginView />,
    },
  ]);

  return <RouterProvider router={routers} />;
}
