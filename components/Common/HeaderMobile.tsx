import Notification from "components/Notification";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useAppStore from "store/useAppStore";
import Navbar from "../Navbar";
import UserForm from "./UserForm";

const HeaderMobile = () => {
  const appStore = useAppStore();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    appStore.updateToggleMenu();
  };

  return (
    <header className={`relative z-[99] border-b`}>
      {/* <div>
        <div className="flex items-center justify-between px-4 py-4 lg:px-10">
          <div>
            <button
              type="button"
              className={`flex h-9 w-9 items-center justify-center text-2xl transition-all hover:text-primary lg:hidden`}
              onClick={() => handleToggleMenu()}
            >
              <span>
                <i className="bi bi-list"></i>
              </span>
            </button>
            <div className="flex items-center gap-8">
              <Link href="/" className="hidden lg:block">
                <Image
                  width={250}
                  height={50}
                  src={"/images/app_logo.svg"}
                  alt="English Town"
                  className="h-9 w-72 max-w-full"
                  priority
                />
              </Link>
              <Navbar />
            </div>
          </div>
          <Link href="/" className="inline-block lg:hidden">
            <Image
              width={128}
              height={24}
              src={require("../../assets/images/logo.svg").default}
              alt="English Town"
              className="h-6 w-32 max-w-full object-contain"
              priority
            />
          </Link>
          <div className="flex items-center gap-8">
            <Notification />
            <UserForm />
          </div>
        </div>
      </div> */}
      <div className="flex items-center justify-between">
        <button type="button" onClick={() => setIsOpenMenu((prev) => !prev)}>
          {isOpenMenu ? (
            <i className="bi bi-x-lg"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
          <div></div>
        </button>
      </div>
    </header>
  );
};

export default HeaderMobile;
