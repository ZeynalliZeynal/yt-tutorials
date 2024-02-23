import Bookmarks from '~/pages/bookmarks'
import Communities from '~/pages/communities'
import Explore from '~/pages/explore'
import Home from '~/pages/home'
import Lists from '~/pages/lists'
import Messages from '~/pages/messages'
import NotFound from '~/pages/notFound/NotFound'
import Notifications from '~/pages/notifications'
import Premium from '~/pages/premium'
import Profile from '~/pages/profile'

const routerChildrenData = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'explore',
    element: <Explore />,
  },
  {
    path: 'notifications',
    element: <Notifications />,
  },
  {
    path: 'messages',
    element: <Messages />,
  },
  {
    path: 'lists',
    element: <Lists />,
  },
  {
    path: 'bookmarks',
    element: <Bookmarks />,
  },
  {
    path: 'communities',
    element: <Communities />,
  },
  {
    path: 'premium',
    element: <Premium />,
  },
  {
    path: ':slug',
    element: <Profile />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routerChildrenData
