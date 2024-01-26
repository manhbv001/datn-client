'use client';
import { ACCOUNT_MENU } from '@/app/(feature)/data';
import { Popover } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { BsThreeDots } from 'react-icons/bs';

export interface IAccountMenuProps {}
const AccountMenu: FC<IAccountMenuProps> = () => {
  const router = useRouter();

  const AccountMenu = (
    <ul>
      {ACCOUNT_MENU.map((item) => (
        <li className="last:border-none" key={`account_menu_item_${item.path}`}>
          <Link
            className={`text-[var(--text-color)] py-2 px-2 min-w-[120px] block`}
            href={item.path}
            onClick={async (event) => {
              if (item.action) {
                event.preventDefault();
                await item.action();
                router.push(item.path);
              }
            }}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
  return (
    <Popover trigger="click" content={AccountMenu}>
      <div className="flex items-center h-full">
        <button>
          <BsThreeDots />
        </button>
      </div>
    </Popover>
  );
};

export default AccountMenu;
