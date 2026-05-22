"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicios = [
  {
    titulo: "Aperturas 24hs",
    desc: "Aperturas de puertas de casa, comercios y vehículos sin daños. Servicio de urgencia garantizado.",
    icon: "🔑"
  },
  {
    titulo: "Copias de Precisión",
    desc: "Duplicados de llaves comunes, multipunto y automotrices con tecnología de última generación.",
    icon: "⚙️"
  },
  {
    titulo: "Seguridad Integral",
    desc: "Instalación de cerrojos de alta seguridad, blindaje de accesos y cambios de combinación.",
    icon: "🛡️"
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

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{selectedService.icon}</div>
                <h2 className="text-2xl font-black text-perez-blue uppercase tracking-tighter">
                  {selectedService.titulo}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                {selectedService.desc}
              </p>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full bg-perez-blue text-white py-3 rounded font-bold text-sm tracking-widest uppercase hover:bg-perez-blue/90 transition-colors"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}