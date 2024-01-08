import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/browse">Browse Collection</a>
        </li>
        <li>
          <a href="/mint">Mint NFT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
