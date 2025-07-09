"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Navbar = () => {
  const Router = useRouter();
  const pathname = usePathname();

  const NavBarItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/About" },
    { name: "Contact Us", path: "/Contact" },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className={`max-w-6xl mx-auto flex gap-60 lg:gap-10 p-4 justify-around`}>
        
        {/* Search Bar */}
        <div className="hidden lg:block">
        <span className="absolute lg:top-7 lg:left-45">
            <Image
                src="search.svg"
                alt="Search Icon"
                width={20}
                height={20}
                className="text-gray-500" 
            />
        </span>
            <input
                type="text"
                placeholder="     Search"
                className="ml-10 border border-[#2E2B28] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D6C5A0] transition duration-300"
            />
        </div>
        
        {/* Logo Section */}
        <Image
          src="Donai.svg"
          alt="Donai Gems Logo"
          width={500}
          height={200}
          className="w-30 lg:w-35 h-auto cursor-pointer"
          onClick={() => Router.push("/")}
        />

        {/* Right Section */}
        <div className={`hidden lg:flex gap-3 py-2 ${mulish.className}`}>
          <button className="px-3 item-center text-md text-[#2E2B28] font-light cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300">
            Our Collection
          </button>
          <button className="px-3 item-center text-md text-[#2E2B28] font-light cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300">
            Book an Appointment
          </button>
        </div>

        {/* Hamburger Logo */}
        <div className="lg:hidden flex gap-4">
          <button onClick={() => setMenuOpen(!isMenuOpen)}>
            <HiOutlineMenu size={30} />
          </button>
        </div>
      </div>

      <div className="w-full border-t border-[#2E2B28] opacity-80 " />

      <div className="flex flex-row items-center justify-center ">
            {/* Middle Section */}
        <ul className="hidden lg:flex gap-[40px] text-sm">
          {NavBarItems.map((item) => (
            <li
              key={item.path}
              onClick={() => Router.push(`${item.path}`)}
              className={`py-3 relative cursor-pointer ${mulish.className} text-md ${
                pathname === `${item.path}`
                  ? "text-[#D6C5A0]"
                  : "text-[#2E2B28] hover:text-[#D6C5A0]"
              }`} style={{ fontWeight: 300 }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )} */}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-white z-50 transform transition-all duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-base">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <HiOutlineX size={30} />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col ml-5 gap-3 text-lg">
          {NavBarItems.map((item) => (
            <li
              key={item.path}
              onClick={() => Router.push(`${item.path}`)}
              className={`py-3 relative cursor-pointer ${
                pathname === `${item.path}`
                  ? "text-[#D6C5A0]"
                  : "text-black hover:text-[#D6C5A0]"
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
