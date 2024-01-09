import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import LandingPagePicture from "../img/NFT.png";
import Footer from "../layout/Footer";

const LandingPage = () => {
  const [buttonText, setButtonText] = useState(
    localStorage.getItem("userAccountLoggedIn") ? "Mint" : "Connect Your Wallet"
  );
  const Navigate = useNavigate();
  const [account, setAccount] = useState(() => {
    return localStorage.getItem("userAccountLoggedIn") || null;
  });

  const HandleConnectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setAccount(accounts[0]);
        setButtonText("Mint");

        localStorage.setItem("userAccountLoggedIn", accounts[0]);

        console.log(accounts[0]);
      } else {
        alert("Please install MetaMask");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisconnectWallet = () => {
    setAccount(null);
    setButtonText("Connect Your Wallet");
    localStorage.removeItem("userAccountLoggedIn");
  };

  const handleMintClick = () => {
    Navigate("/mint");
  };

  const handleClick = () => {
    if (buttonText === "Connect Your Wallet") {
      HandleConnectWallet();
    } else if (buttonText === "Mint") {
      handleMintClick();
    }
  };

  return (
    <div>
      <Layout
        onDisconnectWallet={handleDisconnectWallet}
        account={account}
      ></Layout>
      <h1>Det ska vara enkel landingpage men bara detta tänker jag</h1>
      <img src={LandingPagePicture} alt="landing page" />
      <button onClick={handleClick}>{buttonText}</button>
      <Footer />
    </div>
  );
};

export default LandingPage;
