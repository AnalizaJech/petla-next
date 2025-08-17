"use client";

import { Dog } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-gray-300 pt-12 pb-6 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Columna 1 - Logo y misión */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Dog />
            <span className="text-xl font-bold text-white">PetLA</span>
          </div>
          <p className="text-sm mb-4">
            La plataforma veterinaria líder en Latinoamérica. Conectamos tecnología innovadora con el cuidado profesional que tu mascota merece.
          </p>
          <div className="bg-[#1b263b] p-4 rounded-md mb-6">
            <h3 className="font-semibold text-white flex items-center mb-2">
              <span className="mr-2">🐾</span> Nuestra Misión
            </h3>
            <p className="text-sm">
              Revolucionar el cuidado veterinario mediante tecnología accesible, conectando a las mascotas con la mejor atención médica.
            </p>
          </div>
          <div className="flex space-x-6 text-center">
            <div>
              <p className="text-blue-400 font-bold">500+</p>
              <span className="text-xs">Familias</span>
            </div>
            <div>
              <p className="text-orange-400 font-bold">15+</p>
              <span className="text-xs">Veterinarios</span>
            </div>
            <div>
              <p className="text-green-400 font-bold">24/7</p>
              <span className="text-xs">Disponible</span>
            </div>
          </div>
        </div>

        {/* Columna 2 - Contacto */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
          <div className="space-y-3 text-sm">
            <p>
              <span className="font-medium text-blue-400">+51 999 123 456</span><br />
              Citas y consultas<br />
              <span className="text-gray-400">Lun - Dom: 6AM - 10PM</span>
            </p>
            <p>
              <span className="font-medium text-orange-400">info@petla.com</span><br />
              Consultas generales<br />
              <span className="text-gray-400">Respuesta &lt; 2h</span>
            </p>
            <p>
              <span className="font-medium text-green-400">Av. Principal 123</span><br />
              Centro Médico Veterinario<br />
              <span className="text-gray-400">Zona Centro • Fácil acceso</span>
            </p>
          </div>

          <div className="mt-4 space-y-3">
            <div className="bg-[#1b3a57] text-blue-300 p-3 rounded-md text-sm">
              <strong>📜 Certificado Veterinario</strong><br />
              Licencia SENASA #VET-2024-001
            </div>
            <div className="bg-[#3a1b1b] text-orange-300 p-3 rounded-md text-sm">
              <strong>🚨 Emergencias 24/7</strong><br />
              Respuesta &lt; 5 minutos
            </div>
          </div>
        </div>

        {/* Columna 3 - Redes */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Síguenos en Redes</h3>
          <p className="text-sm mb-4">
            Únete a nuestra comunidad de amantes de las mascotas. Consejos diarios, historias inspiradoras y contenido educativo.
          </p>
          <div className="flex flex-col space-y-2 text-sm">
            <Link href="#" className="text-pink-400">📸 Instagram — Fotos diarias</Link>
            <Link href="#" className="text-red-400">▶️ YouTube — Tutoriales</Link>
            <Link href="#" className="text-white">🎵 TikTok — Videos virales</Link>
            <Link href="#" className="text-blue-400">✖ X — Noticias</Link>
          </div>

          <div className="bg-[#1b263b] p-4 rounded-md mt-6">
            <h3 className="font-semibold text-white mb-2">Nuestra Comunidad</h3>
            <p className="text-sm">Seguidores totales <span className="text-blue-400 font-bold">50K+</span></p>
            <p className="text-sm">Videos educativos <span className="text-orange-400 font-bold">200+</span></p>
            <p className="text-sm">Historias compartidas <span className="text-green-400 font-bold">1000+</span></p>
          </div>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2024 PetLA. Todos los derechos reservados. | Privacidad | Términos | Cookies</p>
        <p className="mt-2 md:mt-0">Hecho con 🐾 para el bienestar animal</p>
      </div>
    </footer>
  );
}
