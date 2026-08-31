/** Metadatos del sitio. Un solo lugar para lo que se repite en <head> y en el footer. */
export const site = {
  nombre: "Jose Garcia",
  marca: "jogadev",
  rol: "Engineering Manager",
  url: "https://jogadev.com",
  descripcion:
    "Jose Garcia, Engineering Manager. Cinco años construyendo software en producción: frontend, backend, liderazgo técnico y gestión de equipos de ingeniería.",
  locale: "es_CO",
  lang: "es",
} as const;

/** Navegación principal. El orden es el del menú. */
export const nav = [
  { href: "/", texto: "Inicio" },
  { href: "/trayectoria", texto: "Trayectoria" },
  { href: "/proyectos", texto: "Proyectos" },
  { href: "/contacto", texto: "Contacto" },
] as const;

/** Enlaces legales del footer. Google los pide para verificar la marca. */
export const legal = [
  { href: "/privacidad", texto: "Privacidad" },
  { href: "/terminos", texto: "Términos" },
] as const;

export const contacto = {
  email: "jagarcia7655@gmail.com",
  linkedin: "https://www.linkedin.com/in/joga-dev/",
  github: "https://github.com/JoseGarcia2001",
} as const;
