import { NavLink } from 'react-router-dom';
import { navlinks } from '@/data/navlinks.jsx';
import MoreButton from '@/layout/menu/MoreButton.jsx';

const Menu = () => {
  return (
    <nav className="mt-0.5 mb-1 text-xl">
      <ul className="grid grid-cols-1 justify-start">
        {navlinks.map(
          ({ to, defaultIcon, isActiveIcon, notifications, pathName }) => (
            <li key={to}>
              <NavLink to={to} className="w-full justify-start group">
                {({ isActive }) => (
                  <div className="p-3 rounded-full flex justify-center items-center group-hover:bg-primary-hoverBtn transition-colors">
                    <span className="size-[26.25px] text-white relative">
                      {notifications && (
                        <span className="size-[18px] absolute rounded-full text-[11px] -right-1 -top-1.5 bg-primary-background inline-flex justify-center items-center font-medium">
                          {notifications}
                        </span>
                      )}
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fill="currentColor"
                          d={isActive ? isActiveIcon : defaultIcon}
                        />
                      </svg>
                    </span>
                    <span
                      className={`ml-5 mr-4 ${isActive ? 'font-bold' : ''}`}
                    >
                      {pathName}
                    </span>
                  </div>
                )}
              </NavLink>
            </li>
          ),
        )}{' '}
      </ul>
      <MoreButton />
    </nav>
  );
};

export default Menu;
