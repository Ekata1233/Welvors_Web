import type { Metadata } from "next";
import WalletPage from "@/features/wallet/components/WalletPage";

export const metadata: Metadata = {
  title: "Wallet | Welvors",
  description:
    "Manage your Welvors wallet balance, coins, rewards and transactions.",
};

export default function Page() {
  return <WalletPage />;
}