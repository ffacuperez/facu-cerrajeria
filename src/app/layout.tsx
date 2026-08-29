import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cerrajería Pérez | Urgencias 24hs en Córdoba Capital",
    template: "%s | Cerrajería Pérez",
  },
  description:
    "Cerrajería en Córdoba Capital. Aperturas de urgencia 24hs, copias de llaves doble paleta, cambio de combinación y cerraduras de seguridad. Atención inmediata.",
  metadataBase: new URL("https://www.cerrajeriaperez.com.ar"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cerrajería Pérez | Urgencias 24hs en Córdoba Capital",
    description:
      "Servicio integral de cerrajería en Córdoba. Aperturas 24hs, copias de llaves y seguridad.",
    url: "https://www.cerrajeriaperez.com.ar",
    siteName: "Cerrajería Pérez",
    locale: "es_AR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
