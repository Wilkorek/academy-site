"use client";

import React, { useState } from "react";
import { MdMenu, MdClose, MdSchool } from "react-icons/md"; // Dodano MdClose
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import ResponsiveMenu from "./ResponsiveMenu";

interface MenuItem {
  id: number;
  title: string;
  link: string;
}

const NavbarMenu: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Plans",
    link: "/plans",
  },
  {
    id: 3,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    title: "History",
    link: "/history",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-4 md:pt-4">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            {/* Akademia Szachowa napis */}
            <div className="flex text-2xl items-center gap-2 font-averia font-bold uppercase">
              <p className="text-primary">Akademia</p>
              <p className="text-secondary">Szachowa</p>
              <MdSchool className="text-green-800" />
            </div>
            {/* Wilkorek logo napis */}
            <div className="w-full flex justify-center font-semibold">
              <p className="text-amber-400 text-3xl font-caveat mt-2">
                Wilkorek
              </p>
            </div>
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 text-gray-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="font-semibold">
                  <Link
                    href={menu.link}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#2d6d92]"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
              <button className="text-2xl hover:text-red-500 rounded-full duration-200">
                <AiOutlineHeart />
              </button>
            </ul>
          </div>

          {/* Mobile hamburger Menu Section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <MdClose className="text-4xl text-red-600" /> // Ikona zamknięcia
            ) : (
              <MdMenu className="text-4xl text-primary" /> // Ikona hamburgera
            )}
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
