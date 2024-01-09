import React from "react";

const Navbar = ({ onDisconnectWallet, account }) => {
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
      {account && (
        <div>
          <button onClick={onDisconnectWallet}>
            Disconnect Wallet {String(account).slice(-6)}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
