"use client";

import Image from "next/image";
import {
  Star,
  Clock,
  Users,
  Shield,
  FileText,
  Stethoscope,
  CircleCheckBig,
  PawPrint,
  MoveRight,
} from "lucide-react";

export default function Landing() {
  return (
    <>
      {/* hero section  */}

      <section
        id="hero"
        className="relative bg-gradient-to-r from-sky-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-500">
              <PawPrint className="w-4 h-4 mr-1" />
              Atención profesional 24/7
            </span>
            <h1 className="mt-6 text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              La salud de tus mascotas{" "}
              <span className="text-sky-500">en las mejores manos</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Sistema integral de gestión veterinaria con citas automatizadas,
              historial clínico digital y un equipo de veterinarios
              especializados comprometidos con el bienestar de tus compañeros de
              vida.
            </p>

            {/* Botones */}
            <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full">
              <a
                href="#servicios"
                className="w-full sm:w-auto px-8 py-2.5 bg-sky-500 text-white rounded-lg shadow hover:bg-sky-600 transition flex items-center justify-center gap-2"
              >
                Ver Servicios
                <MoveRight className="w-4 h-4" />
              </a>
              <a
                href="/login"
                className="w-full sm:w-auto px-8 py-2.5 border border-sky-500 text-sky-500 rounded-lg hover:bg-sky-50 transition text-center"
              >
                Portal de Clientes
              </a>
            </div>

            {/* Features abajo */}
            <div className="mt-8 flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-sky-500" />
                <span>Citas en 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-sky-500" />
                <span>Historial digital</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-sky-500" />
                <span>Pago seguro</span>
              </div>
            </div>
          </div>

          {/* Imagen con tarjetas */}
          <div className="relative">
            <Image
              src="/images/hero-vets.jpeg" // pon tu imagen en /public
              alt="Veterinarios"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />

            {/* Tarjeta 1 */}
            <div className="hidden sm:flex absolute top-6 left-6 bg-white shadow-lg rounded-lg px-4 py-2 items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100">
                <Star className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                98%
                <br />
                <span className="text-gray-500">Satisfacción</span>
              </span>
            </div>

            {/* Tarjeta 2 */}
            <div className="hidden sm:flex absolute top-6 right-6 bg-white shadow-lg rounded-lg px-4 py-2 items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100">
                <CircleCheckBig className="w-5 h-5 text-indigo-500" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                24/7
                <br />
                <span className="text-gray-500">Disponible</span>
              </span>
            </div>

            {/* Tarjeta 3 (Mascota Feliz, visible siempre) */}
            <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-lg px-4 py-2 flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
                <Stethoscope className="w-5 h-5 text-blue-500" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Mascota Feliz <br />
                <span className="text-gray-500">Cuidado Profesional</span>
              </span>
            </div>

            {/* Tarjeta 4 */}
            <div className="hidden sm:flex absolute bottom-6 right-6 bg-white shadow-lg rounded-lg px-4 py-2 items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100">
                <Users className="w-5 h-5 text-green-500" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                1000+ <br />
                <span className="text-gray-500">Mascotas</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
