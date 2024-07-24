import { Popover, Transition } from '@headlessui/react';
import { useAccount } from '@/redux/selectors.js';
import { BsThreeDots } from 'react-icons/bs';
import MoreAccounts from '@/layout/sidebar/profileButton/moreAccounts/index.jsx';
import { Fragment } from 'react';

const ProfileButton = () => {
  const account = useAccount();

  return (
    <div className="mt-auto">
      <Popover className="relative text-[15px]">
        <Popover.Button className="outline-none p-3 hover:bg-primary-hoverBtn rounded-full w-full flex justify-between my-3 text-white">
          <div className="flex gap-3">
            <div className="size-10 rounded-full overflow-hidden">
              <img src={account.avatar} alt={account.userName} />
            </div>
            <div className="flex flex-col items-start">
              <h5 className="font-bold">{account.fullName}</h5>
              <span className="text-gray-500">@{account.userName}</span>
            </div>
          </div>
          <span className="size-5">
            <BsThreeDots />
          </span>
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition duration-200 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <Popover.Panel className="absolute bottom-[120%] left-1/2 -translate-x-1/2 w-[300px] py-3 rounded-2xl shadow-popover bg-black divide-y-2 divide-neutral-900 space-y-4">
            {({ close }) => (
              <>
                <MoreAccounts onClose={close} />
                <div className="flex flex-col w-full pt-4">
                  <button className="px-4 py-3 font-semibold hover:bg-primary-hoverBtn w-full justify-start">
                    Add an existing account
                  </button>
                  <button className="px-4 py-3 font-semibold hover:bg-primary-hoverBtn w-full justify-start">
                    Manage accounts
                  </button>
                  <button className="px-4 py-3 font-semibold hover:bg-primary-hoverBtn w-full justify-start">
                    Logout @{account.userName}
                  </button>
                </div>
              </>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default ProfileButton;
