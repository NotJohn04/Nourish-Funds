import { useReadContract } from "thirdweb/react";
import { contract } from "./contractConfig";

export default function Component() {
  const { data, isLoading } = useReadContract({ 
    contract, 
    method: "function owner() view returns (address)", 
    params: [] 
  });
}