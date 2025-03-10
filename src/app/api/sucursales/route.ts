import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Manejo de solicitud GET para obtener sucursales
export async function GET() {
  try {
    const sucursales = await prisma.sucursal.findMany();
    return NextResponse.json(sucursales);
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener sucursales" }, { status: 500 });
  }
}

// Manejo de solicitud POST para agregar una nueva sucursal
export async function POST(req: Request) {
  try {
    // Leer los datos enviados en la solicitud
    const body = await req.json();
    const { nombre, direccion, telefono, correo, horaApertura, horaCierre, contraseña } = body;

    // Validaciones básicas
    if (!nombre || !direccion || !correo || !contraseña) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    // Insertar la nueva sucursal en la base de datos
    const nuevaSucursal = await prisma.sucursal.create({
      data: {
        nombre,
        direccion,
        telefono,
        correo,
        horaApertura: new Date(`1970-01-01T${horaApertura}:00Z`), // Convertir a formato TIME
        horaCierre: new Date(`1970-01-01T${horaCierre}:00Z`), // Convertir a formato TIME
        contraseña, // ⚠️ En producción, encripta esta contraseña
      },
    });

    // Responder con la nueva sucursal creada
    return NextResponse.json(nuevaSucursal, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error al crear sucursal" }, { status: 500 });
  }
}
