import React from "react";
import { NavbarLinkComponent } from "../components/NavbarLink/NavbarLinkComponent";
import styles from "./Navbar.module.css";

const Navbar = ({ onDisconnectWallet, account }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarLinksList}>
        <li>
          <NavbarLinkComponent text={"Home"} href="/" />
        </li>
        <li>
          <NavbarLinkComponent text={"About"} href="/about" />
        </li>
        <li>
          <NavbarLinkComponent text={"Browse Collection"} href="/browse" />
        </li>
        <li>
          <NavbarLinkComponent text={"Mint NFT"} href="/mint" />
        </li>
      </ul>

      {account && (
        <div className={styles.navbarWallet}>
          <button onClick={onDisconnectWallet} className={styles.walletButton}>
            Disconnect Wallet {String(account).slice(-6)}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
