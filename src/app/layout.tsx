import type { Metadata } from "next";
import "./globals.css";
import {jetBrains_Mono, holtwoodOneSC} from './ui/fonts'



export const metadata: Metadata = {
  title: "Inicio de Sesión",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="es">
      <body className={`${jetBrains_Mono.className} antialiased`}>

        {children}

      </body>
    </html>
  );
}
