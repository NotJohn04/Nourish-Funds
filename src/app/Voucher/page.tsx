// app/page.tsx
"use client";

import Header from "@/component/custom/Header";
import Image from "next/image";
import RootLayout from "@/app/layout";
import { ethers } from "ethers";
import { useCallback } from "react";

export default function Funding() {
  // Function to handle the smart contract call
  const handleImageClick = useCallback(async () => {
    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        await provider.send("eth_requestAccounts", []); // Request user's account access

        // Set up transaction parameters
        const tx = {
          to: "0xa2A90083285204B5643bc2660a8A3bF141F87CC0", // Replace with the contract or recipient address
          value: ethers.utils.parseEther("0.0001"), // Replace with the required amount for your contract method
          gasLimit: 21000, // Adjust gas limit as needed
        };

        // Send the transaction
        const transactionResponse = await signer.sendTransaction(tx);
        await transactionResponse.wait(); // Wait for the transaction to be mined
        console.log("Transaction successful:", transactionResponse);
      } else {
        alert("MetaMask is not installed. Please install it to proceed.");
      }
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  }, []);

  return (
    <>
      <RootLayout>
        <Header />
        <Image
          src="/NourishFunds_Voucher.svg"
          alt="Nourish Funds Voucher"
          width={100}
          height={100}
          className="static h-full w-full left-0 right-0 text-transparent"
          onClick={handleImageClick} // Add onClick handler
        />
      </RootLayout>
    </>
  );
}
