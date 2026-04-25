import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import Servicios from '@/components/Servicios'; // <-- Importamos el componente pro
import Testimonios from '@/components/Testimonios';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import WhatsAppBubble from '@/components/WhatsappBubble';
import Script from 'next/script';

export default function Home() {
  // 2. Definimos el JSON con la información de tu negocio
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "name": "Cerrajería Pérez",
    "description": "Cerrajería de urgencias 24 horas en Córdoba Capital. Seguridad y confianza.",
    "url": "https://cerrajeriaperez.com.ar",
    "telephone": "+5493518148211", // <-- Poné tu celular real acá
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Córdoba",
      "addressRegion": "Córdoba",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -31.4167, 
      "longitude": -64.1833
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "image": "https://cerrajeriaperez.com.ar/logo.png" 
  };

  return (
    <main id="inicio" className="min-h-screen">
      {/* 3. Pegamos el Script aquí adentro */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <HeroCarousel />
      <Servicios />
      <Testimonios />
      <Contacto />
      <Footer />
      <WhatsAppBubble />
    </main>
  );
}