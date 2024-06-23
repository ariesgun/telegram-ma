import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TmaSDKProvider } from "@/components/tma";
import { Web3Modal } from "@/context/web3modal";
import Web3ModalProvider from "@/context";
import { cookieToInitialState } from "wagmi";
import { headers } from "next/headers";
import Providers from "@/context/privyProvider";
// import { config } from "@/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Telegram Mini App",
  description: "A mini app for Telegram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body className={inter.className}>
        <TmaSDKProvider>
          {/* <Web3ModalProvider initialState={initialState}> */}
          <Providers>{children}</Providers>
          {/* </Web3ModalProvider> */}
        </TmaSDKProvider>
      </body>
    </html>
  );
}
