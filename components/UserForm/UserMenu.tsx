import { LOCAL_STORAGE_KEYS } from "constants/token";
import { useRouter } from "next/router";
import { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useAppStore from "store/useAppStore";
import Avatar from "./Avatar";

const UserMenu: FC = () => {
  const router = useRouter();
  const { userProfile: user, ...appStore } = useAppStore();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    document.addEventListener("click", handleClickContext);

    return () => {
      document.removeEventListener("click", handleClickContext);
    };
  }, []);

  const handleClickContext = (e: any) => {
    if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
      setIsOpenMenu(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.token);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.userId);
    appStore.updateUserProfile(null);
    setIsOpenMenu(false);
    router.push("/login", undefined, { shallow: true });
  };

  if (!user) {
    return null;
  }

  return (
    <div className="relative select-none text-sm text-blue" ref={userMenuRef}>
      <div
        className="flex cursor-pointer items-center gap-2"
        onClick={() => setIsOpenMenu((prev) => !prev)}
      >
        <Avatar avatar_url={user.avatar_url} name={user.fullname} />
        <div className="hidden items-center gap-2 lg:flex">
          <p className="text-sm font-semibold">{user.fullname}</p>
          <span>
            <i className="bi bi-chevron-down"></i>
          </span>
        </div>
      </div>
      <div
        className={`absolute right-0 top-full z-10 w-52 min-w-max overflow-hidden rounded-lg border bg-white shadow-lg shadow-black/10 transition-all lg:w-full ${
          isOpenMenu ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          onClick={() => logout()}
          className="cursor-pointer px-4 py-3 text-sm font-semibold transition-all hover:text-primary"
        >
          {t("auth_logout")}
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
