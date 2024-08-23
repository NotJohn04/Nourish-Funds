"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThirdwebProvider } from "../component/custom/ThirdwebProvider";
import Header2 from "../component/custom/Header2";
import { Sepolia } from "@thirdweb-dev/chains"; // Import the correct chain type

const activeChain = "binance-testnet";
const inter = Inter({ subsets: ["latin"] });

// Initialize a QueryClient instance
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <html lang="en">
          <body className={inter.className}>
            {/* <Header2></Header2> */}
            <ThirdwebProvider activeChain={Sepolia}>
            <QueryClientProvider 
            client={queryClient}
            contextSharing={true}
            >
            {children}
            </QueryClientProvider>
            </ThirdwebProvider>
          </body>
        </html>      

  );
}
