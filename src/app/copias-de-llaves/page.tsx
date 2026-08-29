import type { Metadata } from "next";
import ServicePageLayout from "@/components/servicios/ServicePageLayout";

export const metadata: Metadata = {
  title: "Copias de Llaves en Córdoba",
  description:
    "Copias de llaves doble paleta, llaves codificadas, llaves con chip y llaveros magnéticos en Córdoba Capital. Duplicados de precisión en el acto.",
  alternates: { canonical: "/copias-de-llaves" },
  openGraph: {
    title: "Copias de Llaves de Precisión | Cerrajería Pérez",
    description:
      "Duplicados exactos de llaves doble paleta, codificadas y magnéticas en Córdoba.",
    url: "https://www.cerrajeriaperez.com.ar/copias-de-llaves",
  },
};

export default function CopiasPage() {
  return (
    <ServicePageLayout
      icon="⚙️"
      title="Copias de Llaves"
      subtitle="Duplicados de precisión en el acto. Llaves doble paleta, codificadas y llaveros magnéticos."
      image="/carousel-copias.webp"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-perez-blue uppercase tracking-tighter mb-6">
        Copias de llaves en Córdoba Capital
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
        En Cerrajería Pérez realizamos duplicados exactos de todo tipo de
        llaves con equipamiento de última generación. Ya sea que necesites una
        copia para un familiar, para un empleado de tu comercio o un repuesto
        por seguridad, te la hacemos en el acto y con garantía de
        funcionamiento.
      </p>

      <p className="text-slate-600 leading-relaxed mb-6">
        Trabajamos con las principales marcas del mercado argentino incluyendo
        cerraduras Star, Trabex, Kallay, Acytra y Prive. Cada copia se verifica
        antes de entregártela para asegurar un funcionamiento perfecto.
      </p>

      <h3 className="text-xl font-bold text-perez-blue uppercase tracking-tighter mb-4 mt-10">
        Tipos de llaves que copiamos
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          "Llaves doble paleta (las más comunes en Argentina)",
          "Llaveros magnéticos (tags) para edificios",
          "Llaves de candados y cadenas",
          "Llaves tubulares para muebles y escritorios",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span className="text-perez-blue font-bold mt-0.5">✓</span>
            <p className="text-slate-600">{item}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-perez-blue uppercase tracking-tighter mb-4">
        Llaveros magnéticos para edificios
      </h3>

      <p className="text-slate-600 leading-relaxed mb-10">
        Copiamos y configuramos llaveros magnéticos (tags) para consorcios y
        edificios. Si perdiste tu tag, si necesitás uno adicional o si te
        mudaste a un departamento con acceso magnético, podemos duplicarlo de
        forma rápida y económica. Traé el llavero original y te hacemos la
        copia en minutos.
      </p>

      <h3 className="text-xl font-bold text-perez-blue uppercase tracking-tighter mb-4">
        ¿Dónde nos encontrás?
      </h3>

      <p className="text-slate-600 leading-relaxed">
        Nuestro taller está en Dr. Eduardo Braun Menéndez 2579, barrio Centro
        América, Córdoba Capital. Podés acercarte en horario de atención (lunes
        a viernes de 9 a 21 hs) o contactarnos por WhatsApp para consultar
        disponibilidad. También atendemos en Alta Córdoba, General Bustos,
        Nueva Córdoba, Alberdi, San Vicente, Jardín, Güemes y alrededores.
      </p>
    </ServicePageLayout>
  );
}
