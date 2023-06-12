import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { NAVBAR_DATA } from "constants/navbar";
import NavItemDropdown from "components/Navbar/NavItemDropdown";
import { NavbarType } from "types/navbar";
import useAppStore from "store/useAppStore";

const Navbar = () => {
  const router = useRouter();
  const appStore = useAppStore();
  const isCurrentRouter = (text: string) => {
    return router.pathname.includes(text);
  };

  return (
    <nav
      className={`absolute left-0 top-16 z-[999] w-full bg-white py-10 lg:static lg:bg-transparent lg:py-0 ${
        appStore.isToggleMenu ? "block lg:block" : "hidden lg:block"
      }`}
    >
      <ul className="block items-center lg:flex">
        {NAVBAR_DATA.map((item: NavbarType) => {
          if (item.children) {
            return (
              <li key={item.id}>
                <NavItemDropdown options={item.children} title={item.title} />
              </li>
            );
          }
          return (
            <li key={item.id}>
              <Link
                href={item.url || "/"}
                className={`block px-4 py-2 text-sm font-semibold hover:text-primary ${
                  isCurrentRouter(item.prefix)
                    ? "text-primary"
                    : "text-blue visited:text-blue"
                }`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
