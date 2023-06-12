// import React, { useContext, useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import styles from "../module_styles/menu_drawer.module.css";
// import { AppStateContext, SelectedMenuContext } from "../pages/_app";
// import { i18n } from "../utils/language_util";
// import { BorderMenuButton, MainMenuButton } from "./app_button_component";
// import { useRouter } from "next/router";
// import { LanguageKeys } from "../constants/language_keys";
// import Link from "next/link";
// import { AppAvatar } from "./circle_avatar_component";
// import { StoreKeys } from "../constants/store_keys";

// export const Drawer = (props) => {
//   const { open, onClose } = props;
//   const {
//     drawer,
//     animate,
//     hidden,
//     overlay,
//     overlayOpen,
//     overlayHidden,
//   } = styles;
//   const listItem = [
//     { name: i18n(LanguageKeys.headerOnlineCourse), children: null, id: 1, },
//     { name: i18n(LanguageKeys.headerLibrary), children: [], id: 2, },
//     { name: i18n(LanguageKeys.headerSchedule), children: null, id: 3, }
//   ];
//   const listItemNonLogin = [
//     { name: i18n(LanguageKeys.headerLibrary), children: [], id: 2, },
//   ];
//   const appState = useContext(AppStateContext);
//   const menuSelected = useContext(SelectedMenuContext);
//   const selectecMenu = menuSelected.selectedMenu;
//   const router = useRouter();
//   const [isShowLogin, setShowLogin] = useState(true);

//   useEffect(() => {
//     const path = router.pathname;
//     if (path !== "/auth" && path !== "/schedule" && path != "/login" && path != "/courses") {
//       setShowLogin(true);
//     } else {
//       setShowLogin(false);
//     }
//   }, []);

//   function onTabClick(e) {
//     menuSelected.setSelectedMenu(e.id);
//     if (e.id == 3) {
//       router.replace("/schedule");
//     }
//     if (e.id == 2) {
//       // navigate.replace("/courses");
//     }
//     if (e.id == 1) {
//       router.replace("/online-course");
//     }
//     onClose();
//   }

//   return (
//     <>
//       <div
//         className={`${overlay} ${!open && overlayHidden} ${open && overlayOpen
//           }`}
//         onClick={onClose}
//       />
//       <div
//         tabIndex="-1"
//         className={`${drawer} ${open && animate} ${!open && hidden
//           } ${styles.right}`}
//       >
//         {appState.user != null ? <div className={styles.User}>
//           <AppAvatar url={appState.user.avatar} radius={15} title={appState.user.fullname?.substring(0, 1)} backgroundColor={"#8BC9BF"} />
//           <div>
//             <h4>{appState.user.fullname}</h4>
//             <p>{appState.user.student?.code ?? "Student"}</p>
//           </div>
//         </div> : isShowLogin ? <AuthentiationForm onClose={onClose} /> : null}
//         {(appState.user != null || isShowLogin) ? <div className={styles.Divider} /> : null}

//         <ul className={styles.ul} onMouseOut={(e) => {
//           if (appState.user != null) {
//             if (e.target.id != selectecMenu) {
//               e.target.style.color = "white";
//             }
//           } else {
//             e.target.style.color = "white";
//           }
//         }} onMouseOver={(e) => {
//           e.target.style.color = "#FABB18";
//         }}>
//           {appState.user != null ? listItem.map((e) => (
//             <li onClick={() => onTabClick(e)} id={e.id} key={e.name} style={{
//               color: (e.id == selectecMenu && appState.user != null) ? "#FABB18" : "white",
//             }}>{e.name}</li>
//           )) : listItemNonLogin.map((e) => (
//             <li onClick={() => onTabClick(e)} id={e.id} key={e.name} style={{
//               color: (e.id == selectecMenu && appState.user != null) ? "#FABB18" : "white",
//             }}>{e.name}</li>
//           ))}
//         </ul>
//         {appState.user !== null ? <div className={styles.SpacingMenu}>
//           <div className={styles.Divider} />
//           <Link className={styles.Link} href="/login" replace={true} onClick={() => {
//             localStorage.removeItem(StoreKeys.token);
//             localStorage.removeItem(StoreKeys.userId);
//             appState.setUser(null);
//             onClose();
//           }}>{i18n(LanguageKeys.logout)}</Link>
//         </div> : null}
//       </div>
//     </>
//   );
// };

// function AuthentiationForm(props) {
//   let navigate = useRouter();

//   return <div className={styles.AuthentiationForm}>
//     <BorderMenuButton padding="12px 16px" onClick={() => {
//       props.onClose();
//       navigate.replace("/auth");
//     }} title={i18n(LanguageKeys.login)} />
//     <div style={{ marginRight: "12px" }} />
//     <MainMenuButton padding="12px 16px" onClick={() => {
//       alert("Feature not support this version")
//     }} isActive={true} title={i18n(LanguageKeys.signup)} />
//   </div>
// }

// Drawer.propTypes = {
//   open: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired
// };
