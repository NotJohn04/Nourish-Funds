// src/components/ConnectWallet.tsx
// 0fc6b80f44c99ad94e0bc26c3ed52a88
import { createThirdwebClient } from "thirdweb";
import { ThirdwebProvider, ConnectButton } from "thirdweb/react";

export const client = createThirdwebClient({ clientId: "0fc6b80f44c99ad94e0bc26c3ed52a88" });

export default function App() {
  return (
    <ThirdwebProvider>
      <ConnectButton client={client} />
    </ThirdwebProvider>
    
  );
}
