import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import "video.js/dist/video-js.css";
import "../assets/css/base.css";
import "../locale";
import "../styles.css";
import AppContext, { initialAppContext } from "contexts/AppContext";
import { PopUpContextType } from "contexts/AppPopUpContext";
import MainLayoutMobile from "layouts/MainLayoutMobile";
import { AppProps } from "next/app";
import { Be_Vietnam_Pro } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import MainLayout from "../layouts/MainLayout";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

function Application({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();
  const [popUpValue, setPopUpValue] = useState<PopUpContextType>({
    isShow: false,
    title: "",
    children: null,
    bottom: null,
  });
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState("vi");
  const navigate = useRouter();

  return (
    <div className={beVietnamPro.className}>
      <AppContext.Provider value={initialAppContext}>
        <Head>
          <title>English Town trung tâm tiếng Anh cho người bận rộn</title>
        </Head>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AppContext.Provider>
    </div>
  );
}

export default Application;
