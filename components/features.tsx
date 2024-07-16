"use client";

import texts from "@/components/utils/sections.json";
import { IoMdPaper } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { ImStatsBars } from "react-icons/im";
import { useState, useRef, useEffect } from "react";

const cardsInfo = [
  {
    id: 1,
    title: "Misión",
    description:
      "Nuestra misión es transformar la forma en que se desarrollan las habilidades de liderazgo, brindando una experiencia de aprendizaje incomparable que trasciende los límites de lo convencional. Nos esforzamos por capacitar a los líderes del mañana con las herramientas y la confianza necesarias para enfrentar los desafíos del mundo empresarial en constante evolución.",
    icon: <HiOutlineLightBulb size={75} />,
  },
  {
    id: 2,
    title: "Visión",
    description:
      "Visualizamos un futuro en el que cada líder tenga acceso a una plataforma revolucionaria que les permita practicar, perfeccionar y dominar sus habilidades de gestión en un entorno virtual realista. Queremos ser reconocidos como el estándar de oro en la formación de liderazgo, impulsando el éxito individual y organizacional en todo el mundo.",
    icon: <ImStatsBars size={75} />,
  },
  {
    id: 3,
    title: "¿Qué nos diferencia?",
    description:
      "En Leadsculpt no sólo ofrecemos una plataforma de realidad virtual para la formación en habilidades directivas, sino que también brindamos una experiencia completa y personalizada. Nuestra atención al detalle, nuestro enfoque en la calidad y nuestra pasión por la innovación nos distinguen en el mercado. Además, nuestra plataforma se adapta a las necesidades específicas de cada cliente, garantizando un aprendizaje efectivo y relevante.",
    icon: <IoMdPaper size={75} />,
  },
];

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-12 md:pt-20">
        <div className="text-left pb-12">
          <h1 className="h2 mb-4 expressa">{texts["section-three"].title}</h1>
          <p
            className="text-xl text-gray-600 mb-8 text-left"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            {texts["section-three"].body}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cardsInfo.map((card) => (
              <div
                key={card.id}
                className="max-w-sm bg-gray-200 border-transparent rounded-lg shadow hover:bg-white dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700"
              >
                <div className="p-6">
                  <div className="mr-4">{card.icon}</div>
                  <div>
                    <div>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black expressa">
                        {card.title}
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
