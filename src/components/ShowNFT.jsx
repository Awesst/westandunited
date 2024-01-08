export default function MintNFT({ contract, tokenId }) {
  const { data: nft, isLoading, error } = useNFT(contract, tokenId);
  console.log(nft);

  //Render the NFT onto the UI
  if (isLoading) return <div>Loading...</div>;
  if (error || !nft) return <div>NFT not found</div>;

  return <ThirdwebNftMedia metadata={nft.metadata} />;
}
