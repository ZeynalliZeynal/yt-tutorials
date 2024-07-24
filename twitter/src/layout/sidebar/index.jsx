import Logo from '@/layout/sidebar/logo/index.jsx';
import Menu from '@/layout/menu/index.jsx';
import Post from './Post.jsx';
import ProfileButton from '@/layout/sidebar/profileButton/index.jsx';

const Sidebar = () => {
  return (
    <aside className="w-[275px] px-2 flex flex-col max-h-screen min-h-screen">
      <Logo />
      <Menu />
      <Post />
      <ProfileButton />
    </aside>
  );
};

export default Sidebar;
