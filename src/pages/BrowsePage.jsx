import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import BrowsePictureNFT from "../img/NFT.png";
import ABI from "../ABI.js";
import Web3 from "web3";

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
    <div>
      <Layout></Layout>
      <img src={BrowsePictureNFT} alt="browse page" />
      <h1>Total Minted NFTs: {tokenIdCounter}</h1>
    </div>
  );
};

export default BrowsePage;
