import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import BrowsePictureNFT from "../img/NFT.png";
import ABI from "../ABI.js";
import Web3 from "web3";
import styles from "./BrowsePage.module.css";

const ContractAddress = "0x1Cc111b25C8A3f330EfC612059eaF97CD03D0a8b";

const BrowsePage = () => {
  const [tokenIdCounter, setTokenIdCounter] = useState(0);

  const fetchTokenIdCounter = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(ABI, ContractAddress);

      const tokenIdCounterValue = await contract.methods
        ._tokenIdCounter()
        .call();

      setTokenIdCounter(parseInt(tokenIdCounterValue));
    } catch (error) {
      console.error("Error fetching tokenIdCounter:", error);
    }
  };

  useEffect(() => {
    fetchTokenIdCounter();
  }, []);

  return (
    <Layout>
      <div className={styles.browseContainer}>
        <div className={styles.browsePicture}>
          <img src={BrowsePictureNFT} alt="browse page" />
        </div>
        <div className={styles.browseText}>
          <h1>
            Our community has Minted: {tokenIdCounter} NFT's, on the war against
            Anti-cyberbullying.
            <br />
            <br />
            Thank you for your contribution.
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default BrowsePage;
