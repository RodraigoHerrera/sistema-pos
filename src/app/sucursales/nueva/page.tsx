"use client"; // Necesario para usar eventos en Next.js App Router

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NuevaSucursal() {
  const [form, setForm] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    correo: "",
    horaApertura: "",
    horaCierre: "",
    contraseña: "",
  });

  const router = useRouter();

  // Función para actualizar los valores del formulario
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Función para enviar el formulario
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Enviar los datos a la API
    const res = await fetch("/api/sucursales", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Sucursal creada exitosamente!");
      router.push("/sucursales"); // Redirige a la lista de sucursales
    } else {
      alert("Error al crear sucursal");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Nueva Sucursal</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="text" name="direccion" placeholder="Dirección" value={form.direccion} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="text" name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="email" name="correo" placeholder="Correo" value={form.correo} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="time" name="horaApertura" placeholder="Hora Apertura" value={form.horaApertura} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="time" name="horaCierre" placeholder="Hora Cierre" value={form.horaCierre} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="password" name="contraseña" placeholder="Contraseña" value={form.contraseña} onChange={handleChange} className="w-full border p-2 rounded" required />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Crear Sucursal</button>
      </form>
    </div>
  );
}
