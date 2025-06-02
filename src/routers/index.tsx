import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeView from '../pages/HomeView'
import NotfoundView from '../pages/404'
import LayoutView from '../layouts/LayoutView'

export default function AppRouters() {
    const routers = createBrowserRouter([
        {
          path: '/',
          element:  <LayoutView />,
          errorElement: <NotfoundView />,
          children: [
            {
              path: '/',
              element: <HomeView />
            },
          ]
        }
      ])
    
      return <RouterProvider router={routers} />
}