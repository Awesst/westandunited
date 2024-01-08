import React from "react";
import Layout from "../layout/Layout";
import BrowsePictureNFT from "../img/NFT.png";

const BrowsePage = () => {
  return (
    <div>
      <Layout></Layout>
      <h1>Browse Page</h1>
      <h2>Coming Soon!</h2>
      <h3>
        Here will you browse the NFT's. jag tänkte jag visar bara hur många som
        blir mintade
      </h3>
      <img src={BrowsePictureNFT} alt="BrowsePageNFT"></img>
    </div>
  );
};

export default BrowsePage;
