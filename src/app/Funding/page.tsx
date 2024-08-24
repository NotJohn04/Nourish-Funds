// // app/page.tsx

// import Header from "@/component/custom/Header";
// import Header2 from "@/component/custom/Header2";
// import Image from "next/image"
// import { AspectRatio } from "@/component/ui/aspect-ratio"
// import '../globals.css';
// import FundingCards from "@/component/custom/FundingCards"
// import contribute from '@/contracts/contribute'
// import { useSendTransaction, useContract  } from "thirdweb/react";

// import { createThirdwebClient, getContract, prepareTransaction  } from "thirdweb";
// import { defineChain, scrollSepoliaTestnet } from "thirdweb/chains";

// // create the client with your clientId, or secretKey if in a server environment
// const client = createThirdwebClient({ 
//   clientId: "0fc6b80f44c99ad94e0bc26c3ed52a88"
// });

// // This function is inside the React component to ensure it's executed in the component lifecycle
// export default function Page() {
//   // Hook to handle transactions
//   const { mutate: sendTransaction } = useSendTransaction();
//   // Get the contract using the hook, now defined inside the component
//   const contract = getContract({ 
//     client, 
//     chain: scrollSepoliaTestnet, 
//     address: "0xa2A90083285204B5643bc2660a8A3bF141F87CC0"
//   });

//   // onClick function to prepare and send the transaction
//   const onClick = async () => {
//     if (!contract) return; // Check if the contract is loaded
//     try {
//       const transaction = await contract.call("contribute", {
//         value: 0 // Specify value if the function is payable, otherwise omit
//       });
//       sendTransaction(transaction);
//     } catch (error) {
//       console.error("Error sending transaction:", error);
//     }
//   };

//   return (
//     <>
//       <Header />

//       <Image
//         src="NourishFunds_Funds.svg"
//         alt="Photo by Drew Beamer"
//         width={100}
//         height={100}
//         className="static h-full w-full left-0 right-0 text-transparent"
//       />

//       <button onClick={onClick}>hi</button>

//       <div className="flex justify-center items-center mx-auto max-w-screen-lg p-4">
//         <FundingCards />
//       </div>
//     </>
//   );
// }

// app/page.tsx

"use client";

import Header from "@/component/custom/Header";
import Header2 from "@/component/custom/Header2";
import Image from "next/image";
import '../globals.css';
import FundingCards from "@/component/custom/FundingCards";
import { useSendTransaction } from "thirdweb/react";
import { createThirdwebClient, getContract, prepareContractCall } from "thirdweb";
import { scrollSepoliaTestnet } from "thirdweb/chains";

// create the client with your clientId
const client = createThirdwebClient({ 
  clientId: "0fc6b80f44c99ad94e0bc26c3ed52a88"
});

// Define the contract address and network
const contractAddress = "0xa2A90083285204B5643bc2660a8A3bF141F87CC0";

export default function Page() {
  const { mutate: sendTransaction } = useSendTransaction();

  const onClick = async () => {
    try {
      // Connect to your contract using getContract
      const contract = await getContract({ 
             client, 
             chain: scrollSepoliaTestnet, 
             address: contractAddress
           });

      // Prepare the transaction using the appropriate method and parameters
      // const transaction = await contract.functions.contribute({
      //   value: 0 // Set the value if the function is payable
      // });
      const transaction = await prepareContractCall({ 
        contract, 
        method: "function contribute() payable", 
        params: [] 
      }); 

      // Send the transaction
      sendTransaction(transaction);

    } catch (error) {
      console.error("Error sending transaction:", error);
    }
  };

  return (
    <>
      <Header />

      <Image
        src="NourishFunds_Funds.svg"
        alt="Photo by Drew Beamer"
        width={100}
        height={100}
        className="static h-full w-full left-0 right-0 text-transparent"
      />

      <button onClick={onClick}>hi</button>

      <div className="flex justify-center items-center mx-auto max-w-screen-lg p-4">
        <FundingCards />
      </div>
    </>
  );
}
