// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

contract ContributionNFT is ERC721, ERC721Burnable {
    uint256 public tokenCounter;

    constructor() ERC721("ContributionNFT", "CNFT") {
        tokenCounter = 1;
    }

    function mintNFT(address to) external returns (uint256) {
        uint256 newTokenId = tokenCounter;
        _mint(to, newTokenId);
        tokenCounter++;
        return newTokenId;
    }
}