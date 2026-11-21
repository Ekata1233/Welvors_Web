
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  LogOut,
  UserRound,
} from "lucide-react";

import {
  AUTH_EVENT,
  getAuthUser,
  isAuthenticated,
  logoutUser,
  type AuthUser,
} from "@/features/login/services/login.service";

interface Props {
  mobile?: boolean;
  onNavigate?: () => void;
}

export default function NavbarAuth({
  mobile = false,
  onNavigate,
}: Props) {
  const router = useRouter();

  const [user, setUser] = useState<AuthUser | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const syncAuth = () => {
      const authenticated = isAuthenticated();

      setLoggedIn(authenticated);
      setUser(authenticated ? getAuthUser() : null);
      setReady(true);
    };

    queueMicrotask(syncAuth);

    window.addEventListener(AUTH_EVENT, syncAuth);

    return () => {
      window.removeEventListener(AUTH_EVENT, syncAuth);
    };
  }, []);

  const handleLogout = () => {
    void logoutUser();

    setLoggedIn(false);
    setUser(null);
    setOpen(false);

    onNavigate?.();

    router.replace("/");
    router.refresh();
  };

  if (!ready) {
    return <div className="h-10 w-24" />;
  }

  if (!loggedIn) {
    return (
      <Link
        href="/login"
        onClick={onNavigate}
        className={
          mobile
            ? "rounded-full border border-[#EAE5E2] px-5 py-3 text-center font-medium text-[#201C1D]"
            : "rounded-full border border-[#EAE5E2] px-5 py-2.5 text-[15px] font-medium text-[#201C1D] hover:bg-gray-50"
        }
      >
        Log in
      </Link>
    );
  }

  return (
    <div className={`relative ${mobile ? "w-full" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={`flex items-center gap-2 rounded-full border border-[#f3d7df] bg-white px-3 py-2 hover:bg-[#fff7f9] ${
          mobile ? "w-full justify-between" : ""
        }`}
      >
        <span className="flex min-w-0 items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff0f4] text-[#D0476B]">
            <UserRound size={17} />
          </span>

          <span className="max-w-[145px] truncate text-[13px] font-bold text-[#302929]">
            {user?.fullName || "My Account"}
          </span>
        </span>

        <ChevronDown
          size={16}
          className={`shrink-0 text-[#85776f] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className={`z-50 rounded-2xl border border-[#eae3de] bg-white p-2 shadow-xl ${
            mobile
              ? "mt-2 w-full"
              : "absolute right-0 top-full mt-2 w-56"
          }`}
        >
          <div className="border-b border-[#f0e9e5] px-3 py-3">
            <p className="truncate text-[13px] font-bold text-[#302929]">
              {user?.fullName || "Welvors User"}
            </p>

            {user?.email && (
              <p className="mt-1 truncate text-[11px] text-[#85776f]">
                {user.email}
              </p>
            )}
          </div>

          <Link
            href="/profile"
            onClick={() => {
              setOpen(false);
              onNavigate?.();
            }}
            className="mt-2 flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-semibold text-[#514844] hover:bg-[#f8f5f2]"
          >
            <UserRound size={17} />
            My Profile
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[13px] font-semibold text-red-600 hover:bg-red-50"
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
