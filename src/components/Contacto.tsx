import React from 'react';

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna de Información */}
          <div>
            <h2 className="text-perez-blue font-bold tracking-[0.3em] uppercase text-xs mb-3">Atención Inmediata</h2>
            <p className="text-4xl font-bold text-slate-900 mb-10">Contacto y Ubicación</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
              
              {/* 1. Dirección */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-perez-silver-light flex items-center justify-center rounded-sm text-perez-blue shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-perez-blue uppercase text-sm tracking-wider">Dirección</h4>
                  <p className="text-slate-600">Dr. Eduardo Braun Menéndez 2579</p>
                  <p className="text-slate-600 font-medium text-sm italic">B° Centro América, Córdoba.</p>
                </div>
              </div>

              {/* 2. Horarios */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-perez-silver-light flex items-center justify-center rounded-sm text-perez-blue shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-perez-blue uppercase text-sm tracking-wider">Horarios</h4>
                  <p className="text-slate-600">Lunes a Viernes: 09:00 - 19:00 hs</p>
                  <p className="text-perez-blue font-bold">Urgencias: 24 Horas</p>
                </div>
              </div>

              {/* 3. Teléfonos (Icono con fondo normalizado) */}
              <div className="flex items-start gap-4">
                {/* Cambiamos 'bg-perez-blue' por 'bg-perez-silver-light' y 'text-white' por 'text-perez-blue' */}
                <div className="w-12 h-12 bg-perez-silver-light flex items-center justify-center rounded-sm text-perez-blue shrink-0 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-perez-blue uppercase text-sm tracking-wider">Teléfonos de Urgencia</h4>
                  <div className="mt-1 space-y-1">
                    <p className="text-slate-800 font-semibold flex items-center gap-2">
                      <span className="text-[10px] bg-perez-silver-light px-2 py-0.5 rounded">German Pérez</span> 351 664 0456
                    </p>
                    <p className="text-slate-800 font-semibold flex items-center gap-2">
                      <span className="text-[10px] bg-perez-silver-light px-2 py-0.5 rounded">Facundo Pérez</span> 351 814 8211
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Columna del Mapa */}
          <div className="h-[450px] w-full border-[12px] border-perez-silver-light shadow-2xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6812.880152252613!2d-64.17638748366514!3d-31.37442701458443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329916d9ee4ec5%3A0x653456b47f5dbb7b!2sCerrajeria!5e0!3m2!1ses-419!2sar!4v1773436503134!5m2!1ses-419!2sar"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}