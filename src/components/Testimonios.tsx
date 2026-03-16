import React from 'react';

const reseñas = [
  {
    nombre: "Karina carnero",
    comentario: "Excelente atención. Super recomendable.",
    estrellas: 5
  },
  {
    nombre: "Diego pérez",
    comentario: "Excelente calidad de atención!!!",
    estrellas: 5
  },
  {
    nombre: "Sandra Gudiño",
    comentario: "Muy recomendable",
    estrellas: 5
  }
];

// Componente pequeño para la estrella dorada
const Star = () => (
  <svg className="w-5 h-5 text-perez-gold fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-perez-blue font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Opiniones Reales
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900">
            Nuestros clientes nos avalan
          </p>
          <div className="h-1 w-20 bg-perez-gold mx-auto mt-6"></div>
        </div>

        {/* Grid de 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reseñas.map((r, index) => (
            <div 
              key={index} 
              className="bg-white p-8 border border-slate-100 shadow-xl shadow-slate-200/50 relative hover:-translate-y-3 transition-all duration-500 group"
            >
              {/* Comilla decorativa en azul marino */}
              <span className="absolute top-4 right-6 text-6xl text-perez-blue/10 font-serif group-hover:text-perez-blue/20 transition-colors">
                &ldquo;
              </span>

              {/* Estrellas Doradas */}
              <div className="flex gap-1 mb-6">
                {[...Array(r.estrellas)].map((_, i) => <Star key={i} />)}
              </div>

              {/* Texto de la reseña */}
              <p className="text-slate-600 leading-relaxed mb-8 italic">
                "{r.comentario}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 border-t border-slate-50 pt-6">
                <div className="h-10 w-10 bg-perez-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {r.nombre.charAt(0)}
                </div>
                <p className="font-bold text-perez-blue uppercase text-sm tracking-wider">
                  {r.nombre}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}