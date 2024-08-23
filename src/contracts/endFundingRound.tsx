import { prepareContractCall } from "thirdweb"
import { useSendTransaction } from "thirdweb/react";
import { contract } from "./contractConfig";

export default function Component() {
  const { mutate: sendTransaction } = useSendTransaction();

  const onClick = () => {
    const transaction = prepareContractCall({ 
      contract, 
      method: "function endFundingRound()", 
      params: [] 
    });
    sendTransaction(transaction);
  }
}