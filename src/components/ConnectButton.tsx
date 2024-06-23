"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ConnectButton() {
  const { ready, authenticated, login } = usePrivy();
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);
  const router = useRouter();

  console.log(ready, authenticated);

  useEffect(() => {
    if (ready && authenticated) {
      router.push("/dashboard");
    }
    if (!authenticated) {
      router.push("/");
    }
  }, [ready, authenticated, router]);

  return (
    <button disabled={disableLogin} onClick={login}>
      Log in {authenticated}
    </button>
  );
}
