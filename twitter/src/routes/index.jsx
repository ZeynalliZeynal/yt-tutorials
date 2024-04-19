import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout';
import Home from '@/pages/home';
import Explore from '@/pages/explore';
import Notifications from '@/pages/notifications';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
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
        path: '*',
        element: 'page not found',
      },
    ],
  },
]);

export default routes;
