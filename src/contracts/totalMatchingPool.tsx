// import { useReadContract } from "thirdweb/react";
// import { contract } from "./contractConfig";

// export default function Component() {
//   const { data, isLoading } = useReadContract({ 
//     contract, 
//     method: "function totalMatchingPool() view returns (uint256)", 
//     params: [] 
//   });
// }



import React from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";

function TotalMatchingPool() {
  // Initialize the contract using the contract address
  const { contract } = useContract("0xBDD2a83cd25d35192c9F88a8712b9fC1acDbF07a");
  console.log("Contract initialized:", contract);

  // Read the projectCounter from the contract using useContractRead
  const { data: numvalue, isLoading } = useContractRead(contract, "totalMatchingPool");

  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render the data returned from the contract
  return (
    <div>
      Total Matching Pool: {numvalue ? numvalue.toString() : 'No data available'}
    </div>
  );
}

export default TotalMatchingPool;