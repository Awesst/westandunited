import React from "react";
import Layout from "../layout/Layout";
import NFT from "../img/NFT.png";

const MintingPage = () => {
  return (
    <div>
      <Layout></Layout>
      <h1>Minting Page</h1>
      <h2>This is where you will be minting the NFT</h2>
      <img src={NFT} alt="MintNFTPicture"></img>
      <button>Mint</button>
    </div>
  );
};

export default MintingPage;
