# Analog Vibe: web de portafolio

Sitio estático (HTML + CSS + JS, sin frameworks ni build). Réplica de la web de Wix, con un segundo bloque "Digital & Motion".

## Estructura

```
index.html            página única
css/style.css         diseño (colores y tipografías en :root)
js/main.js            galería, filtros, visor de video, menú
data/projects.js      CATÁLOGO: aquí agregas y editas proyectos
assets/img/           logo, fondo del About, póster del hero, miniaturas (thumbs/)
assets/video/         hero-1080.mp4 y hero-720.mp4 (móvil)
_headers              caché para Cloudflare Pages
```

Para verla en tu Mac basta con hacer doble clic en `index.html`.
Los originales sin optimizar están fuera de esta carpeta, en `Analog Vibe Web/originales`.

## Agregar un proyecto

1. Miniatura 16:9 de ~640 px en `assets/img/thumbs/` (JPG, idealmente menos de 60 KB).
2. Abre `data/projects.js`, copia un bloque de proyecto y cámbialo:
   `block` ("cine" o "digital"), `cats` (categorías), `title`, `desc`, `thumb` y el video.
3. Video: `youtube: "ID"` o `src: "assets/video/archivo.mp4"` (o una URL completa).
   Para reels verticales agrega `vertical: true`.

## Optimizar un video para la web (en Terminal)

```
# horizontal 1080p, sin audio no hace falta; con audio:
ffmpeg -i original.mov -c:v libx264 -preset slow -crf 24 -pix_fmt yuv420p -vf "scale=1920:-2" -c:a aac -b:a 128k -movflags +faststart salida.mp4
# vertical 1080x1920
ffmpeg -i original.mov -c:v libx264 -preset slow -crf 24 -pix_fmt yuv420p -vf "scale=1080:-2" -c:a aac -b:a 128k -movflags +faststart salida.mp4
```

## Dónde guardar los videos

| Opción | Límite gratis | Úsala para |
|---|---|---|
| En el mismo sitio (Cloudflare Pages) | 25 MiB por archivo | reels cortos y verticales (UGC, performance, pantallas) |
| YouTube / Vimeo (`youtube: "ID"`) | sin límite práctico | piezas largas (documentales, cortos) |
| Cloudflare R2 (`src: "https://..."`) | 10 GB gratis, sin cobro por tráfico | videos pesados que quieras alojar tú |

## Publicar gratis en Cloudflare Pages

1. Crea cuenta en dash.cloudflare.com, entra a Workers & Pages, Create, Pages, Upload assets.
2. Arrastra la carpeta `sitio` completa y publica. Te da una dirección tipo `analogvibe.pages.dev`.
3. Cuando compres el dominio, se conecta desde Custom domains en el mismo proyecto (si lo compras en Cloudflare, queda automático).

Alternativa: subir la carpeta a un repositorio de GitHub y conectarlo a Cloudflare Pages (o usar GitHub Pages). Cada cambio en el repositorio actualiza la web.

## Pendientes conocidos

- `Renne` y `New York | El orden del caos` tienen descripción vacía o solo emoji (textos tal como estaban en Wix).
- La miniatura de `Renne` es casi negra; conviene sacar un fotograma mejor.
- Las categorías de cada proyecto son una propuesta; ajusta `cats` en `data/projects.js`.
- Cuando tengas el dominio, cambia `canonical` y `og:image` en `index.html` por la dirección final.

## Color de acento y animación

- El color de acento (menú activo, "Hey,", códigos de película) se cambia en `css/style.css`, variable `--accent`.
- Para probar colores en vivo, abre la web con `#colores` al final de la dirección (por ejemplo `index.html#colores`) y elige uno del panel.
- Al filtrar proyectos, las tarjetas que salen caen y chocan entre sí. El motor de choques está en `js/main.js` (función `Physics`) y no depende de librerías. Si el visitante tiene activado "reducir movimiento", se omite la animación.
