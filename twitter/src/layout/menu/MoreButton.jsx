import { Disclosure, Popover } from '@headlessui/react';
import { disclosureItems, popoverItems } from '@/data/popoverItems.jsx';
import { Link } from 'react-router-dom';

const MoreButton = () => {
  return (
    <li className="w-full relative">
      <Popover className="w-full">
        <Popover.Button className="w-full justify-start group outline-none">
          <div className="p-3 rounded-full flex justify-center items-center group-hover:bg-primary-hoverBtn transition-colors">
            <span className="size-[26.25px] text-white relative">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
                />
              </svg>
            </span>
            <span className="ml-5 mr-4">More</span>
          </div>
        </Popover.Button>
        <Popover.Panel className="absolute bottom-0 left-0 shadow-popover bg-black w-[318px] rounded-xl overflow-hidden">
          <ul className="text-xl grid justify-start grid-cols-1">
            {popoverItems.map(({ title, icon, beta }) => (
              <li key={title} className="w-full">
                <button className="relative popover-item-btn p-4 w-full hover:bg-primary-hoverBtn justify-start">
                  <span className="size-6 mr-6">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d={icon} />
                    </svg>
                  </span>{' '}
                  {title}{' '}
                  {beta && (
                    <span className="absolute right-4 text-[13px] text-[#ffe0c2] font-bold bg-[#491600] h-5 px-1 rounded inline-flex items-center">
                      Beta
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          <ul>
            {disclosureItems.map(({ to, title, icon, desc }) => (
              <li key={icon} className="w-full flex-col">
                <Disclosure>
                  <Disclosure.Button className="h-[52px] text-base flex items-center justify-between w-full px-4 font-bold hover:bg-[#eff3f41a] transition-colors">
                    {title}{' '}
                    <span className="size-[18.75px]">
                      <svg viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                        />
                      </svg>
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500 w-full">
                    <Link
                      to={to}
                      className="flex w-full justify-start items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-primary-hoverBtn transition-colors text-white"
                    >
                      <span className="size-[18.75px]">
                        <svg viewBox="0 0 24 24">
                          <path fill="currentColor" d={icon} />
                        </svg>
                      </span>{' '}
                      {desc}
                    </Link>
                  </Disclosure.Panel>
                </Disclosure>
              </li>
            ))}
          </ul>
        </Popover.Panel>
      </Popover>
    </li>
  );
};
export default MoreButton;
