"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Dog, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Bloquear scroll cuando el menú esté abierto
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 font-bold text-xl">
            <Dog className="w-7 h-7 text-sky-500" />
            <Link href="/" className="flex items-center gap-1">
              <span className="text-gray-900">Pet</span>
              <span className="text-sky-500">LA</span>
            </Link>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#nosotros" className="text-gray-700 hover:text-sky-500">Nosotros</Link>
            <Link href="#servicios" className="text-gray-700 hover:text-sky-500">Servicios</Link>
            <Link href="#caracteristicas" className="text-gray-700 hover:text-sky-500">Características</Link>
            <Link href="#emergencias" className="text-gray-700 hover:text-sky-500">Emergencias</Link>
          </nav>

          {/* Botones derecha */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-sky-50 hover:text-sky-500 rounded-lg transition"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 text-sm font-medium bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
            >
              Registrarse
            </Link>
          </div>

          {/* Botón hamburguesa móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-sky-500 focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil mejorado */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex bg-black/80"
          onClick={() => setIsOpen(false)} // clic fuera cierra menú
        >
          {/* Sidebar */}
          <div
            className="ml-auto w-7/8 sm:w-2/3 md:w-1/2 h-screen bg-white shadow-lg p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()} // evita cerrar al hacer clic dentro
          >
            {/* Logo y botón cerrar */}
            <div className="flex items-center justify-between mb-10">
              <Link href="/" className="flex items-center space-x-2 font-bold text-xl" onClick={() => setIsOpen(false)}>
                <Dog className="w-6 h-6 text-sky-500" />
                <span className="text-gray-900">Pet</span>
                <span className="text-sky-500">LA</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-sky-500 focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navegación móvil */}
            <nav className="flex flex-col space-y-4 text-base font-medium">
              <Link
                href="#nosotros"
                className="px-3 py-2 rounded-lg hover:bg-sky-50 hover:text-sky-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="#servicios"
                className="px-3 py-2 rounded-lg hover:bg-sky-50 hover:text-sky-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#caracteristicas"
                className="px-3 py-2 rounded-lg hover:bg-sky-50 hover:text-sky-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Características
              </Link>
              <Link
                href="#emergencias"
                className="px-3 py-2 rounded-lg hover:bg-sky-50 hover:text-sky-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Emergencias
              </Link>

              <hr className="my-4" />

              <Link
                href="/login"
                className="px-3 py-2 rounded-lg text-center text-gray-700 hover:bg-sky-50 hover:text-sky-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Iniciar sesión
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 text-center font-medium bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Registrarse
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
