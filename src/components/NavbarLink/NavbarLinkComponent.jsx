import React from "react";
import styles from "./NavbarLinkComponent.module.css";

export const NavbarLinkComponent = ({ text, href }) => {
  return (
    <a className={styles.textColor} href={href}>
      {text}
    </a>
  );
};
