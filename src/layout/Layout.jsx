import React from "react";
import Navbar from "./Navbar";
import { Content } from "./Content";

const Layout = (props) => {
  return (
    <div>
      <Navbar
        onDisconnectWallet={props.onDisconnectWallet}
        account={props.account}
      />
      <Content>{props.children}</Content>
    </div>
  );
};

export default Layout;
