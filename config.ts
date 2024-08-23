import { scroll } from 'thirdweb/chains'
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, scrollSepolia } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, sepolia, scrollSepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [scrollSepolia.id]: http(),
  },
})