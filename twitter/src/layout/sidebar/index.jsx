import Logo from '@/layout/sidebar/logo/index.jsx';
import Menu from '@/layout/menu/index.jsx';
import Button from '@/components/Button.jsx';

const Sidebar = () => {
  return (
    <aside className="w-[275px] px-2">
      <Logo />
      <Menu />
      <div className="my-4">
        <Button size="large">Post</Button>
      </div>
    </aside>
  );
};

export default Sidebar;
