import React, { FC, useMemo } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { RequestAirdrop } from "./Airdrop/RequestAirdrop";
import { SendToken } from "./SendToken/SendToken";

import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import SignMessage from "./SignMessage/SignMessage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <WalletModalProvider>
          <Routes>
            <Route path="/" element={<RequestAirdrop />} />
            <Route path="/send-token" element={<SendToken />} />
            <Route path="/send-message" element={<SignMessage />} />
          </Routes>
        </WalletModalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
