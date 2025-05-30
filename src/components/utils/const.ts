import { Career, Project } from "./types";

export const CAREER: Career[] = [
  {
    position: "Angular js Jr Developer",
    company: "TSoft",
    date: "Marzo 2021",
    description:
      "Encargado de la creación y mantenimiento de una nueva aplicación web para la gestión de documentos y formularios para los clientes del banco, con el fin de facilitar y agilizar los trámites que pueden realizar.",
  },
  {
    position: "React JS Ssr Developer",
    company: "Incluit",
    date: "Febrero 2023",
    description:
      "Responsable del mantenimiento del código, la creación de componentes, hooks y utilidades para el desarrollo de un sistema digital de procesamiento judicial para la corte de Texas, Estados Unidos.",
  },
  {
    position: "Ssr Fullstack Developer",
    company: "Oversoft",
    date: "Actualmente",
    description:
      "A cargo del desarrollo de componentes y diseños; responsable de la puesta en marcha del sitio web, como también el mantenimiento y optimización del mismo. Además coloboro como desarrollador del lado del procesamiento y esqumatización de los datos que recibe el sitio.",
  },
];

export const PROJECTS_ITEMS: Project[] = [
  {
    id: 0,
    title:
      "IAnime - Sitio web de recomendaciones de series anime en base a tus gustos, y enriquecido con inteligencia artificial.",
    description:
      "Sitio web impulsado con I  A que admite hasta 5 elecciones de tus animes favoritos, los cuales usará como referencia para brindarte las mejores recomendaciones de nuevas series. Creado desde cero con Next.js, React y Tailwind CSS.",
    category: "Web App",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://datalab-oso5.vercel.app/",
    github: "https://github.com/Ezem98/datalab",
    image: "/projects/ianime.webp",
  },
  {
    id: 1,
    title:
      "Datalab - Excelente herramienta para el scouting de jugadores en Argentina.",
    description:
      "Aplicación web que permite buscar jugadores; permite la comparación de jugadores, aceptando un máximo de 5 por vez; hacer nuevos descubrimientos en el mercado; personalizar la base de datos que se utiliza; y muchas más utilidades.",
    category: "Web App",
    tools: ["Next.js", "JavaScript", "Tailwind CSS"],
    link: "https://datalab-oso5.vercel.app/",
    github: "https://github.com/Ezem98/datalab",
    image: "/projects/datalab.webp",
  },
  {
    id: 2,
    title: "AintFungi - Una moda salida del futuro.",
    description:
      "Aplicación web para un e-commerce de indumentaria o marca de ropa que nació de la idea de la unicidad y distinción de cada persona.",
    category: "Web App",
    tools: ["React.js", "JavaScript", "CSS"],
    link: "https://aintfungi-frontend.vercel.app/",
    github: "https://github.com/Ezem98/aintfungi-frontend",
    image: "/projects/aintfungi.webp",
  },
  {
    id: 3,
    title: "EDM - Elevaplus Data Management. ",
    description:
      "Aplicación de uso diario y constante, para el manejo de diversos aspectos de una empresa dedicada al transporte. Desde la carga de servicios, el manejo de empleados, clientes, hasta gráficos que ayudan a visualizar el rendimiento diario, mensual y anual, asi como también comparar entre distintos periodos de tiempo.",
    category: "Web App",
    tools: ["Next.js", "JavaScript", "CSS"],
    link: "#",
    github: "https://github.com/Ezem98/elevaplus-data",
    image: "/projects/elevaplus.webp",
  },
];
