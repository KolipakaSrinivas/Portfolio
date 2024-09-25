"use client";
import { Squash as Hamburger, Squash } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Navbar = () => {
  const pathname = usePathname();
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
      once: true // Whether animation should happen only once
    });
  }, []);

  return (
    <nav className="fixed h-[55px] top-0 left-0 right-0 flex px-[7.5rem]  items-center justify-between py-2 bg-[#2c3036] z-10">
      <div className="flex gap-2 items-end justify-end text-[#e5e5e5] text-base"
      data-aos="fade-right"
      >
        <div
          className="flex items-center space-x-4"
        >
          <Link href="/">
            <img
              src="/react.svg"
              className="w-9 hover:animate-spin transition duration-200 ease-in-out"
              alt="React Logo"
            />
          </Link>
        </div>
        <p className="text-[#c778dd] text-sm ">Npm run</p>
        <div className="h-6 overflow-hidden relative">
          <div className="animation absolute top-0 w-full">
            <div className="h-6 flex items-center justify-center font-bold text-2xl">
              start
            </div>
            <div className="h-6 flex items-center justify-center font-bold text-2xl">
              build
            </div>
            <div className="h-6 flex items-center justify-center font-bold text-2xl">
              dev
            </div>
          </div>
        </div>
      </div>

      <ul className=" flex text-white gap-5" data-aos="fade-left">
        {["Home", "About", "Projects", "Contact"].map((item, index) =>
          <li key={index}>
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`${pathname ===
              (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                ? "text-white"
                : "text-[#ABB2BF]"} hover:text-white font-semibold`}
            >
              <span className="text-[#C778DD] font-bold mr-1">#</span>
              {item}
            </Link>
          </li>
        )}
      </ul>

      <div className="flex md:hidden text-white">
        <Squash />
      </div>
    </nav>
  );
};

export default Navbar;
