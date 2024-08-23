// "use client";

// import React from 'react';
// import { useContractRead, useContract } from "@thirdweb-dev/react";

// import { contract } from "./contractConfig";

// function ProjectCounter() {
//   const { data, isLoading } = useReadContract({
//     contract, 
//     method: "projectCounter",  // Simplified method name
//     params: [] 
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//       Project Counter: {data ? data.toString() : 'No data available'}
//     </div>
//   );
// }

// export default ProjectCounter;

// "use client";

// // import React from 'react';
// import { useContractRead, useContract } from "@thirdweb-dev/react";
// import { contractAddress } from "./contractConfig";
// import { ThirdwebProvider } from "@thirdweb-dev/react";



// function ProjectCounter() {

//   // Initialize the contract using the contract address
//   const { contract } = useContract("0xBDD2a83cd25d35192c9F88a8712b9fC1acDbF07a");

//   // Read data from the contract using useContractRead
//   const { 
//     data: numvalue, 
//     isLoading 
//   } = useContractRead(contract, "projectCounter");
  
//   // Handle loading state
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }


//   // Render the data returned from the contract
//   return (

//     <div>
//       Project Counter: {numvalue ? numvalue.toNumber() : 'No data available'}
//     </div>
//   );
// }

// export default ProjectCounter;

import React from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";

function ProjectCounter() {
  // Initialize the contract using the contract address
  const { contract } = useContract("0xBDD2a83cd25d35192c9F88a8712b9fC1acDbF07a");
  console.log("Contract initialized:", contract);

  // Read the projectCounter from the contract using useContractRead
  const { data: numvalue, isLoading } = useContractRead(contract, "projectCounter");

  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render the data returned from the contract
  return (
    <div>
      Project Counter: {numvalue ? numvalue.toString() : 'No data available'}
    </div>
  );
}

export default ProjectCounter;