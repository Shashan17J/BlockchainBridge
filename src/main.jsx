import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* This is an RPC URL (ex: "https://api/devnet.solana.com") */}
    <ConnectionProvider
      endpoint={
        "https://solana-devnet.g.alchemy.com/v2/I9CzauUHcXs6DTsj7_3ek04AXLz3p6CO"
      }
    >
      <WalletProvider wallets={[]} autoConnect>
        <App />
      </WalletProvider>
    </ConnectionProvider>
  </StrictMode>
);
