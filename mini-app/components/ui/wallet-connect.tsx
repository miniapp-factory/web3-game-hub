"use client";

import { useState } from "react";

export default function WalletConnect() {
  const [connected, setConnected] = useState(false);

  const connect = async () => {
    // Placeholder: integrate wallet connection logic here
    setConnected(true);
  };

  return (
    <button
      onClick={connected ? undefined : connect}
      className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90 disabled:opacity-50"
      disabled={connected}
    >
      {connected ? "Wallet Connected" : "Connect Wallet"}
    </button>
  );
}
