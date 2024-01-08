import { React, useState } from "react";
import Layout from "../layout/Layout";
import LandingPagePicture from "../img/NFT.png";

const LandingPage = () => {
  const [buttonText, setButtonText] = useState("Connect Your Wallet");

  const HandleConnectWallet = () => {
    // add logic for log in to wallet
  };

  return (
    <div>
      <Layout></Layout>
      <h1>Det ska vara enkel landingpage men bara detta tänker jag</h1>
      <img src={LandingPagePicture} alt="landing page" />
      <button onClick={HandleConnectWallet}>{buttonText}</button>
    </div>
  );
};

export default LandingPage;
