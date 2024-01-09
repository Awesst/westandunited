// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {AntiCyberBullyingNFT} from "../src/AntiCyberBullyingNFT.sol";

contract CounterTest is Test {
    AntiCyberBullyingNFT public antiCyberBullyingNFT;

    function setUp() public {
        antiCyberBullyingNFT = new AntiCyberBullyingNFT("AntiCyberBullyingNFT", "ACBNFT");
    }
}
