// app/page.tsx
"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/component/ui/bento-grid";
import { IconFilter, IconHandClick, IconEye } from "@tabler/icons-react";
import { ethers } from "ethers"; // Import ethers
import { prepareContractCall } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { contract } from '@/contracts/contractConfig'; // Ensure you have this config file set up correctly

// Function to handle the smart contract call
export default function FundingCards() {
  const { mutate: sendTransaction } = useSendTransaction(); // Using the hook for transaction

  // Function to handle the Food Bank Wallet action
  const contributes = async () => {
    try {
      // Ensure MetaMask is installed
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Request user's account
        await provider.send("eth_requestAccounts", []);
        
        // Prepare the transaction call
        const transaction = prepareContractCall({ 
          contract, 
          method: "function contribute() payable", 
          params: [] 
        });

        // Send the transaction using the hook
        sendTransaction(transaction);
        
      } else {
        alert("Please install MetaMask to interact with the blockchain.");
      }
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  // Move the items array inside the component to access the contributes function
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
          <img src="/Charity2.jpg" alt="some random image" />
        </Skeleton>
      ),
      icon: <IconFilter className="h-4 w-4 text-neutral-500" />,
      // action: handlePotlockClick, // Attach the function to be called
    },
  
  ];

  return (
    <BentoGrid className="max-w-8xl mx-auto h-full w-full">
      {items.map((item, i) => (
        <div
          key={i}
          className="block cursor-pointer"
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
