// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {AntiCyberBullyingNFT} from "../src/AntiCyberBullyingNFT.sol";

contract DeployNFT is Script {
    function run() public returns (AntiCyberBullyingNFT) {
        vm.broadcast();
        AntiCyberBullyingNFT antiCyberBullyingNFT = new AntiCyberBullyingNFT("We Stand United", "WSU");
        vm.broadcast();
        return antiCyberBullyingNFT;
    }
}
