import type { Metadata } from "next";
import ServicePageLayout from "@/components/servicios/ServicePageLayout";

export const metadata: Metadata = {
  title: "Cambio de Cerraduras y Combinación en Córdoba",
  description:
    "Cambio de combinación, instalación de cerraduras de seguridad y cerrojos en Córdoba Capital. Marcas Star, Trabex y Kallay. Asesoramiento profesional.",
  alternates: { canonical: "/cambio-de-cerraduras" },
  openGraph: {
    title: "Cambio de Cerraduras y Combinación | Cerrajería Pérez",
    description:
      "Instalación de cerraduras de seguridad y cambio de combinación en Córdoba.",
    url: "https://www.cerrajeriaperez.com.ar/cambio-de-cerraduras",
  },
};

export default function CerradurasPage() {
  return (
    <ServicePageLayout
      icon="🛡️"
      title="Cambio de Cerraduras"
      subtitle="Cambio de combinación e instalación de cerraduras de seguridad para tu tranquilidad."
      image="/carousel-cerradura.webp"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-perez-blue uppercase tracking-tighter mb-6">
        Cambio de cerraduras y combinación en Córdoba
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
        ¿Te mudaste, perdiste las llaves o simplemente querés reforzar la
        seguridad de tu hogar? En Cerrajería Pérez realizamos cambios de
        combinación e instalación de cerraduras de seguridad con materiales de
        primera calidad y mano de obra profesional.
      </p>

      <p className="text-slate-600 leading-relaxed mb-6">
        Te asesoramos sobre la mejor opción según el tipo de puerta, el nivel
        de seguridad que necesitás y tu presupuesto. Trabajamos con las marcas
        más confiables del mercado argentino.
      </p>

      <h3 className="text-xl font-bold text-perez-blue uppercase tracking-tighter mb-4 mt-10">
        Servicios de seguridad que ofrecemos
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          "Cambio de combinación de cerraduras existentes",
          "Instalación de cerraduras de embutir",
          "Cerrojos suplementarios de alta seguridad",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span className="text-perez-blue font-bold mt-0.5">✓</span>
            <p className="text-slate-600">{item}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-perez-blue uppercase tracking-tighter mb-4">
        Marcas con las que trabajamos
      </h3>

      <p className="text-slate-600 leading-relaxed mb-10">
        Instalamos y reparamos cerraduras de las marcas líderes en Argentina:
        Star, Trabex, Kallay, Acytra y Prive. Cada marca tiene sus ventajas
        según el tipo de puerta y el nivel de seguridad requerido. Te ayudamos
        a elegir la que mejor se adapte a tu necesidad.
      </p>

      <h3 className="text-xl font-bold text-perez-blue uppercase tracking-tighter mb-4">
        ¿Cuándo conviene cambiar la cerradura?
      </h3>

      <div className="bg-perez-silver-light p-6 md:p-8 mb-10">
        <ul className="space-y-3 text-slate-600">
          <li className="flex items-start gap-3">
            <span className="text-perez-blue font-bold mt-0.5">→</span>
            <span>Cuando te mudás a una propiedad nueva o alquilada</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-perez-blue font-bold mt-0.5">→</span>
            <span>Si perdiste las llaves o te las robaron</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-perez-blue font-bold mt-0.5">→</span>
            <span>Después de un intento de robo o vandalismo</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-perez-blue font-bold mt-0.5">→</span>
            <span>Cuando la cerradura actual tiene años y funciona mal</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-perez-blue font-bold mt-0.5">→</span>
            <span>Si querés subir el nivel de seguridad de tu casa o comercio</span>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-perez-blue uppercase tracking-tighter mb-4">
        Zonas de cobertura
      </h3>

      <p className="text-slate-600 leading-relaxed">
        Realizamos cambios de cerraduras a domicilio en toda Córdoba Capital:
        Centro América, Alta Córdoba, General Bustos, Nueva Córdoba, Alberdi,
        San Vicente, Jardín, Güemes, Cerro de las Rosas, Argüello, Villa
        Cabrera y barrios aledaños. Consultanos por disponibilidad en
        localidades del Gran Córdoba.
      </p>
    </ServicePageLayout>
  );
}
