"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/component/ui/bento-grid";
import {
  IconFilter,
  IconHandClick,
  IconEye,
} from "@tabler/icons-react";
import { ethers } from "ethers"; // Import ethers
import contribute from '@/contracts/contribute'


// Function to handle the Food Bank Wallet action
const contributes = async () => {
  try {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      
      // Request user's account
      await provider.send("eth_requestAccounts", []);
      
      // Set up transaction parameters
      const tx = {
        to: "0xa2A90083285204B5643bc2660a8A3bF141F87CC0", // Replace with the contract or recipient address
        value: ethers.utils.parseEther("0.0001"), // 0.0001 ETH
        gasLimit: 21000, // Gas limit for a simple transfer
      };

      // Send the transaction
      const transactionResponse = await signer.sendTransaction(tx);
      
      // Wait for the transaction to be mined
      await transactionResponse.wait();
      
      console.log("Transaction successful:", transactionResponse);
    } else {
      alert("MetaMask is not installed. Please install it to proceed.");
    }
  } catch (error) {
    console.error("Transaction failed:", error);
  }
};

function FundingCards() {
  return (
    

    <BentoGrid className="max-w-8xl mx-auto h-full w-full">
      {items.map((item, i) => (
        <div
          key={i}
          className="block cursor-pointer" // Changed from <a> to <div>
          onClick={item.action} // Attach the corresponding action to each item
        >
          <BentoGridItem
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        </div>
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-1 w-full h-full justify-center min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800">
    {children}
  </div>
);

const items = [
  {
    title: "Food Bank Wallet",
    description: "Redistributed all funds to approved public goods on Potlock registry...",
    header: (
      <Skeleton>
        <img src="/FoodBankWallet.svg" alt="some random image" />
      </Skeleton>
    ),
    icon: <IconEye className="h-4 w-4 text-neutral-500" />,
    action: contributes, // Attach the function to be called
  },
  {
    title: "Old Folks Home Using Crypto",
    description: "An old folks home utilizing crypto donations to sustain its residents...",
    header: (
      <Skeleton>
        <img src="/Charity1.svg" alt="some random image" />
      </Skeleton>
    ),
    icon: <IconHandClick className="h-4 w-4 text-neutral-500" />,
    // action: handleYearOfTheChefClick, // Attach the function to be called
  },
  {
    title: "Potlock",
    description: "Potlock is bringing funding to the table. First public goods funding platform...",
    header: (
      <Skeleton>
        <img src="/wallpaper.jpg" alt="some random image" />
      </Skeleton>
    ),
    icon: <IconFilter className="h-4 w-4 text-neutral-500" />,
    // action: handlePotlockClick, // Attach the function to be called
  },
];

export default FundingCards;