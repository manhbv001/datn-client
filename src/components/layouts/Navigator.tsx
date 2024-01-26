'use client';
import { HEADER_MENU } from '@/app/(feature)/data';
import fonts from '@/assets/fonts';
import { Drawer } from 'antd';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { FC, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaChevronDown } from 'react-icons/fa6';

export interface INavigatorProps {}
export const Navigator: FC<INavigatorProps> = () => {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <ul className="hidden md:flex items-center">
      {HEADER_MENU.map((item) => {
        const isActive = activeSegment === item.target;
        return (
          <li
            key={`header_item_${item.path}`}
            className="group mx-4 relative z-30 py-4"
          >
            <Link
              className={
                fonts.raleway.className +
                ` font-semibold hover:text-[var(--primary-color)] ${
                  isActive ? 'text-[var(--primary-color)] drop-shadow-sm' : ''
                } transition-all flex items-center`
              }
              href={item.path}
            >
              {item.label}
              {item.subItems && (
                <FaChevronDown size={12} style={{ marginLeft: 8 }} />
              )}
            </Link>
            {item.subItems && (
              <ul className="bg-white shadow-sm absolute z-50 invisible group-hover:visible top-10 w-[220px] -left-2 pt-1">
                {item.subItems.map((subItem) => (
                  <li key={subItem.target}>
                    <Link
                      className="py-2 px-3 block border-b hover:text-[var(--primary-color)]"
                      href={subItem.path}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export const MobileNavigator: React.FC = () => {
  const [open, setOpen] = useState(false);
  const activeSegment = useSelectedLayoutSegment();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={showDrawer}
        className="inline-block md:hidden mr-4 opacity-50"
      >
        <AiOutlineMenu size={24} />
      </button>
      <Drawer
        bodyStyle={{ padding: 0 }}
        placement="left"
        onClose={onClose}
        open={open}
      >
        <ul className="flex flex-col">
          {HEADER_MENU.map((item) => {
            const isActive = activeSegment === item.target;
            return (
              <li key={`header_item_${item.path}`} className="mx-4">
                <Link
                  className={`block py-3 px-1 border-b font-semibold hover:text-[var(--primary-color)] ${
                    isActive ? 'text-[var(--primary-color)] drop-shadow-sm' : ''
                  } transition-all`}
                  href={item.path}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </Drawer>
    </>
  );
};
