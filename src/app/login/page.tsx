"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dog, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import AuthTabs from "@/common/AuthTabs"; // ✅ tabs compartidas

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 mb-6">
      {/* Header con Logo + Tabs */}
      <div className="w-full max-w-3xl mb-6">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-4 group">
            <Dog className="w-14 h-14 text-sky-500 group-hover:scale-110 transition-transform" />
            <span className="text-4xl font-bold">
              <span className="text-gray-900">Pet</span>
              <span className="text-sky-500">LA</span>
            </span>
          </Link>

          {/* Tabs de navegación (login / register) */}
          <AuthTabs />
        </div>
      </div>

      {/* Card del formulario */}
      <div className="w-full max-w-3xl">
        <Card className="shadow-lg">
          <CardContent className="space-y-5 pt-6">
            {/* Título */}
            <div className="text-center space-y-1">
              <User className="w-8 h-8 text-sky-500 mx-auto" />
              <h1 className="text-lg font-semibold">Iniciar Sesión</h1>
              <p className="text-gray-600 text-sm">
                Ingresa tus credenciales para acceder
              </p>
            </div>

            {/* Identificador */}
            <div className="space-y-1">
              <Label
                htmlFor="identifier"
                className="text-sm font-medium text-gray-700"
              >
                Correo / Teléfono / Nombre de Usuario
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="identifier"
                  type="text"
                  placeholder="Ej: correo@ejemplo.com"
                  className="pl-10 h-11 text-sm border-gray-300 
                             focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:border-sky-500"
                />
              </div>
            </div>

            {/* Contraseña */}
            <div className="space-y-1">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Contraseña
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa tu contraseña"
                  className="pl-10 pr-12 h-11 text-sm border-gray-300 
                             focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:border-sky-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </CardContent>

          {/* Botón */}
          <CardFooter className="pt-0">
            <Button className="w-full h-11 text-sm bg-sky-500 hover:bg-sky-600 cursor-pointer">
              Iniciar sesión
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
