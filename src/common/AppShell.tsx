"use client";

import { usePathname } from "next/navigation";
import Header from "@/common/Header";
import Footer from "@/common/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Rutas donde se ocultan header y footer
  const hideLayout =
    pathname === "/login" ||
    pathname === "/register"; // 👈 se ocultan en estas rutas

  return (
    <>
      {!hideLayout && <Header />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
