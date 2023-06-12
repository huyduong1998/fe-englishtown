import Header from "components/Common/Header";
import HeaderMobile from "components/Common/HeaderMobile";
import { LOCAL_STORAGE_KEYS } from "constants/token";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUserProfile } from "services/user";
import useAppStore from "store/useAppStore";

interface Props {
  children: ReactNode;
}

const REDIRECT_ROUTE = ["/online-course", "/schedule"];

const MainLayoutMobile: FC<Props> = (props) => {
  const router = useRouter();
  const appStore = useAppStore();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleSessionChange);
      return () => {
        window.removeEventListener("storage", handleSessionChange);
      };
    }
  }, []);

  useEffect(() => {
    onGetUserProfile();
  }, [router]);

  const onGetUserProfile = async () => {
    try {
      const response = await getUserProfile();
      const profile = await response.data;
      appStore.updateUserProfile(profile);
      if (router.pathname.includes("/login")) {
        router.push("/online-course");
      }
    } catch (e) {
      const isCheck = REDIRECT_ROUTE.find((item) =>
        router.pathname.includes(item)
      );
      if (isCheck) {
        router.push("/login");
      }
    }
  };

  function handleSessionChange(event: StorageEvent) {
    if (
      event.key === LOCAL_STORAGE_KEYS.token &&
      event.oldValue !== event.newValue
    ) {
      router.replace("/login");
    }
  }

  return (
    <div>
      <div className="min-h-screen w-full select-none bg-[#FAFBFC]">
        <HeaderMobile />
        <div className="">{props.children}</div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MainLayoutMobile;
