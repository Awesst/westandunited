const { expect } = require("chai");

describe("AntiCyberBullyingNFT", function () {
  let AntiCyberBullyingNFT;
  let antiCyberBullyingNFT;
  let owner;
  let addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();

    const AntiCyberBullyingNFTFactory = await ethers.getContractFactory(
      "AntiCyberBullyingNFT"
    );
    antiCyberBullyingNFT = await AntiCyberBullyingNFTFactory.deploy(
      "AntiCyberBullyingNFT",
      "ACBNFT",
      "https://baseURI.com/"
    );
    await antiCyberBullyingNFT.deployed();
  });

  it("Should mint a new NFT", async function () {
    const initialSupply = await antiCyberBullyingNFT.totalSupply();
    await antiCyberBullyingNFT.mint(addr1.address);

    const newSupply = await antiCyberBullyingNFT.totalSupply();
    expect(newSupply).to.equal(initialSupply.add(1));

    const ownerOfNewToken = await antiCyberBullyingNFT.ownerOf(initialSupply);
    expect(ownerOfNewToken).to.equal(addr1.address);
  });
});
