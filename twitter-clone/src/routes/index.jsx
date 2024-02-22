import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '~/layout/main'
import routerChildrenData from '~/data/routerChildren'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: routerChildrenData,
  },
])

export default routes
