// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract AntiCyberBullyingNFT is ERC721, Ownable {
    uint256 public _tokenIdCounter;
    

    // Constructor
    constructor(string memory name, string memory symbol) ERC721(name, symbol) Ownable(msg.sender) {
    }

    // Mint new NFT
    function mint(address to) external payable {
         require(msg.value >= 5000000000000000, "Insufficient funds to mint");
        _safeMint(to, _tokenIdCounter);
        _tokenIdCounter++;
    }

     function tokenURI(uint256 tokenId) public view override returns (string memory) {
        return "ipfs://QmTT3LFJqw1j3ZkgYnBgTGj7bD3uwXKh2qwqG2p3k5ZtCz";
    }

    function  withdrawal() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
}