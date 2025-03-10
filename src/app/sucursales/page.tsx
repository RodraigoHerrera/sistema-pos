"use client"; // Necesario para usar useEffect en Next.js App Router

import { useState, useEffect } from "react";

// Definimos el tipo de datos que tendrá cada sucursal
type Sucursal = {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string | null;
  correo: string;
};

// Componente de la página
export default function SucursalesPage() {
  // Estado para almacenar las sucursales obtenidas de la API
  const [sucursales, setSucursales] = useState<Sucursal[]>([]);

  // useEffect para obtener los datos cuando la página se carga
  useEffect(() => {
    fetch("/api/sucursales") // Llamamos a la API que creamos antes
      .then((res) => res.json()) // Convertimos la respuesta a JSON
      .then((data) => setSucursales(data)) // Guardamos los datos en el estado
      .catch((error) => console.error("Error al obtener sucursales:", error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Sucursales</h1>
      <ul className="space-y-2">
        {sucursales.map((sucursal) => (
          <li key={sucursal.id} className="border p-4 rounded">
            <strong>{sucursal.nombre}</strong>
            <p>📍 {sucursal.direccion}</p>
            <p>📧 {sucursal.correo}</p>
            {sucursal.telefono && <p>📞 {sucursal.telefono}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
