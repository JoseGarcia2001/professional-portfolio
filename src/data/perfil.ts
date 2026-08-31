/** Contenido del perfil. Separado de la presentación: el texto se edita aquí,
 * los componentes solo lo renderizan. */

/** Cita del sitio de 2021. Se conserva porque explica el origen mejor que
 * cualquier reformulación. */
export const cita =
  "Desde muy chico me encantó la tecnología y encontrar el porqué de las cosas. Un día, por un anuncio casual y mucha curiosidad, conocí la programación. En ese momento supe qué debía hacer.";

export const posicionamiento = {
  titular: "Construyo equipos que construyen software.",
  entrada:
    "Empecé con un destornillador en la mano y terminé dirigiendo equipos de ingeniería. Entre esos dos puntos hay cinco años de software en producción: frontend, backend, arquitectura y liderazgo.",
  cierre: "Mi trabajo es que otras personas hagan el mejor trabajo de su carrera.",
  cierreNota:
    "Escribo menos código y tomo más decisiones. Si estás construyendo algo que necesita ese tipo de liderazgo, hablemos.",
} as const;

export interface Capacidad {
  titulo: string;
  detalle: string;
}

export const capacidades: Capacidad[] = [
  {
    titulo: "Liderazgo de ingeniería",
    detalle:
      "Formo equipos y los hago crecer. Contratación, evaluación de desempeño, planes de carrera y los procesos que sostienen la entrega cuando el equipo se duplica.",
  },
  {
    titulo: "Arquitectura de producto",
    detalle:
      "Diseño sistemas web completos en TypeScript, del componente a la base de datos. Decido dónde vive la complejidad y qué deuda técnica vale la pena.",
  },
  {
    titulo: "Agentes de IA en el equipo",
    detalle:
      "Integro agentes en el flujo real de desarrollo, con revisión y trazabilidad. No como demostración, sino como capacidad instalada del equipo.",
  },
];

export interface Etapa {
  periodo: string;
  rol: string;
  contexto: string;
  detalle: string;
}

/** Trayectoria en orden inverso: lo más reciente primero. */
export const trayectoria: Etapa[] = [
  {
    periodo: "2024 - hoy",
    rol: "Engineering Manager",
    contexto: "Fintech e inmobiliario",
    detalle:
      "Dirijo equipos de ingeniería que construyen producto con usuarios reales. Mi responsabilidad dejó de ser el código y pasó a ser la gente que lo escribe: contratación, crecimiento, desempeño y entrega sostenida.",
  },
  {
    periodo: "2023 - 2024",
    rol: "Líder técnico",
    contexto: "Producto digital",
    detalle:
      "Responsable de las decisiones técnicas de un equipo de producto. Diseño de sistemas, control de deuda técnica y la negociación permanente entre alcance, plazo y calidad.",
  },
  {
    periodo: "2023",
    rol: "Desarrollador frontend senior",
    contexto: "Producto digital",
    detalle:
      "Pasé de resolver tareas a definir cómo se resuelven. Arquitectura de frontend, estándares de código y revisión del trabajo de otras personas.",
  },
  {
    periodo: "2022",
    rol: "Desarrollador frontend",
    contexto: "Startup de tecnología",
    detalle:
      "Interfaces de producto en React y TypeScript, con usuarios reales desde el primer despliegue. Aquí aprendí que el detalle visual es parte de la funcionalidad.",
  },
  {
    periodo: "2021",
    rol: "Desarrollador web independiente",
    contexto: "Proyectos por encargo",
    detalle:
      "Construí presencia digital para negocios locales: páginas web, catálogos digitales y publicación en plataformas de terceros. Producto de punta a punta, solo.",
  },
  {
    periodo: "2019 - 2020",
    rol: "Practicante de infraestructura",
    contexto: "Servicios de tecnología",
    detalle:
      "Primer contacto profesional con servidores, redes y operación. Salí sabiendo que el software me interesaba más que el hardware.",
  },
  {
    periodo: "2016 - 2020",
    rol: "Técnico independiente",
    contexto: "JOGA Systems",
    detalle:
      "Armé y reparé computadores por mi cuenta. Aprendí a diagnosticar antes de cambiar piezas. Es el mismo método que uso hoy para depurar software, y de aquí sale el nombre jogadev.",
  },
];

export interface Formacion {
  periodo: string;
  titulo: string;
  institucion: string;
}

/** Formación reglada y cursos. Del sitio de 2021, verificado. */
export const formacion: Formacion[] = [
  {
    periodo: "2021",
    titulo: "Escuela de desarrollo web",
    institucion: "Platzi",
  },
  {
    periodo: "2020 - 2021",
    titulo: "Escuela de JavaScript",
    institucion: "Platzi",
  },
  {
    periodo: "2018 - 2020",
    titulo: "Tecnólogo en gestión de redes de datos",
    institucion: "SENA",
  },
  {
    periodo: "2016 - 2018",
    titulo: "Técnico en mantenimiento de equipos de cómputo",
    institucion: "SENA",
  },
];

export interface Proyecto {
  nombre: string;
  descripcion: string;
  stack: string[];
  href?: string;
  estado: string;
}

/** Proyectos propios, todos públicos. Nada de trabajo de terceros. */
export const proyectos: Proyecto[] = [
  {
    nombre: "jogadev-skills",
    descripcion:
      "Catálogo abierto de skills para agentes de IA. Cada skill es un procedimiento reutilizable, versionado y con licencia MIT.",
    stack: ["Markdown", "Agentes", "MIT"],
    href: "https://github.com/JoseGarcia2001/jogadev-skills",
    estado: "Activo",
  },
  {
    nombre: "hub",
    descripcion:
      "Monorepo personal que centraliza finanzas, inversiones y pendientes. Un dominio por módulo, migraciones versionadas y despliegue automático a un servidor propio.",
    stack: ["Next.js", "TypeScript", "Postgres", "Drizzle", "Docker"],
    href: "https://github.com/JoseGarcia2001/hub",
    estado: "Activo",
  },
  {
    nombre: "Infraestructura jogadev",
    descripcion:
      "Servidor propio que hospeda mis servicios. Red privada por Tailscale, publicación por túnel, contenedores y procesos que se reconcilian en vez de confiar en la hora del reloj.",
    stack: ["Tailscale", "Cloudflare Tunnel", "Docker", "Postgres"],
    estado: "En operación",
  },
];
