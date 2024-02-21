import { createBrowserRouter } from 'react-router-dom'
import Explore from '~/pages/explore'
import Home from '~/pages/home'
import NotFound from '~/pages/notFound/NotFound'
import Notifications from '~/pages/notifications'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/explore',
    element: <Explore />,
  },
  {
    path: '/notifications',
    element: <Notifications />,
  },
  {
    path: '/',
    element: 'Home',
  },
  {
    path: '/',
    element: 'Home',
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default routes
