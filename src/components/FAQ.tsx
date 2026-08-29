"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    pregunta: "¿Cuánto sale un cerrajero a domicilio en Córdoba?",
    respuesta:
      "El costo depende del tipo de servicio y la complejidad del trabajo. Ofrecemos presupuesto sin compromiso por WhatsApp o teléfono antes de desplazarnos. Nuestros precios son competitivos y transparentes, sin cargos ocultos.",
  },
  {
    pregunta: "¿Atienden urgencias a la madrugada y fines de semana?",
    respuesta:
      "Sí, brindamos servicio de apertura de urgencia las 24 horas, los 365 días del año, incluyendo feriados. Nos desplazamos a cualquier punto de Córdoba Capital.",
  },
  {
    pregunta: "¿Cuánto tardan en llegar?",
    respuesta:
      "Dependiendo de la zona, llegamos en 15 a 40 minutos. Cubrimos Centro América, Alta Córdoba, General Bustos, Nueva Córdoba, Alberdi, San Vicente, Jardín, Güemes y todos los barrios de Córdoba Capital.",
  },
  {
    pregunta: "¿Hacen copias de llaves doble paleta?",
    respuesta:
      "Sí, realizamos copias de llaves doble paleta, multipunto, codificadas, con chip y llaveros magnéticos para edificios. Trabajamos con equipamiento de precisión y verificamos cada copia antes de entregarla.",
  },
  {
    pregunta: "¿Con qué marcas de cerraduras trabajan?",
    respuesta:
      "Trabajamos con las marcas líderes del mercado argentino: Star, Trabex, Kallay, Acytra y Prive. Te asesoramos sobre cuál es la mejor opción según tu tipo de puerta y nivel de seguridad.",
  },
  {
    pregunta: "¿Abren autos si me quedé con las llaves adentro?",
    respuesta:
      "Sí, realizamos aperturas de vehículos (autos, camionetas y utilitarios) sin dañar la cerradura ni la carrocería. También hacemos copias de llaves codificadas y con chip para automotores.",
  },
  {
    pregunta: "¿Cuándo conviene cambiar la cerradura de mi casa?",
    respuesta:
      "Recomendamos cambiar la cerradura cuando te mudás a una propiedad nueva, si perdiste las llaves o te las robaron, después de un intento de robo, o si la cerradura tiene muchos años y funciona con dificultad.",
  },
];

export default function FAQ() {
  const [abierta, setAbierta] = useState<number | null>(null);

  return (
    <section id="FAQ" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-perez-blue text-sm font-bold tracking-[0.3em] uppercase mb-2">
            Resolvé tus dudas
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-perez-blue uppercase tracking-tighter">
            Preguntas Frecuentes
          </p>
        </motion.div>

        {/* Acordeón */}
        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-slate-200">
              <button
                onClick={() => setAbierta(abierta === i ? null : i)}
                className="w-full text-left py-6 flex items-center justify-between gap-4 group cursor-pointer"
              >
                <span className="text-perez-blue font-bold text-lg group-hover:text-perez-blue/80 transition-colors">
                  {faq.pregunta}
                </span>
                <motion.span
                  animate={{ rotate: abierta === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-perez-blue text-2xl font-light shrink-0"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {abierta === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-600 leading-relaxed pb-6">
                      {faq.respuesta}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.pregunta,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.respuesta,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
