"use client";
import { Bell, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Notfication } from "@/components/header/Notfication";

const Header = () => {
  const menuItems = [
    { label: "Crypto", href: "/crypto" },
    { label: "Forex", href: "/forex" },
    { label: "Commodity", href: "/commodity" },
    { label: "Tech Trends", href: "/tech-trends" },
    { label: "World Politics", href: "/world-politics" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-[1280px] w-[90%] mx-auto flex h-20 justify-between items-center">  
        <div className="flex flex-1 items-center gap-x-4 sm:gap-x-5 lg:gap-x-7 font-semibold text-lg">
         <Link href="/">DA</Link>
        </div>
        <nav className="hidden lg:flex justify-center flex-[2]">
          <ul className="flex space-x-2">
            {menuItems.map((item) => (
              <li key={item.label} className="relative menu-item flex">
                <Link
                  href={item.href}
                  className="flex items-center rounded-full px-4 py-2.5 text-sm font-medium whitespace-nowrap text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 lg:text-[15px] xl:px-5 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <ul className="gap-x-2 flex item-center justify-center">
            <li className="flex items-center justify-center rounded-full text-sm font-medium whitespace-nowrap text-neutral-700 hover:bg-neutral-100 w-10 h-10 cursor-pointer"><Search size={20} /></li>
            <Notfication/>
            <li className="flex items-center justify-center rounded-full p-1 hover:bg-neutral-100 hover:text-neutral-900 cursor-pointer ">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
