"use client";

import React, { useState, useEffect } from 'react';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1512101344-93c66f281e2b?q=80&w=1920&auto=format&fit=crop',
    title: 'Seguridad para tu Hogar',
    subtitle: 'Expertos en aperturas y blindajes de puertas en Córdoba.'
  },
  {
    url: 'https://images.unsplash.com/photo-1549317661-ef355e75fe66?q=80&w=1920&auto=format&fit=crop',
    title: 'Cerrajería Automotriz',
    subtitle: 'Copias de llaves con chip, telemandos y carcasas.'
  },
  {
    url: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1920&auto=format&fit=crop',
    title: 'Urgencias 24 Horas',
    subtitle: 'Estamos donde nos necesites, cuando nos necesites.'
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funciones de navegación
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Autoplay estable: El timer se reinicia CADA VEZ que el currentIndex cambia
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]); // Solo depende de currentIndex, nunca cambia de tamaño

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black group">
      
      {/* Contenedor de Imágenes con Transición de Opacidad */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          {/* Overlay y Textos Alineados a la Izquierda */}
          <div className="absolute inset-0 bg-black/60 flex flex-col items-start justify-center px-6 md:px-24">
            <div className={`max-w-3xl transition-all duration-1000 delay-300 transform ${
              index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <h1 className="text-white text-5xl md:text-7xl font-bold mb-5 uppercase tracking-tighter drop-shadow-2xl">
                {slide.title}
              </h1>
              <p className="text-perez-silver text-xl md:text-2xl font-light italic max-w-xl drop-shadow-lg">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Flechas de Navegación */}
      <button 
        onClick={prevSlide} 
        className="hidden group-hover:block absolute top-1/2 left-6 -translate-y-1/2 z-30 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all shadow-2xl"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      
      <button 
        onClick={nextSlide} 
        className="hidden group-hover:block absolute top-1/2 right-6 -translate-y-1/2 z-30 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all shadow-2xl"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Indicadores (Barras abajo a la izquierda) */}
      <div className="absolute bottom-12 left-6 md:left-24 flex gap-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 transition-all duration-500 rounded-full ${
              index === currentIndex ? 'bg-white w-20' : 'bg-white/30 w-12 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}