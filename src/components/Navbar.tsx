// src/components/Navbar.tsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[100] w-full bg-perez-blue border-b border-perez-silver/20 px-4 md:px-12 py-3 flex justify-between items-center shadow-2xl">
      
      {/* Logo */}
      <div className="flex items-center">
        <a href="#inicio" className="transition-transform hover:scale-105">
          <img src="/logo-perez.png" alt="Logo" className="h-12 md:h-14 w-auto object-contain" />
        </a>
      </div>

      {/* Menú Centrado */}
      <div className="flex items-center gap-6 md:gap-10 text-perez-silver font-medium tracking-wide text-sm md:text-base">
        <a href="#inicio" className="hover:text-white transition-all">Inicio</a>
        <a href="#servicios" className="hover:text-white transition-all">Servicios</a>
        <a href="#testimonios" className="hover:text-white transition-all">Testimonios</a>
        <a href="#contacto" className="hover:text-white transition-all">Contacto</a>
      </div>

      {/* Espacio vacío para balancear el flex o podés dejarlo sin nada */}
      <div className="hidden md:block w-14"></div>
    </nav>
  );
};

export default Navbar;