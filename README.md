# jogadev.com

Sitio personal de Jose Garcia. Estático, sin JavaScript de cliente.

## Stack

- **Astro 7** en modo estático. Genera un `.html` por ruta (`build.format: "file"`).
- **CSS propio** con custom properties. Sin framework, sin preprocesador.
- **Cero dependencias de cliente.** El sitio no envía JavaScript al navegador.

## Estructura

```
src/
  data/         → contenido (perfil, trayectoria, proyectos, metadatos)
  layouts/      → Base.astro: <head>, header, footer, skip link
  components/   → piezas reutilizables (Monogram, Seccion, Prosa, Separador, Flecha)
  pages/        → una ruta por archivo
  styles/
    tokens.css  → color, tipografía, espacio, medidas. Único lugar con valores literales
    global.css  → reset acotado, base y utilidades
public/
  fonts/        → las faces tipográficas del sitio original
```

**Regla de dependencias:** las páginas importan de `data/`, `layouts/` y `components/`.
Nada al revés. El contenido se edita en `src/data/`, no en el markup.

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run check     # astro check (tipos)
npm run build     # dist/
npm run preview   # sirve dist/
```

Gate de calidad antes de cualquier PR: `npm run check && npm run build`.

## Despliegue

El sitio corre en Cloudflare Workers con assets estaticos (`wrangler.jsonc`).
El worker (`src/worker/index.ts`) solo hace dos redirecciones: HTTP a HTTPS y
`www` al apex. El resto lo sirve el binding `ASSETS`.

**Automatico:** un merge a `main` dispara `.github/workflows/deploy.yml`, que
verifica tipos, construye, comprueba que `dist/` tiene las siete paginas y el
sitemap, publica, y valida contra `https://jogadev.com` que las rutas
responden 200 y una inexistente responde 404.

**Manual** (necesita `CLOUDFLARE_API_TOKEN` en el entorno):

```bash
npm run deploy
```

### Configuracion necesaria una sola vez

El workflow necesita el secret `CLOUDFLARE_API_TOKEN` en
*Settings > Secrets and variables > Actions*. Crea el token en Cloudflare con
un unico permiso: **Account > Workers Scripts: Edit**. No le des acceso a DNS
ni a Zone Settings: el deploy no los usa, y este repo es publico.

## Decisiones de diseño

- **Paleta y tipografías del sitio de 2021.** `#ff4a4a` de acento, `#9d9b9b` de gris,
  negro de fondo. Monument Extended para títulos, Univia Pro para cuerpo. La
  reconstrucción ordena ese sistema, no lo reemplaza.
- **Monograma JG en SVG inline.** Paths geométricos, no texto: escala sin depender de
  la fuente y sirve como favicon. La línea de acento viene del `<div className="line">`
  del header original.
- **El separador de secciones y la flecha diagonal** se recuperan tal cual del sitio
  anterior, ahora como componentes SVG inline.
- **Escala tipográfica fluida** con `clamp()`. El mínimo está calculado para que
  Monument, que es muy ancha, no desborde en 320px.
- **Sin menú hamburguesa.** Cuatro enlaces cortos caben en una fila incluso en 320px,
  así que el nav no necesita estado ni JavaScript.
- **Contraste verificado.** Todo el texto cumple WCAG AA (4.5:1) y los límites de
  controles cumplen 1.4.11 (3:1).

## El sitio anterior

La primera version (React 17 + Webpack 5, 2021) vive en el historial de git, hasta el
commit `68edbaa`. Todo su contenido esta migrado: paleta, tipografias, monograma,
separador, flecha, la cita del hero, la formacion y los datos de experiencia. Para
consultar un archivo de entonces:

```bash
git show 68edbaa:src/components/Home.jsx
```

## Pendiente

- Las faces Monument Extended y Univia Pro son comerciales y se sirven desde un repo
  público. Falta verificar la licencia o sustituirlas.
