"use client";

import { useState } from "react";
import Link from "next/link";
import AuthTabs from "@/common/AuthTabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dog,
  PawPrint,
  User,
  Mail,
  Phone,
  Home,
  Lock,
  Eye,
  EyeOff,
  FileText,
  CalendarIcon,
} from "lucide-react";

export default function RegisterPage() {
  const [date, setDate] = useState<Date | undefined>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [gender, setGender] = useState<string | undefined>();
  const [docType, setDocType] = useState<string | undefined>();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 mb-6">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 mb-4 group">
        <Dog className="w-14 h-14 text-sky-500 group-hover:scale-110 transition-transform" />
        <span className="text-4xl font-bold">
          <span className="text-gray-900">Pet</span>
          <span className="text-sky-500">LA</span>
        </span>
      </Link>

      <div className="w-full max-w-3xl">
        <AuthTabs />

        <Card className="shadow-lg mt-4">
          <CardContent className="space-y-5 pt-6">
            <div className="text-center space-y-1">
              <PawPrint className="w-8 h-8 text-sky-500 mx-auto" />
              <h1 className="text-lg font-semibold">Crear Cuenta</h1>
              <p className="text-gray-600 text-sm">
                Regístrate para acceder a todos nuestros servicios
              </p>
            </div>

            {/* Grid de inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nombres */}
              <div className="space-y-1">
                <Label>Nombres</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Ej: Carlos"
                    className="pl-10 h-11 text-sm border-gray-300 focus-visible:ring-sky-500"
                  />
                </div>
              </div>

              {/* Apellidos */}
              <div className="space-y-1">
                <Label>Apellidos</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Ej: Ramírez"
                    className="pl-10 h-11 text-sm border-gray-300 focus-visible:ring-sky-500"
                  />
                </div>
              </div>

              {/* Nombre de usuario */}
              <div className="space-y-1">
                <Label>Nombre de usuario</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Ej: carlos123"
                    className="pl-10 h-11 text-sm border-gray-300 focus-visible:ring-sky-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <Label>Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    className="pl-10 h-11 text-sm border-gray-300 focus-visible:ring-sky-500"
                  />
                </div>
              </div>

              {/* Teléfono */}
              <div className="space-y-1">
                <Label>Teléfono</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="tel"
                    placeholder="+51 999 123 456"
                    className="pl-10 h-11 text-sm border-gray-300 focus-visible:ring-sky-500"
                  />
                </div>
              </div>

              {/* Dirección */}
              <div className="space-y-1">
                <Label>Dirección (opcional)</Label>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Tu dirección completa"
                    className="pl-10 h-11 text-sm border-gray-300 focus-visible:ring-sky-500"
                  />
                </div>
              </div>

              {/* Fecha de nacimiento */}
              <div className="space-y-1">
                <Label>Fecha de nacimiento (opcional)</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full h-11 justify-between font-normal text-sm"
                    >
                      {date ? date.toLocaleDateString() : "Seleccionar fecha"}
                      <CalendarIcon className="ml-2 w-5 h-5 text-gray-400" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(d) => {
                        setDate(d);
                      }}
                      captionLayout="dropdown"
                      fromYear={1900}
                      toYear={new Date().getFullYear()}
                      className="w-80"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Género */}
              <div className="space-y-1">
                <Label>Género (opcional)</Label>
                <Select onValueChange={setGender} value={gender}>
                  <SelectTrigger className="h-11 w-full text-sm min-h-[44px]">
                    <SelectValue
                      className="h-11 flex items-center"
                      placeholder="Seleccionar género"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {["Masculino", "Femenino", "Otro"].map((g) => (
                      <SelectItem key={g} value={g}>
                        {g}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Tipo de documento */}
              <div className="space-y-1">
                <Label>Tipo de documento</Label>
                <Select onValueChange={setDocType} value={docType}>
                  <SelectTrigger className="h-11 w-full text-sm relative pl-10 min-h-[44px]">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <SelectValue
                      className="h-11 flex items-center pl-0"
                      placeholder="Seleccionar tipo de documento"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {["DNI", "Pasaporte", "Carné de extranjería"].map(
                      (type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>

              {/* Número de documento */}
              <div className="space-y-1">
                <Label>Número de documento</Label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Número de documento"
                    className="pl-10 h-11 text-sm border-gray-300 focus-visible:ring-sky-500"
                  />
                </div>
              </div>

              {/* Contraseña */}
              <div className="space-y-1">
                <Label>Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mínimo 8 caracteres"
                    className="pl-10 pr-12 h-11 text-sm border-gray-300 focus-visible:ring-sky-500"
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

              {/* Confirmar contraseña */}
              <div className="space-y-1">
                <Label>Confirmar contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Repite tu contraseña"
                    className="pl-10 pr-12 h-11 text-sm border-gray-300 focus-visible:ring-sky-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm text-gray-600">
                Acepto los{" "}
                <a href="#" className="text-sky-500 hover:underline">
                  términos y condiciones
                </a>{" "}
                y la{" "}
                <a href="#" className="text-sky-500 hover:underline">
                  política de privacidad
                </a>
                .
              </Label>
            </div>
          </CardContent>

          <CardFooter className="pt-0">
            <Button className="w-full h-11 text-sm bg-sky-500 hover:bg-sky-600 cursor-pointer">
              Crear Cuenta
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
