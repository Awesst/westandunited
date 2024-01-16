import React from "react";
import Layout from "../layout/Layout";
import NFT from "../img/NFT.png";
import ABI from "../ABI.js";
import Web3 from "web3";
import styles from "./MintingPage.module.css";

const ContractAddress = "0x1Cc111b25C8A3f330EfC612059eaF97CD03D0a8b";

const web3 = new Web3(window.ethereum);

web3.setProvider(window.ethereum);

const MintingPage = () => {
  const mintNFT = async () => {
    if (window.ethereum && window.ethereum.isConnected()) {
      const contract = new web3.eth.Contract(ABI, ContractAddress);

      const amountInWei = web3.utils.toWei("5000000000000000", "wei");
      const address = localStorage.getItem("userAccountLoggedIn");

      try {
        await contract.methods.mint(address).send({
          value: amountInWei,
          from: address,
        });
      } catch (error) {
        console.error("Error minting NFT:", error);
      }
    } else {
      console.error("Provider not connected");
    }
  };

  return (
    <Layout>
      <div className={styles.mintingpageContainer}>
        <div className={styles.headerText}>
          <h1>We Stand United NFT</h1>
        </div>
        <div className={styles.imgContainer}>
          <img src={NFT} alt="MintNFTPicture"></img>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.mintButton} onClick={mintNFT}>
            Mint
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default MintingPage;
