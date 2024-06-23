// config/index.tsx

import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

// Your WalletConnect Cloud project ID
export const projectId = "81e30ff0242ec93f83a9cc4d981cc315";

// Create a metadata object
const metadata = {
  name: "telegram-defi",
  description: "AppKit Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [mainnet, sepolia] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: false,
  storage: createStorage({
    storage: cookieStorage,
  }),
  //   ...wagmiOptions, // Optional - Override createConfig parameters
});
