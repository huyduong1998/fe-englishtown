import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { LanguageKeys } from "../../constants/language_keys";
import { StoreKeys } from "../../constants/store_keys";
import styles from "../../module_styles/header.module.css";
import {
  AppStateContext,
  SelectedMenuContext
} from "../../pages/_app";
import { getLanguageConsumer, i18n } from "../../utils/language_util";
import { ScreenSizeMode, useViewPort } from "../../utils/use_app_size";
import { BorderMenuButton, MainMenuButton } from "../app_button_component";
import { AppAvatar } from "../circle_avatar_component";
import { Diviver } from "../divider_component";
import { DropdownPopop, FlagDropDown } from "../drop_down_component";

export function Header() {
  const viewPort = useViewPort();
  let navigate = useRouter();
  const appState = useContext(AppStateContext);
  const selectedMenuContext = useContext(SelectedMenuContext);
  const selectecMenu = selectedMenuContext.selectedMenu;
  const listItem = [
    { name: i18n(LanguageKeys.headerOnlineCourse), children: null, id: 1 },
    { name: i18n(LanguageKeys.headerLibrary), children: [], id: 2 },
    { name: i18n(LanguageKeys.headerSchedule), children: null, id: 3 },
  ];

  const listItemNonLogin = [
    { name: i18n(LanguageKeys.headerLibrary), children: [], id: 2 },
  ];

  function onTabClick(e) {
    selectedMenuContext.setSelectedMenu(e.id);
    if (e.id == 3) {
      navigate.replace("/schedule");
    }
    if (e.id == 1) {
      navigate.replace("/online-course");
    }
  }

  if (viewPort == ScreenSizeMode.web) {
    return (
      <div className={styles.HeaderForm}>
        <div className={styles.HeaderMenu}>
          <Image
            style={{
              width: "161px",
            }}
            src={require("../../assets/images/logo.svg").default}
            alt="logo"
            onClick={() => {
              selectedMenuContext.setSelectedMenu(-2);
              navigate.replace("/home");
            }}
          />
          <ul
            onMouseOut={(e) => {
              if (appState.user != null) {
                if (e.target.id != selectecMenu) {
                  e.target.style.color = "#335B71";
                }
              } else {
                e.target.style.color = "#335B71";
              }
            }}
            onMouseOver={(e) => {
              e.target.style.color = "#FABB18";
            }}
          >
            {appState.user != null
              ? listItem.map((e) => (
                  <li
                    onClick={() => onTabClick(e)}
                    id={e.id}
                    key={e.name}
                    style={{
                      color:
                        e.id == selectecMenu && appState.user != null
                          ? "#FABB18"
                          : "#335B71",
                    }}
                  >
                    {e.name}{" "}
                    {e.children !== null ? (
                      <Image
                        style={{ height: 20, width: 20 }}
                        src={
                          require("../../assets/icons/icon_down.svg").default
                        }
                        alt="icon_down"
                      />
                    ) : null}
                  </li>
                ))
              : listItemNonLogin.map((e) => (
                  <li
                    onClick={() => onTabClick(e)}
                    id={e.id}
                    key={e.name}
                    style={{
                      color:
                        e.id == selectecMenu && appState.user != null
                          ? "#FABB18"
                          : "#335B71",
                    }}
                  >
                    {e.name}{" "}
                    {e.children !== null ? (
                      <Image
                        style={{ height: 20, width: 20 }}
                        src={
                          require("../../assets/icons/icon_down.svg").default
                        }
                        alt="icon_down"
                      />
                    ) : null}
                  </li>
                ))}
          </ul>
          <UserForm appState={appState} />
        </div>
        <Diviver />
      </div>
    );
  } else {
    const languages = [
      { code: "vi", title: "VN" },
      { code: "en", title: "EN" },
    ];

    const lgConsumer = getLanguageConsumer();

    const currentLanguage = lgConsumer.language;

    // const drawer = useContext(DrawerMenuContext);

    return (
      <div className={styles.HeaderForm}>
        <div className={styles.HeaderMobile}>
          <Image
            style={{
              width: "120px",
            }}
            src={require("../../assets/images/logo.svg").default}
            alt="logo"
            onClick={() => {
              selectedMenuContext.setSelectedMenu(-2);
              navigate.replace("/home");
            }}
          />
          <div className={styles.HeaderMobileSpacing} />
          <FlagDropDown
            values={languages}
            valueOption={(e) => e.code}
            value={currentLanguage}
            onChange={(code) => {
              lgConsumer.setLanguage(code);
            }}
            builder={(e) => {
              let flag;
              if (e.code == "vi") {
                flag = "\ud83c\uddfb\ud83c\uddf3";
              } else {
                flag = "\uD83C\uDDEC\uD83C\uDDE7";
              }

              return `${flag}  ${e.title}`;
            }}
          />
          <Image
            width={40}
            style={{ color: "red" }}
            src={require("../../assets/icons/menu.svg").default}
            alt="menu"
          />
        </div>
        <Diviver />
      </div>
    );
  }
}

function UserForm(props) {
  const appState = props.appState;
  const user = appState.user;
  let navigate = useRouter();
  const [isShowLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const path = navigate.pathname;

    if (
      path !== "/auth" &&
      path !== "/schedule" &&
      path != "/login" &&
      path != "/courses"
    ) {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
  }, [navigate.pathname]);

  function logout() {
    localStorage.removeItem(StoreKeys.token);
    localStorage.removeItem(StoreKeys.userId);

    appState.setUser(null);

    navigate.replace("/login");
  }

  const lgConsumer = getLanguageConsumer();

  const currentLanguage = lgConsumer.language;

  const languages = [
    { code: "vi", title: i18n(LanguageKeys.vietnam) },
    { code: "en", title: i18n(LanguageKeys.english) },
  ];

  return (
    <div className={styles.UserForm}>
      <FlagDropDown
        values={languages}
        valueOption={(e) => e.code}
        value={currentLanguage}
        onChange={(code) => {
          lgConsumer.setLanguage(code);
        }}
        builder={(e) => {
          let flag;
          if (e.code == "vi") {
            flag = "\ud83c\uddfb\ud83c\uddf3";
          } else {
            flag = "\uD83C\uDDEC\uD83C\uDDE7";
          }

          return `${flag}  ${e.title}`;
        }}
      />
      {user != null ? (
        <div className={styles.User}>
          <AppAvatar
            url={user.avatar}
            radius={20}
            title={user.fullname?.substring(0, 1)}
            backgroundColor={"#8BC9BF"}
          />
          <p>{user.fullname}</p>
          <DropdownPopop
            values={[i18n(LanguageKeys.logout), ""]}
            builder={(key) => <p>{key}</p>}
            valueOption={(e) => e}
            onChange={() => logout()}
            value=""
          />
        </div>
      ) : isShowLogin ? (
        <AuthentiationForm />
      ) : null}
    </div>
  );
}

function AuthentiationForm() {
  let navigate = useRouter();

  return (
    <div className={styles.AuthentiationForm}>
      <BorderMenuButton
        padding="12px 16px"
        onClick={() => {
          navigate.replace("/auth");
        }}
        title={i18n(LanguageKeys.login)}
      />
      <div style={{ marginRight: "12px" }} />
      <MainMenuButton
        padding="12px 16px"
        onClick={() => {
          alert("Feature not support this version");
        }}
        isActive={true}
        title={i18n(LanguageKeys.signup)}
      />
    </div>
  );
}
