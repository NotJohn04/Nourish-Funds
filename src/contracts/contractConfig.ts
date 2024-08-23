import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain, scrollSepoliaTestnet } from "thirdweb/chains";

// create the client with your clientId, or secretKey if in a server environment
const client = createThirdwebClient({ 
  clientId: "0fc6b80f44c99ad94e0bc26c3ed52a88"
 });

// connect to your contract
const contract = getContract({ 
  client, 
  chain: scrollSepoliaTestnet, 
  address: "0xa2A90083285204B5643bc2660a8A3bF141F87CC0"
});

const contractAddress = "0xa2A90083285204B5643bc2660a8A3bF141F87CC0";
const contractABI = [{"inputs":[{"internalType":"address","name":"_contributionToken","type":"address"},{"internalType":"address","name":"_contributionNFT","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"ETH_PAYMENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOKEN_REWARD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contribute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"contributionNFT","outputs":[{"internalType":"contract ContributionNFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contributionToken","outputs":[{"internalType":"contract ContributionToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"payFixedEthAmount","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"payTokensForNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

export { contractAddress, contractABI, contract, client };
