import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import { NavbarType } from "types/navbar";

interface NavItemDropdownType {
  options: NavbarType[];
  title: string;
}

const NavItemDropdown: FC<NavItemDropdownType> = ({ options, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickContext);

    return () => {
      document.removeEventListener("click", handleClickContext);
    };
  }, []);

  const handleClickContext = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={"cursor-pointer"}
      >
        <p
          className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold text-blue transition-all hover:text-primary ${
            isOpen ? "text-primary" : "text-blue"
          }`}
        >
          {title}
          <span
            className={`transition-all ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <i className="bi bi-chevron-down"></i>
          </span>
        </p>
      </div>
      <div
        className={`lg:absolute left-0 top-full z-50 min-w-[150px] rounded-lg bg-white lg:shadow-md lg:shadow-black/10 transition-all ${
          isOpen ? "visible opacity-100 block" : "hidden lg:block invisible opacity-0"
        }`}
      >
        <ul className="pl-10 lg:pl-0">
          {options.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  href={item.url || "/"}
                  className="block px-4 py-3 text-sm font-semibold text-blue transition-all hover:text-primary"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavItemDropdown;
