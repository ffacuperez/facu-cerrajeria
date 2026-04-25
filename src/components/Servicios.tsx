"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicios = [
  {
    titulo: "Aperturas 24hs",
    desc: "Servicio de urgencia garantizado en casas, comercios y vehículos.",
    detalles: "Atendemos urgencias las 24 horas. Utilizamos herramientas de precisión para aperturas de puertas blindadas y vehículos sin afectar la estética ni la seguridad original.",
    icon: "🔑",
    imagen: "https://images.unsplash.com/photo-1582139329536-87284ff17d5a?auto=format&fit=crop&q=80&w=800" // Ejemplo: Llave en cerradura
  },
  {
    titulo: "Copias de Precisión",
    desc: "Duplicados de llaves y llaveros magnéticos con tecnología láser.",
    detalles: "Realizamos duplicados exactos en el acto. Copiamos llaves multipunto, llaves de doble paleta y configuramos llaveros magnéticos (tags) para edificios con máxima fidelidad.",
    icon: "⚙️",
    imagen: "https://images.unsplash.com/photo-1622321639014-63309607833a?auto=format&fit=crop&q=80&w=800" // Ejemplo: Máquina duplicadora
  },
  {
    titulo: "Seguridad Integral",
    desc: "Instalación de cerrojos de alta seguridad y cambios de combinación.",
    detalles: "Asesoramiento para blindar tu hogar. Instalación de cerrojos suplementarios de marcas líderes y mantenimiento especializado de cajas fuertes.",
    icon: "🛡️",
    imagen: "https://images.unsplash.com/photo-1510819242995-09a701271224?auto=format&fit=crop&q=80&w=800" // Ejemplo: Escudo de seguridad
  }
];

export default function Servicios() {
  const [selectedService, setSelectedService] = useState<typeof servicios[0] | null>(null);

  return (
    <section id="servicios" className="py-24 bg-perez-silver-light relative">
      <div className="container mx-auto px-6">
        
        {/* Cabecera (Tu diseño original) */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-perez-blue text-sm font-bold tracking-[0.3em] uppercase mb-2">Profesionalismo</h2>
            <p className="text-4xl md:text-5xl font-bold text-perez-blue uppercase tracking-tighter">Nuestros Servicios</p>
          </motion.div>
          <p className="text-slate-600 max-w-md mt-4 md:mt-0 font-light italic">
            Combinamos la experiencia artesanal con tecnología de punta.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              onClick={() => setSelectedService(s)}
              className="group p-10 bg-white border-b-8 border-perez-blue shadow-xl cursor-pointer"
            >
              <div className="text-4xl mb-6 bg-perez-blue/5 w-16 h-16 flex items-center justify-center rounded-full group-hover:bg-perez-blue group-hover:text-white transition-colors duration-500">
                {s.icon}
              </div>
              <h3 className="text-xl font-black text-perez-blue mb-4 uppercase tracking-tighter">{s.titulo}</h3>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              <div className="mt-8 flex items-center gap-2 text-perez-blue font-bold text-xs tracking-widest opacity-60">
                SABER MÁS <span className="text-lg">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MODAL FLUIDO --- */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop con Blur suave */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-perez-blue/40 backdrop-blur-md"
            />

            {/* Contenido del Modal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white overflow-hidden rounded-2xl shadow-2xl max-w-lg w-full z-10"
            >
              {/* Imagen de Encabezado */}
              <div className="h-48 w-full relative overflow-hidden">
                <img 
                  src={selectedService.imagen} 
                  alt={selectedService.titulo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white p-2 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Contenido Texto */}
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{selectedService.icon}</span>
                  <h3 className="text-2xl font-black text-perez-blue uppercase tracking-tighter">
                    {selectedService.titulo}
                  </h3>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8 font-light italic border-l-4 border-perez-blue pl-4">
                  {selectedService.detalles}
                </p>

                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => window.open('https://wa.me/549351...')}
                    className="bg-perez-blue text-white font-bold py-4 px-8 rounded-lg hover:bg-slate-800 transition-all uppercase text-xs tracking-widest text-center shadow-lg"
                  >
                    Consultar por WhatsApp
                  </button>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="text-slate-400 font-bold py-2 uppercase text-[10px] tracking-[0.2em] hover:text-perez-blue transition-colors"
                  >
                    Volver al inicio
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}