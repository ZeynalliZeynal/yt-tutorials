import { useAccount, useAccounts } from '@/redux/selectors.js';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { setActiveAccount } from '@/redux/actions.js';

export default function MoreAccounts({ onClose }) {
  const activeAccount = useAccount();
  const accounts = useAccounts();
  return (
    <ul className="justify-start flex-col">
      {accounts?.map((account) => (
        <li key={account.id} className="w-full">
          <button
            type="button"
            onClick={() => {
              setActiveAccount(account);
              onClose();
            }}
            className={`flex gap-3 px-4 py-3 w-full justify-between ${activeAccount.id === account.id ? 'pointer-events-none' : 'hover:bg-primary-hoverBtn'}`}
          >
            <div className="flex gap-3">
              <div className="size-10 rounded-full overflow-hidden">
                <img src={account.avatar} alt={account.userName} />
              </div>
              <div className="text-[15px] flex flex-col items-start">
                <h5 className="font-bold">{account.fullName}</h5>
                <span className="text-gray-500">@{account.userName}</span>
              </div>
            </div>
            {activeAccount.id === account.id ? (
              <span className="size-5 text-green-500">
                <IoIosCheckmarkCircle />
              </span>
            ) : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
