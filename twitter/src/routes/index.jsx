import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout';
import Home from '@/pages/home';
import Explore from '@/pages/explore';
import Notifications from '@/pages/notifications';
import Profile from '@/pages/profile/index.jsx';
import Messages from '@/pages/messages/index.jsx';
import Lists from '@/pages/lists/index.jsx';
import Bookmarks from '@/pages/bookmarks/index.jsx';
import Communities from '@/pages/communities/index.jsx';

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
        path: '/messages',
        element: <Messages />,
      },
      {
        path: '/lists',
        element: <Lists />,
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />,
      },
      {
        path: '/communities',
        element: <Communities />,
      },
      {
        path: ':slug',
        element: <Profile />,
      },
      {
        path: '*',
        element: 'page not found',
      },
    ],
  },
]);

export default routes;
