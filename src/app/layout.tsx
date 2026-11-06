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

/**
 * En Vercel sale solo del dominio de producción.
 * Si después ponés dominio propio, definí NEXT_PUBLIC_SITE_URL y manda ese.
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const TITULO = "HIGHLINE · Servicio Automotriz";
const DESCRIPCION =
  "Seguridad: alarmas y cierres. Sonido: sistemas de audio car. Multimedia, polarizados, sensores y baterías en Córdoba. Consultá por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: "/" },
  keywords: [
    "car audio Córdoba",
    "alarmas para autos Córdoba",
    "polarizados Córdoba",
    "pantallas Android auto",
    "cierres centralizados",
    "cerrajería del automotor",
  ],
  openGraph: {
    title: TITULO,
    description: DESCRIPCION,
    url: "/",
    siteName: "HIGHLINE",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "HIGHLINE · Expertos en servicio automotriz. Seguridad: alarmas y cierres. Sonido: sistemas de audio car. Multimedia: pantallas Android.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRIPCION,
    images: ["/og.jpg"],
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
