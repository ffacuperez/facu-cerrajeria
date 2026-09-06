import type { Metadata } from "next";
import ServicePageLayout from "@/components/servicios/ServicePageLayout";

export const metadata: Metadata = {
  title: "Aperturas de Puertas 24hs en Córdoba",
  description:
    "Servicio de apertura de puertas de urgencia las 24 horas en Córdoba Capital. Casas, departamentos, comercios y vehículos. Llegamos en minutos sin dañar tu cerradura.",
  alternates: { canonical: "/aperturas-24hs" },
  openGraph: {
    title: "Aperturas de Puertas 24hs | Cerrajería Pérez",
    description:
      "Cerrajero de urgencia en Córdoba. Aperturas sin daño las 24 horas.",
    url: "https://www.cerrajeriaperez.com.ar/aperturas-24hs",
  },
};

export default function AperturasPage() {
  return (
    <ServicePageLayout
      icon="🔑"
      title="Aperturas 24hs"
      subtitle="Llegamos rápido a donde estés. Aperturas residenciales, comerciales y vehiculares sin daños."
      image="/carousel-urgencias.webp"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-perez-blue uppercase tracking-tighter mb-6">
        Cerrajero de urgencia en Córdoba Capital
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
        Sabemos que quedarse afuera de tu casa o de tu auto es una situación
        estresante que puede pasar en cualquier momento. Por eso en Cerrajería
        Pérez ofrecemos servicio de apertura de puertas las 24 horas, los 365
        días del año, en toda Córdoba Capital.
      </p>

      <p className="text-slate-600 leading-relaxed mb-6">
        Utilizamos herramientas de precisión que nos permiten abrir tu puerta
        sin dañar la cerradura ni la estructura. Trabajamos con puertas
        blindadas, cerraduras multipunto, cerrojos de seguridad y todo tipo de
        mecanismos residenciales y comerciales.
      </p>

      <h3 className="text-xl font-bold text-perez-blue uppercase tracking-tighter mb-4 mt-10">
        ¿Qué tipos de apertura realizamos?
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          "Puertas de casas y departamentos",
          "Locales comerciales y oficinas",
          "Portones y accesos de consorcios",
          "Vehículos (autos, camionetas, utilitarios)",
          "Candados y cadenas de seguridad",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span className="text-perez-blue font-bold mt-0.5">✓</span>
            <p className="text-slate-600">{item}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-perez-blue uppercase tracking-tighter mb-4">
        ¿Cómo trabajamos?
      </h3>

      <div className="border-l-4 border-perez-blue pl-6 space-y-6 mb-10">
        <div>
          <p className="font-bold text-perez-blue text-sm uppercase tracking-wider">
            1. Nos llamás o escribís por WhatsApp
          </p>
          <p className="text-slate-600 text-sm mt-1">
            Contanos tu situación y te damos un presupuesto estimado al
            instante.
          </p>
        </div>
        <div>
          <p className="font-bold text-perez-blue text-sm uppercase tracking-wider">
            2. Llegamos a tu ubicación
          </p>
          <p className="text-slate-600 text-sm mt-1">
            Nos desplazamos a cualquier punto de Córdoba Capital en el menor
            tiempo posible.
          </p>
        </div>
        <div>
          <p className="font-bold text-perez-blue text-sm uppercase tracking-wider">
            3. Resolvemos sin daños
          </p>
          <p className="text-slate-600 text-sm mt-1">
            Abrimos tu puerta con técnicas profesionales que preservan la
            cerradura y la puerta.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-perez-blue uppercase tracking-tighter mb-4">
        Zonas que cubrimos
      </h3>

      <p className="text-slate-600 leading-relaxed">
        Atendemos en Centro América, Alta Córdoba, General Bustos, Nueva
        Córdoba, Alberdi, San Vicente, Jardín, Güemes, Cerro de las Rosas,
        Argüello, Villa Cabrera y todos los barrios de Córdoba Capital. También
        nos desplazamos a localidades cercanas previa consulta.
      </p>
    </ServicePageLayout>
  );
}
