import { Outlet } from 'react-router-dom';
import Sidebar from '@/layout/sidebar';
import RightSideBar from '@/layout/rightSideBar';

const Layout = () => {
  return (
    <div className="w-[1265px] mx-auto flex">
      <Sidebar />
      <main className="flex-1 flex justify-between">
        <main className="flex-1 border-x border-[#2f3336] max-w-[600px]">
          <Outlet />
        </main>
        <RightSideBar />
      </main>
    </div>
  );
};

export default Layout;
