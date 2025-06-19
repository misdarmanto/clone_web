import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeView from "../pages/HomeView";
import NotfoundView from "../pages/404";
import LayoutView from "../layouts/LayoutView";
import SectoralView from "../pages/SectoralView";
import UrusanView from "../pages/UrusanView";
import OrganizationView from "../pages/OrganizationView";
import ContactView from "../pages/ContactView";
import LoginView from "../pages/LoginView";
import ListPublicationView from "../pages/publication/ListPublicationView";
import DetailPublicationView from "../pages/publication/DetailPublicationView";
import ListDataSetView from "../pages/dataset/ListDatasetView";
import DetailDatasetView from "../pages/dataset/DetailDatasetView";

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
          element: <ListDataSetView />,
        },
        {
          path: "/datasets/detail/:datasetId",
          element: <DetailDatasetView />,
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
          element: <ListPublicationView />,
        },
        {
          path: "/publications/detail/:publicationId",
          element: <DetailPublicationView />,
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
