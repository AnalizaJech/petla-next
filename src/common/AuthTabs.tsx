"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AuthTabs() {
  const pathname = usePathname();
  const isLogin = pathname === "/login";
  const isRegister = pathname === "/register";

  return (
    <div className="w-full mb-4">
      <div className="grid grid-cols-2 w-full rounded-xl border bg-white shadow-sm overflow-hidden">
        <Link
          href="/login"
          className={cn(
            "block w-full text-center py-3 text-sm font-medium transition-colors",
            isLogin ? "bg-sky-50 text-sky-600" : "text-gray-600 hover:bg-gray-50"
          )}
          aria-current={isLogin ? "page" : undefined}
        >
          Iniciar Sesión
        </Link>
        <Link
          href="/register"
          className={cn(
            "block w-full text-center py-3 text-sm font-medium transition-colors",
            isRegister ? "bg-sky-50 text-sky-600" : "text-gray-600 hover:bg-gray-50"
          )}
          aria-current={isRegister ? "page" : undefined}
        >
          Crear Cuenta
        </Link>
      </div>
    </div>
  );
}
