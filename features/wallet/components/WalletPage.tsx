"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowDown, ArrowRight, Plus, X } from "lucide-react";
import { getToken, isAuthenticated } from "@/features/login/services/login.service";

import {
  WALLET_USER,
  WALLET_BALANCE,
  SPEND_OPTIONS,
  WALLET_TRANSACTIONS,
  type WalletTransaction,
} from "../constants/walletData";
import AddMoneyModal from "./AddMoneyModal";
import { getMyWallet, WalletData, WalletFilter, WalletTransactionApi } from "../services/wallet.service";

type FilterType = "ALL" | "IN" | "OUT";
type ModalType = "ADD" | "WITHDRAW" | null;

/* -------------------------------------------------------------------------- */
/*                                  HELPERS                                   */
/* -------------------------------------------------------------------------- */

function formatMoney(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

const handleWalletPaymentSuccess = async () => {
  // Refresh wallet balance and transactions
  // using your wallet details API when available.

  console.log("Wallet payment verified successfully");
};
/* -------------------------------------------------------------------------- */
/*                              WALLET BALANCE                                */
/* -------------------------------------------------------------------------- */

function WalletBalanceCard({
  balance,
  loading,
  onAddMoney,
  onWithdraw,
}: {
  balance: number;
  loading: boolean;
  onAddMoney: () => void;
  onWithdraw: () => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-[25px] bg-gradient-to-br from-[#ed5276] via-[#d9426b] to-[#b92d5d] px-6 py-6 text-white shadow-[0_15px_30px_rgba(208,59,99,0.16)] sm:px-7 sm:py-7">
      <div className="pointer-events-none absolute -right-[65px] -top-[75px] h-[230px] w-[230px] rounded-full bg-white/[0.09]" />

      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.4px]">
            <span>🪙</span>
            Welvors Wallet
          </p>

          <p className="text-[10px] font-semibold text-white/90 sm:text-[11px]">
            1 coin = ₹1
          </p>
        </div>

        <h2 className="mt-6 font-serif text-[45px] font-normal leading-none tracking-[-1px] sm:text-[55px]">
          {loading ? (
            <span className="inline-block h-[50px] w-[180px] animate-pulse rounded-lg bg-white/20" />
          ) : (
            formatMoney(balance)
          )}
        </h2>

        <p className="mt-2 text-[12px] text-white/90 sm:text-[13px]">
          Available balance
        </p>

        <div className="mt-6 grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={onAddMoney}
            className="flex h-[47px] items-center justify-center gap-2 rounded-[13px] bg-white px-3 text-[12px] font-bold text-[#cf3765] transition hover:bg-[#fff1f5] sm:h-[50px] sm:text-[13px]"
          >
            <Plus size={17} strokeWidth={2} />
            Add money
          </button>

          <button
            type="button"
            onClick={onWithdraw}
            className="flex h-[47px] items-center justify-center gap-2 rounded-[13px] border border-white/40 bg-white/15 px-3 text-[12px] font-bold text-white transition hover:bg-white/25 sm:h-[50px] sm:text-[13px]"
          >
            <ArrowDown size={17} />
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               SPEND COINS                                  */
/* -------------------------------------------------------------------------- */

function SpendCoins({
  onUnavailable,
}: {
  onUnavailable: (title: string) => void;
}) {
  return (
    <section className="mt-6">
      <h3 className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.7px] text-[#978d89]">
        Spend your coins
      </h3>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {SPEND_OPTIONS.map((option) => {
          const content = (
            <>
              <span className="text-[24px] leading-none">{option.icon}</span>

              <span className="mt-4 block text-[13px] font-bold text-[#2f2928] sm:text-[14px]">
                {option.title}
              </span>

              <span className="mt-1.5 block text-[11px] leading-5 text-[#948b86] sm:text-[12px]">
                {option.description}
              </span>
            </>
          );

          const classes =
            "flex min-h-[116px] flex-col items-start rounded-[17px] border border-[#e9e1dc] bg-white px-4 py-4 text-left transition hover:border-[#e7b8c4] hover:shadow-sm sm:min-h-[125px]";

          return option.href ? (
            <Link key={option.id} href={option.href} className={classes}>
              {content}
            </Link>
          ) : (
            <button
              key={option.id}
              type="button"
              onClick={() => onUnavailable(option.title)}
              className={classes}
            >
              {content}
            </button>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               REFERRAL BANNER                              */
/* -------------------------------------------------------------------------- */

function ReferralBanner() {
  return (
    <Link
      href="/#refer"
      className="mt-3 flex min-h-[80px] items-center gap-4 rounded-[17px] bg-[#e5f4eb] px-4 py-4 transition hover:bg-[#dbf0e4] sm:px-5"
    >
      <span className="shrink-0 text-[27px]">🎁</span>

      <span className="min-w-0 flex-1">
        <span className="block text-[13px] font-bold text-[#292c29] sm:text-[14px]">
          Refer friends, earn ₹350 each
        </span>

        <span className="mt-1 block text-[11px] leading-5 text-[#6f7771] sm:text-[12px]">
          ₹50 when they join + ₹300 when they buy a package
        </span>
      </span>

      <ArrowRight size={17} className="shrink-0 text-[#187b4d]" />
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*                              TRANSACTION ROW                               */
/* -------------------------------------------------------------------------- */

function getTransactionIcon(source: string): {
  icon: string;
  background: string;
} {
  switch (source) {
    case "GIFT_PURCHASE":
      return {
        icon: "🎁",
        background: "bg-[#ffe7ee]",
      };

    case "WALLET_ROSE":
      return {
        icon: "🌹",
        background: "bg-[#ffe7ee]",
      };

    case "WALLET_COMPLIMENT":
      return {
        icon: "💌",
        background: "bg-[#ffe7ee]",
      };

    case "BOOST_PURCHASE":
      return {
        icon: "🚀",
        background: "bg-[#fff3df]",
      };

    case "REFERRAL_REWARD":
      return {
        icon: "🎁",
        background: "bg-[#e5f5eb]",
      };

    case "WALLET_TOPUP":
      return {
        icon: "➕",
        background: "bg-[#e5f5eb]",
      };

    default:
      return {
        icon: "🪙",
        background: "bg-[#f3eee9]",
      };
  }
}

function formatTransactionDate(date: string): string {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });
}

function TransactionRow({
  transaction,
}: {
  transaction: WalletTransactionApi;
}) {
  const isMoneyIn = transaction.direction === "IN";

  const transactionIcon = getTransactionIcon(
    transaction.source
  );

  return (
    <div className="flex min-h-[68px] items-center justify-between gap-3 border-b border-[#ede7e3] py-3 last:border-b-0 sm:min-h-[72px]">
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-[13px] text-[21px] ${transactionIcon.background}`}
        >
          {transactionIcon.icon}
        </div>

        <div className="min-w-0">
          <p className="text-[12px] font-bold leading-5 text-[#282525] sm:text-[13px]">
            {transaction.title}
          </p>

          <p className="mt-1 text-[11px] text-[#99908b] sm:text-[12px]">
            {formatTransactionDate(transaction.createdAt)}
          </p>
        </div>
      </div>

      <p
        className={`shrink-0 text-[13px] font-bold sm:text-[14px] ${
          isMoneyIn
            ? "text-[#168248]"
            : "text-[#292626]"
        }`}
      >
        {transaction.formattedAmount ||
          `${isMoneyIn ? "+" : "−"}${formatMoney(transaction.amount)}`}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                             TRANSACTIONS PANEL                             */
/* -------------------------------------------------------------------------- */

function TransactionsPanel({
  transactions,
  filter,
  onFilterChange,
  loading,
  error,
}: {
  transactions: WalletTransactionApi[];
  filter: WalletFilter;
  onFilterChange: (filter: WalletFilter) => void;
  loading: boolean;
  error: string | null;
}) {
  const filters: {
    label: string;
    value: WalletFilter;
  }[] = [
    { label: "All", value: "ALL" },
    { label: "Money in", value: "IN" },
    { label: "Money out", value: "OUT" },
  ];

  return (
    <section className="rounded-[25px] border border-[#e9e1dc] bg-white px-4 py-5 shadow-[0_3px_12px_rgba(48,36,33,0.035)] sm:px-5 sm:py-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-[17px] font-bold text-[#272323] sm:text-[18px]">
          Transactions
        </h2>

        <div className="inline-flex items-center gap-1 rounded-full bg-[#f7f4f2] p-1">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => onFilterChange(item.value)}
              className={`rounded-full px-3 py-2 text-[11px] font-bold transition sm:px-3.5 sm:text-[12px] ${
                filter === item.value
                  ? "bg-white text-[#292525] shadow-sm"
                  : "text-[#665e5a] hover:text-[#292525]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        {loading ? (
          <div className="space-y-4 py-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex animate-pulse items-center gap-3"
              >
                <div className="h-[43px] w-[43px] rounded-[13px] bg-[#f2ece8]" />

                <div className="flex-1 space-y-2">
                  <div className="h-3 w-2/3 rounded bg-[#f2ece8]" />
                  <div className="h-2 w-1/3 rounded bg-[#f2ece8]" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="py-10 text-center">
            <p className="text-[13px] text-red-500">
              {error}
            </p>
          </div>
        ) : transactions.length > 0 ? (
          transactions.map((transaction) => (
            <TransactionRow
              key={transaction.id}
              transaction={transaction}
            />
          ))
        ) : (
          <div className="py-12 text-center">
            <p className="text-[13px] text-[#918681]">
              No transactions found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                             STATIC DEMO MODAL                              */
/* -------------------------------------------------------------------------- */

function DemoModal({
  type,
  title,
  onClose,
}: {
  type: ModalType;
  title: string | null;
  onClose: () => void;
}) {
  if (!type && !title) return null;

  const heading = title ?? (type === "ADD" ? "Add money" : "Withdraw money");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-4"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="wallet-demo-title"
        className="w-full max-w-[390px] rounded-[22px] bg-white p-6 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <h3
            id="wallet-demo-title"
            className="font-serif text-[25px] font-bold text-[#302929]"
          >
            {heading}
          </h3>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7f3f0]"
          >
            <X size={17} />
          </button>
        </div>

        <p className="mt-3 text-[13px] leading-6 text-[#827772]">
          This is a static Wallet page preview. The {heading.toLowerCase()}{" "}
          feature will be connected when the corresponding API is integrated.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-[#d7446b] px-5 py-3 text-[12px] font-bold text-white"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  MAIN PAGE                                 */
/* -------------------------------------------------------------------------- */

export default function WalletPage() {
  const router = useRouter();
  const resumeAddMoney = useSearchParams().get("action") === "add-money";
  const [modalType, setModalType] =
    useState<ModalType>(null);

  const [unavailableTitle, setUnavailableTitle] =
    useState<string | null>(null);

  const [walletData, setWalletData] =
    useState<WalletData | null>(null);

  const [filter, setFilter] =
    useState<WalletFilter>("ALL");

  const [walletLoading, setWalletLoading] =
    useState(true);

  const [transactionsLoading, setTransactionsLoading] =
    useState(false);

  const [walletError, setWalletError] =
    useState<string | null>(null);

  const [transactionsError, setTransactionsError] =
    useState<string | null>(null);

  /* ------------------------------------------------------------------------ */
  /*                             FETCH WALLET                                 */
  /* ------------------------------------------------------------------------ */

  const fetchWallet = useCallback(
    async (selectedFilter: WalletFilter = "ALL") => {
      const token = getToken();

      if (!token) {
        throw new Error("Please log in to view your wallet.");
      }

      return getMyWallet(token, selectedFilter);
    },
    []
  );

  /* ------------------------------------------------------------------------ */
  /*                           INITIAL WALLET FETCH                           */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    let active = true;

    const loadWallet = async () => {
      try {
        const result = await fetchWallet("ALL");

        if (!active) return;

        setWalletData(result);
        setWalletError(null);
      } catch (error) {
        if (!active) return;

        setWalletError(
          error instanceof Error
            ? error.message
            : "Failed to fetch wallet"
        );
      } finally {
        if (active) {
          setWalletLoading(false);
        }
      }
    };

    void loadWallet();

    return () => {
      active = false;
    };
  }, [fetchWallet]);

  /* ------------------------------------------------------------------------ */
  /*                          TRANSACTION FILTER                              */
  /* ------------------------------------------------------------------------ */

  const handleFilterChange = async (
    selectedFilter: WalletFilter
  ) => {
    setFilter(selectedFilter);
    setTransactionsLoading(true);
    setTransactionsError(null);

    try {
      const result = await fetchWallet(selectedFilter);

      setWalletData(result);
    } catch (error) {
      setTransactionsError(
        error instanceof Error
          ? error.message
          : "Failed to fetch transactions"
      );
    } finally {
      setTransactionsLoading(false);
    }
  };

  /* ------------------------------------------------------------------------ */
  /*                       REFRESH AFTER PAYMENT                              */
  /* ------------------------------------------------------------------------ */

  const handleWalletPaymentSuccess = async () => {
    try {
      const result = await fetchWallet(filter);

      setWalletData(result);
      setWalletError(null);
      setTransactionsError(null);
    } catch (error) {
      console.error("Wallet refresh failed:", error);

      setWalletError(
        "Payment verified, but wallet refresh failed. Please reload the page."
      );
    }
  };

  const handleAddMoney = () => {
    if (!isAuthenticated()) {
      router.push("/login?action=add-money");
      return;
    }

    setModalType("ADD");
  };

  useEffect(() => {
    if (!resumeAddMoney) return;

    let active = true;
    queueMicrotask(() => {
      if (active && isAuthenticated()) setModalType("ADD");
    });

    return () => {
      active = false;
    };
  }, [resumeAddMoney]);

  const closeModal = () => {
    setModalType(null);
    setUnavailableTitle(null);
    if (resumeAddMoney) router.replace("/wallet", { scroll: false });
  };

  return (
    <main className="min-h-screen bg-[#f8f5f2] text-[#302929]">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-20 pt-8 sm:px-8 sm:pt-10 lg:px-10">
        {/* Page heading */}
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[1.8px] text-[#d7446b]">
              Wallet
            </p>

            <h1 className="mt-3 font-serif text-[43px] font-bold leading-[1.1] tracking-[-1px] text-[#242020] sm:text-[54px]">
              Your{" "}
              <span className="italic text-[#d7446b]">
                wallet.
              </span>
            </h1>

            <p className="mt-4 text-[14px] leading-6 text-[#6f6763] sm:text-[16px]">
              1 coin = ₹1. Use coins for roses, gifts,
              boosts and packages.
            </p>
          </div>

          {/* Signed-in user */}
          {/* <div className="flex items-center gap-3 pb-1">
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#d7446b] text-[15px] font-bold text-white">
              {WALLET_USER.initial}
            </span>

            <div>
              <p className="text-[12px] text-[#7d7470]">
                Signed in as
              </p>

              <p className="mt-0.5 text-[13px] font-bold text-[#292525]">
                {WALLET_USER.name}
              </p>
            </div>
          </div> */}
        </div>

        {/* Wallet error */}
        {walletError && (
          <div
            role="alert"
            className="mt-5 rounded-[12px] border border-red-100 bg-red-50 px-4 py-3 text-[13px] text-red-600"
          >
            {walletError}
          </div>
        )}

        {/* Main two-column layout */}
        <div className="mt-7 grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          {/* Left column */}
          <div className="min-w-0">
            <WalletBalanceCard
              balance={walletData?.wallet.balance ?? 0}
              loading={walletLoading}
              onAddMoney={handleAddMoney}
              onWithdraw={() => setModalType("WITHDRAW")}
            />

            <SpendCoins
              onUnavailable={setUnavailableTitle}
            />

            <ReferralBanner />
          </div>

          {/* Right column */}
          <div className="min-w-0">
            <TransactionsPanel
              transactions={walletData?.transactions ?? []}
              filter={filter}
              onFilterChange={handleFilterChange}
              loading={walletLoading || transactionsLoading}
              error={transactionsError}
            />
          </div>
        </div>
      </div>

      {/* Add Money Razorpay modal */}
      <AddMoneyModal
        open={modalType === "ADD"}
        onClose={closeModal}
        getToken={getToken}
        onPaymentSuccess={handleWalletPaymentSuccess}
      />

      {/* Withdraw / unavailable feature modal */}
      <DemoModal
        type={
          modalType === "WITHDRAW"
            ? "WITHDRAW"
            : null
        }
        title={unavailableTitle}
        onClose={closeModal}
      />
    </main>
  );
}
