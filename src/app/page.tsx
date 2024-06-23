// "use client";

import { Me } from "@/components/me";
import { ConnectKitButton } from "connectkit";
import Image from "next/image";

import { WagmiProvider, createConfig, http } from "wagmi";
import { base, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import ConnectButton from "@/components/ConnectButton";
// import {
//   coinbaseWallet,
//   injected,
//   metaMask,
//   safe,
//   walletConnect,
// } from "wagmi/connectors";

// const config = createConfig(
//   getDefaultConfig({
//     // Your dApps chains
//     chains: [mainnet, base],
//     transports: {
//       // RPC URL for each chain
//       [mainnet.id]: http(
//         `https://eth-mainnet.g.alchemy.com/v2/_UJfRp01lHtSUdybvBZs0jIqkBXzZZ3i`
//       ),
//     },

//     // Required API Keys
//     walletConnectProjectId: "81e30ff0242ec93f83a9cc4d981cc315",

//     // Required App Info
//     appName: "Your App Name",

//     // Optional App Info
//     appDescription: "Your App Description",
//     appUrl: "https://family.co", // your app's url
//     appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
//     connectors: [
//       // injected(),
//       walletConnect({
//         projectId: "81e30ff0242ec93f83a9cc4d981cc315",
//         showQrModal: true,
//       }),
//       // metaMask({ useDeeplink: false }),
//       // coinbaseWallet({
//       //   appName: "My Wagmi App",
//       //   appLogoUrl: "https://family.co/logo.png",
//       //   preference: "smartWalletOnly",
//       //   // headlessMode: true,
//       // }),
//     ],
//   })
// );

// const queryClient = new QueryClient();

// export const Web3Provider = ({ children }) => {
//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>
//         <ConnectKitProvider debugMode>{children}</ConnectKitProvider>
//       </QueryClientProvider>
//     </WagmiProvider>
//   );
// };

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 text-md backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Telegram Mini App
        </p>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <ConnectButton />

      <div className="h-14 border-t w-full grid place-items-center">
        <div className="">{/* <Me /> */}</div>
      </div>
    </main>
  );
}
