"use client";

import React from "react";
import { signOut, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const { status, data } = useSession();

  const handleLoginClick = () => signIn();

  const handleLogoutClick = () => (setMenuIsOpen(false), signOut());

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] rounded-3xl flex justify-between items-center">
      <div className="relative h-[32px] w-[182px]">
        <Image
          src="/logotipo.png"
          alt="logo da full stack trip"
          fill
          sizes="(max-width: )"
        />
      </div>

      {status !== "authenticated" && (
        <button
          onClick={handleLoginClick}
          className="text-primary text-sm font-semibold"
        >
          Sign in
        </button>
      )}

      {status === "authenticated" && data.user && (
        <div className="border-grayLight flex items-center gap-5 border border-solid rounded-3xl pl-4 py-1 pr-2 relative">
          <AiOutlineMenu
            onClick={handleMenuClick}
            size={16}
            className="cursor-pointer"
          />

          <Image
            onClick={handleMenuClick}
            className="cursor-pointer rounded-full shadow-md"
            height={30}
            width={30}
            src={data.user.image!}
            alt={data.user.name!}
          />

          {menuIsOpen && (
            <div
              className="absolute top-12 left-0 w-full h-full
           bg-white rounded-3xl shadow-md flex flex-col justify-center 
           items-center border border-grayLight 
           animate-in zoom-in slide-in-from-top-8 duration-400 "
            >
              <button
                onClick={handleLogoutClick}
                className="text-primary text-sm font-semibold"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
