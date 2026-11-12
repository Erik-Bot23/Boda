//Las fuentes, el header y el footer globales
import Cortina from "@/components/layout/Cortina";
import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Boda de Sonia y David",
  description: "Acompañanos a celebrar nuestro amor en nuestra boda. Descubre todos los detalles del evento, confirma tu asistencia y comparte este momento especial con nosotros.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${cormorant.variable} ${montserrat.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <Cortina>
          {children}
        </Cortina>
      </body>
    </html>
  );
}

