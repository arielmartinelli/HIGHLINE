import type { Metadata, Viewport } from "next";
import { Barlow, Saira_Condensed } from "next/font/google";
import "./globals.css";

const saira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-saira",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HIGHLINE Servicio Automotriz",
  description:
    "Car audio, alarmas, cierres centralizados, polarizados, sensores, baterías y cerrajería del automotor en Córdoba. Consultá por WhatsApp.",
  keywords: [
    "car audio Córdoba",
    "alarmas para autos Córdoba",
    "polarizados Córdoba",
    "pantallas Android auto",
    "cierres centralizados",
    "cerrajería del automotor",
  ],
  openGraph: {
    title: "HIGHLINE Servicio Automotriz",
    description:
      "Sonido, seguridad y confort para tu auto. Car audio, alarmas, polarizados y multimedia en Córdoba.",
    locale: "es_AR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0E0F12",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${saira.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
