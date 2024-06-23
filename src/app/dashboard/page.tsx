"use client";

import { Me } from "@/components/me";
import { ConnectKitButton } from "connectkit";
import Image from "next/image";

import { WagmiProvider, createConfig, http, useAccount } from "wagmi";
import { base, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import ConnectButton from "@/components/ConnectButton";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePrivy, useWallets } from "@privy-io/react-auth";

export default function Dashboard() {
  const router = useRouter();
  const { ready, authenticated, user } = usePrivy();
  const { address } = useAccount();
  const { wallets } = useWallets();

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/");
    }
  }, [ready, authenticated, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 text-md backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Telegram Mini App Dashboard
        </p>
      </div>

      <div className="flex flex-col gap-y-4 relative z-[-1] place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

        <p className="text-sm">Wallet Address: {address}</p>
        {wallets && wallets.length > 0 && (
          <>
            <p className="text-sm">Address {wallets[0].address}</p>
            <p className="text-sm">User {wallets[0].walletClientType}</p>
          </>
        )}
      </div>

      <div className="h-14 border-t w-full grid place-items-center">
        <div className="">{/* <Me /> */}</div>
      </div>
    </main>
  );
}
