// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./ContributionToken.sol";
import "./ContributionNFT.sol";

contract ContributionPlatform is Ownable {
    uint256 public constant ETH_PAYMENT = 0.08 ether; // 0.08 ETH in wei
    uint256 public constant TOKEN_REWARD = 50e18; // 50 tokens (18 decimals)
    uint256 public constant NFT_PRICE = 20e18; // 20 tokens (18 decimals)

    ContributionToken public contributionToken;
    ContributionNFT public contributionNFT;

    constructor(address _contributionToken, address _contributionNFT) Ownable(msg.sender) {
        contributionToken = ContributionToken(_contributionToken);
        contributionNFT = ContributionNFT(_contributionNFT);
    }

    // Function to pay 0.08 ETH
    function payFixedEthAmount() external payable {
        require(msg.value == ETH_PAYMENT, "You must pay exactly 0.08 ETH");
        // Additional logic for processing the payment can be added here
    }

    // Function to contribute a custom ETH amount and receive 50 tokens
    function contribute() external payable {
        require(msg.value > 0, "You must contribute some ETH");
        
        // Mint 50 tokens to the contributor
        contributionToken.mint(msg.sender, TOKEN_REWARD);
    }

    // Function to pay 20 tokens and receive an NFT
    function payTokensForNFT() external {
        require(contributionToken.balanceOf(msg.sender) >= NFT_PRICE, "Insufficient tokens");

        // Transfer 20 tokens from the user to the contract (burned)
        contributionToken.burnFrom(msg.sender, NFT_PRICE);

        // Mint an NFT to the user
        contributionNFT.mintNFT(msg.sender);
    }

    // Withdraw function for the owner to withdraw ETH from the contract
    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No ETH to withdraw");
        payable(owner()).transfer(balance);
    }
}