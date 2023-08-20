"use client";

import React from "react";
import { signOut, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const { status, data } = useSession();

  const handleLoginClick = () => signIn();

  const handleLogoutClick = () => (setMenuIsOpen(false), signOut());

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  const handleTripClick = () => {};

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] rounded-3xl flex justify-between items-center">
      <Link href="/">
        <div className="relative h-[32px] w-[182px]">
          <Image
            src="/logotipo.png"
            alt="logo da full stack trip"
            fill
            sizes="(max-width: )"
          />
        </div>
      </Link>

      {status !== "authenticated" && (
        <button
          onClick={handleLoginClick}
          className="text-primary text-sm font-semibold"
        >
          login
        </button>
      )}

      {status === "authenticated" && data.user && (
        <div className="border-grayLight flex items-center gap-5 pl-4 py-1 pr-2 relative">
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
              className="z-50 absolute top-12 left-0 w-full h-[100px]
           bg-white rounded-xl shadow-md flex flex-col justify-center 
           items-center border border-grayLight 
           animate-in zoom-in slide-in-from-top-8 duration-400"
            >
              <Link href="/my-trips" onClick={() => setMenuIsOpen(false)}>
                <button className="text-primary text-sm font-semibold pb-2 border-grayLight border-b border-solid w-full text-center">
                  Minhas viagens
                </button>
              </Link>

              <button
                onClick={handleLogoutClick}
                className="text-primary text-sm font-semibold pt-2"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
