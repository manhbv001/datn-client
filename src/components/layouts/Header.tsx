'use client';
import { AuthContext } from '@/contexts/auth/AuthProvider';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { FaBell } from "react-icons/fa6";
import { MobileNavigator, Navigator } from './Navigator';
const Header = () => {
  const { user, loading } = useContext(AuthContext);

  return (
    <div className="border-b shadow-md relative z-1000">
      <div className="container mx-auto flex items-center">
        <MobileNavigator />
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/datn-logo.png"
              width={120}
              height={120}
              alt="DATN logo"
            />
          </Link>
        </div>
        <div className="ml-auto">
          <Navigator />
        </div>
        <div>
          <button className="pt-[2px]">
          <FaBell />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
