import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeView from "../pages/HomeView";
import NotfoundView from "../pages/404";
import LayoutView from "../layouts/LayoutView";
import DatasetListView from "../pages/dataset/DatasetListView";
import SectoralView from "../pages/SectoralView";
import UrusanView from "../pages/UrusanView";
import OrganizationView from "../pages/OrganizationView";
import PublicationView from "../pages/PublicationView";
import ContactView from "../pages/ContactView";
import LoginView from "../pages/LoginView";
import DatasetDetailView from "../pages/dataset/DatasetDetailView";

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
          element: <DatasetListView />,
        },
        {
          path: "/datasets/detail/:id",
          element: <DatasetDetailView />,
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
