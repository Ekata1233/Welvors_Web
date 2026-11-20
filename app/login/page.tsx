
import type { Metadata } from "next";

import LoginPage from "@/features/login/components/LoginPage";

export const metadata: Metadata = {
  title: "Login | Welvors",
  description:
    "Login to Welvors and complete your profile.",
};

export default function Page() {
  return <LoginPage />;
}
