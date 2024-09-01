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
    <ConnectionProvider endpoint={"https://api/devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <App />
      </WalletProvider>
    </ConnectionProvider>
  </StrictMode>
);
