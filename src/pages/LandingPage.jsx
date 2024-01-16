import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import LandingPagePicture from "../img/NFT.png";
import Footer from "../layout/Footer";
import styles from "./LandingPage.module.css";

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
    <>
      <Layout onDisconnectWallet={handleDisconnectWallet} account={account}>
        <div className={styles.landingPageContainer}>
          <div className={styles.imgContainer}>
            <img src={LandingPagePicture} alt="landing page" />
          </div>
          <div className={styles.connectMintButton}>
            <button onClick={handleClick}>{buttonText}</button>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default LandingPage;
