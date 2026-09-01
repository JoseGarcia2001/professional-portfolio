/**
 * Worker del sitio. Solo hace dos redirecciones y delega el resto a los assets.
 *
 * La regla vive aqui y no solo en los ajustes de la zona porque asi es
 * explicita, versionada y viaja con el codigo.
 */

interface Env {
  ASSETS: Fetcher;
}

const CANONICO = "jogadev.com";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    let redirigir = false;

    // 1. HTTP -> HTTPS. La zona ya tiene "Always Use HTTPS" encendido, asi que
    //    Cloudflare redirige en el borde y este bloque casi nunca se ejecuta.
    //    Se conserva como respaldo: si alguien apaga ese ajuste, el sitio sigue
    //    sin servir HTTP.
    if (url.protocol === "http:") {
      url.protocol = "https:";
      redirigir = true;
    }

    // 2. www -> apex. El <link rel="canonical"> de todas las paginas apunta al
    //    apex, asi que servir las dos formas duplicaria el contenido.
    if (url.hostname === `www.${CANONICO}`) {
      url.hostname = CANONICO;
      redirigir = true;
    }

    // 301: el destino es permanente y asi lo cachean navegadores y buscadores.
    if (redirigir) {
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
