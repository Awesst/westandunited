import React from "react";
import styles from "./NavbarLinkComponent.module.css";
import { NavLink } from "react-router-dom";

export const NavbarLinkComponent = ({ text, href }) => {
  return (
    <NavLink className={styles.textColor} to={href}>
      {text}
    </NavLink>
  );
};
