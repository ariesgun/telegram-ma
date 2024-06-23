"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getDefaultConfig } from "connectkit";
import { useRouter } from "next/navigation";
import { base, mainnet, sepolia } from "wagmi/chains";
import { WagmiProvider, createConfig } from "@privy-io/wagmi";
import { http } from "wagmi";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const config = createConfig({
    chains: [mainnet, sepolia],
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  });

  return (
    <PrivyProvider
      appId="clxqaezhx02h1cuw4yizu6viu"
      onSuccess={() => router.push("/dashboard")}
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "https://your-logo-url",
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>{children}</WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}
