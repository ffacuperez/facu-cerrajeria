import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsappBubble";

interface ServicePageLayoutProps {
  icon: string;
  title: string;
  subtitle: string;
  image: string;
  children: React.ReactNode;
}

export default function ServicePageLayout({
  icon,
  title,
  subtitle,
  image,
  children,
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero del servicio */}
      <section
        className="relative h-[60vh] min-h-[400px] w-full flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6 md:px-24">
          <span className="text-5xl mb-4 block">{icon}</span>
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tighter drop-shadow-2xl mb-4">
            {title}
          </h1>
          <p className="text-perez-silver text-lg md:text-xl font-light italic max-w-2xl drop-shadow-lg">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-24 max-w-4xl">
          {children}
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-perez-silver-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-perez-blue uppercase tracking-tighter mb-4">
            ¿Necesitás este servicio?
          </h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
            Contactanos ahora y te atendemos de inmediato. Servicio en toda
            Córdoba Capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/543518148211"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-perez-blue text-white font-bold py-4 px-10 hover:bg-slate-800 transition-all uppercase text-xs tracking-widest shadow-lg inline-block"
            >
              WhatsApp
            </a>
            <a
              href="tel:+5493516640456"
              className="border-2 border-perez-blue text-perez-blue font-bold py-4 px-10 hover:bg-perez-blue hover:text-white transition-all uppercase text-xs tracking-widest inline-block"
            >
              Llamar ahora
            </a>
          </div>
          <a
            href="/#servicios"
            className="inline-block mt-8 text-perez-blue text-sm font-medium hover:underline"
          >
            ← Volver a todos los servicios
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppBubble />
    </div>
  );
}
