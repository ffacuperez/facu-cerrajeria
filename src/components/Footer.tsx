import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-perez-blue text-perez-silver py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          
          {/* Logo y Eslogan */}
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <img 
              src="/logo-perez.png" 
              alt="Pérez Seguridad & Cerrajería" 
              className="h-20 md:h-24 w-auto mb-6 object-contain" 
            />
            <p className="text-sm font-light leading-relaxed">
              Servicios integrales de cerrajería y sistemas de seguridad. 
              Experiencia y compromiso al servicio de la comunidad cordobesa.
            </p>
          </div>

          {/* Enlaces de Navegación */}
          <div className="flex flex-col gap-4 uppercase text-[10px] tracking-[0.3em] font-bold">
            <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>

          {/* Info Legal y Créditos */}
          <div className="md:text-right">
            <p className="text-base font-medium text-white mb-1">
              Pérez Seguridad & Cerrajería
            </p>
            <p className="text-xs text-perez-silver/60">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
            {/* Un crédito muy discreto abajo del todo */}
            <p className="text-[10px] mt-6 text-perez-silver/30 group">
              Powered by <span className="group-hover:text-perez-silver transition-colors uppercase">F. Pérez</span>
            </p>
          </div>

        </div>
        
        {/* Línea final de ubicación */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[11px] text-slate-600 uppercase tracking-[0.6em] font-medium">
            Córdoba • Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}