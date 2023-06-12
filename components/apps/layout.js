import styles from "../../module_styles/layout.module.css";
import { StoreKeys } from "../../constants/store_keys";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
// import { Header } from "./header";
import Header from "../Common/Header";

export function Layout(props) {
  const navigate = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleSessionChange);
      return () => {
        window.removeEventListener("storage", handleSessionChange);
      };
    }
  }, []);

  function handleSessionChange(event) {
    if (event.key === StoreKeys.token && event.oldValue !== event.newValue) {
      navigate.replace("/login", {
        replace: true,
      });
    }
  }

  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles.Body}>{props.children}</div>
    </div>
  );
}
