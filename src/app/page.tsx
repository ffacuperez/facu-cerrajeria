import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import Servicios from '@/components/Servicios'; // <-- Importamos el componente pro
import Testimonios from '@/components/Testimonios';
import Contacto from '@/components/Contacto';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppBubble from '@/components/WhatsappBubble';
import Script from 'next/script';

export default function Home() {
  // 2. Definimos el JSON con la información de tu negocio
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "name": "Cerrajería Pérez",
    "description":
      "Cerrajería en Córdoba Capital. Aperturas de urgencia 24hs, copias de llaves doble paleta, cambio de combinación y cerraduras de seguridad.",
    "url": "https://www.cerrajeriaperez.com.ar",
    "telephone": ["+5493516640456", "+5493518148211"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dr. Eduardo Braun Menéndez 2579",
      "addressLocality": "Córdoba",
      "addressRegion": "Córdoba",
      "postalCode": "5001",
      "addressCountry": "AR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -31.3744,
      "longitude": -64.1764,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "21:00",
      },
    ],
    "areaServed": {
      "@type": "City",
      "name": "Córdoba",
    },
    "image": "https://www.cerrajeriaperez.com.ar/logo-perez.png",
    "priceRange": "$$",
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
      <FAQ />
      <Footer />
      <WhatsAppBubble />
    </main>
  );
}