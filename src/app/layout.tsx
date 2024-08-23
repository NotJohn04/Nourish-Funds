"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThirdwebProvider } from "@thirdweb-dev/react"; // Ensure this is the correct import
import { ScrollSepoliaTestnet } from "@thirdweb-dev/chains"; // Correctly imported chain type4\


const inter = Inter({ subsets: ["latin"] });

// Initialize a QueryClient instance
const queryClient = new QueryClient();
const clientId = "0fc6b80f44c99ad94e0bc26c3ed52a88";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Ensure Header2 is correctly placed within the layout */}
        {/* <Header2></Header2> */}


        <ThirdwebProvider 
        clientId={clientId}
        activeChain={ScrollSepoliaTestnet}
        >
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
