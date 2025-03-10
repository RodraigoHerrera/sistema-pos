import Image from "next/image";
import {holtwoodOneSC} from './ui/fonts'


export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Fondo completo con Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background1.png"   /* Ajusta la ruta según tu estructura de archivos */
          alt="Fondo"
          fill        /* Ocupa todo el contenedor */
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Contenedor del formulario */}
      <div className="relative bg-[#0C0C0F] bg-opacity-90 p-6 rounded shadow w-full max-w-lg">
        <h1 className={`${holtwoodOneSC.className} antialiased text-[#FF1E00] text-2xl font-bold text-center mb-4`}>
          SISTEMA POS
          </h1>
        <form className="space-y-4">
          {/* Campo de usuario */}
          <div>
            <label htmlFor="email" className="text-white block mb-1 font-medium">
              Usuario
            </label>
            <input
              id="email"
              type="email"
              placeholder="smashburguersur@gmail.com"
              className="w-full px-3 py-2 border border-white rounded bg-transparent text-white $1 placeholder-opacity-90 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          {/* Campo de contraseña */}
          <div>
            <label htmlFor="password" className="text-white block mb-1 font-medium">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="w-full px-3 py-2 border border-white rounded bg-transparent text-white $1 placeholder-opacity-90 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          {/* Botón de inicio de sesión */}
          <button
            type="submit"
            className="w-full py-2 bg-[#FFD700] text-[#0C0C0F] font-bold rounded hover:bg-[#FF1E00]"
          >
            INICIAR SESIÓN
          </button>
        </form>
      </div>
    </div>
  );
}
