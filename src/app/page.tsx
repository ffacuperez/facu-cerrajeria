import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import Servicios from '@/components/Servicios'; // <-- Importamos el componente pro
import Testimonios from '@/components/Testimonios';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import WhatsAppBubble from '@/components/WhatsappBubble';

export default function Home() {
  return (
    <main id="inicio" className="min-h-screen">
      {/* 1. Navegación */}
      <Navbar />
      
      {/* 2. Hero con Carrusel */}
      <HeroCarousel />

      {/* 3. Sección de Servicios (Componente con fondo azul #040833 y plata) */}
      <Servicios />

      {/* 4. Sección de Testimonios (Fondo claro para contrastar) */}
      <Testimonios />

      <Contacto />

      <Footer />

      <WhatsAppBubble />
    </main>
  );
}