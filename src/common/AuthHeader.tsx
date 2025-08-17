"use client";

import Link from "next/link";
import { Dog } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname } from "next/navigation";

export default function AuthHeader() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center mb-6">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 font-bold text-3xl mb-4">
        <Dog className="w-8 h-8 text-sky-500" />
        <span className="text-gray-900">Pet</span>
        <span className="text-sky-500">LA</span>
      </Link>

      {/* Tabs de navegación */}
      <Tabs defaultValue={pathname === "/register" ? "register" : "login"} className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login" asChild>
            <Link href="/login" className="w-full">Iniciar Sesión</Link>
          </TabsTrigger>
          <TabsTrigger value="register" asChild>
            <Link href="/register" className="w-full">Crear Cuenta</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
