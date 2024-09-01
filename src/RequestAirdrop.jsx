import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

export function RequestAirdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  const [isLoading, setIsLoading] = useState(false);

  async function requestAirdrop() {
    let amount = document.getElementById("amount").value;
    console.log("amount", amount);
    await connection.requestAirdrop(
      wallet.publicKey,
      amount * LAMPORTS_PER_SOL
    );
    console.log(
      "Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58()
    );
    alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 ">
      <div className=" flex mb-20 gap-10">
        <WalletMultiButton />
        <WalletDisconnectButton />
      </div>
      <div className="w-full max-w-md bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-xl p-8">
        <h2 className="text-4xl font-bold mb-6 text-white text-center">
          Airdrop Tokens
        </h2>
        <div className="mb-8 p-6 bg-white bg-opacity-30 rounded-2xl">
          <h3 className="text-xl font-medium text-white mb-2">
            Wallet Balance
          </h3>
          <p className="text-5xl font-bold text-white">
            {"null"} <span className="text-2xl">tokens</span>
          </p>
        </div>
        <form onSubmit={requestAirdrop} className="space-y-6">
          <div>
            <label
              htmlFor="amount"
              className="block text-lg font-medium text-white mb-2"
            >
              Airdrop Amount
            </label>
            <input
              id="amount"
              type="text"
              placeholder="Enter amount to airdrop"
              // onChange={(e) => setAmount(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-opacity-30 transition"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 border border-transparent rounded-xl text-lg font-medium text-purple-600 bg-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Processing..." : "Airdrop Tokens"}
          </button>
        </form>
      </div>
    </div>
  );
}
