"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuth = localStorage.getItem("auth");

    // ❗ biarin login page kebuka
    if (pathname === "/login") {
      setLoading(false);
      return;
    }

    if (!isAuth) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [pathname]);

  if (loading) return null;

  return children;
}