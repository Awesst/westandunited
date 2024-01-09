import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Navbar
        onDisconnectWallet={props.onDisconnectWallet}
        account={props.account}
      />
    </div>
  );
};

export default Layout;
