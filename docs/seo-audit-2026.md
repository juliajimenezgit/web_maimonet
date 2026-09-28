# Auditoría SEO de Maimonet — 28 de septiembre de 2026

## Alcance y estado inicial

Revisión del repositorio completo: HTML, App, main, los ocho componentes, CSS, originales de marca y retrato, public, SVG, fuentes, robots, sitemap, dependencias, configuración Vite, lint y Git. Rama inicial `main`, sin modificaciones locales. No existían instrucciones AGENTS.md en el proyecto ni en sus directorios ascendentes revisados.

La home ya tenía idioma español, charset, viewport, canonical correcto, una descripción y Open Graph parcial. Robots y sitemap eran correctos. La jerarquía de las secciones y sus anclas era mayoritariamente coherente. No había backend del formulario, datos estructurados, favicon PNG ni imagen social configurada.

## Hallazgos y cambios

| Prioridad | Hallazgo | Solución |
| --- | --- | --- |
| Alta | Title y H1 limitados a «Maimonet», sin actividad empresarial | Título y único H1 descriptivos de software, automatización e inteligencia artificial. El H1 sigue accesible y visualmente oculto, coherente con el texto visible. |
| Alta | Entidad de marca ambigua, sin schema | Grafo Organization, Person y WebSite enlazado por identificadores estables. Instagram para la empresa y LinkedIn para Julia. Ciudad Albacete, servicio España, sin dirección postal ni LocalBusiness. |
| Alta | HTML inicial vacío, dependiente de la ejecución de React | Prerenderizado estático de la misma aplicación durante el build e hidratación posterior. Sin migración, servidor de producción ni nuevas páginas. |
| Alta | Animaciones dejaban contenido con opacity:0 hasta hacer scroll y volvían a ocultarlo | Contenido visible por defecto. Animaciones breves al entrar en pantalla, una sola vez, sin ocultar el contenido que aún no se ha visitado. Compatibilidad con movimiento reducido. |
| Alta | Formulario sin manejador: podía recargar la página y colocar campos en la URL | Envío interceptado, validación nativa, límites de longitud y preparación de correo con mailto. Se explica que se debe enviar desde la aplicación del visitante; no se simula un envío completado. |
| Media | Menú y formulario cerrados seguían disponibles al tabular | Uso de hidden, cierre del menú con Escape y devolución de foco; enlace para saltar al contenido y foco visible. |
| Media | Retrato PNG de 1,7 MB y símbolo de 866 KB para mostrarlo a 34–48 px | Retrato JPEG responsive de 420/840 px, lazy loading y dimensiones. Icono de 96 px compartido por header/footer. Originales conservados. |
| Media | Faltaban logo público estable, PNG para favicon e imagen social | Nuevos derivados públicos: logo 512, favicons 48/96, apple-touch-icon 180 y tarjeta 1200 × 630. SVG de marca conservado. |
| Media | Open Graph incompleto y ausencia de Twitter Cards | Metadatos completos en el HTML inicial, imagen absoluta, dimensiones, texto alternativo, locale y nombre de sitio. |
| Media | Servicios centrados excesivamente en IA y sin referencia local | Ajustes limitados en hero y servicios: software, automatización de documentos, integraciones y aplicaciones web. Footer: desde Albacete para toda España. |
| Media | /index.html entregaba una copia de la home con HTTP 200 | Redirección permanente a https://maimonet.es/ en vercel.json. |
| Media | Texto oscuro sobre footer oscuro al activar tema claro; botones con contraste insuficiente | Colores propios del footer y ajuste moderado del degradado de botones y textos azules pequeños del tema claro. Se conserva la identidad visual. |
| Baja | Fuente descubierta tarde mediante @import de CSS | Enlace de stylesheet en head con preconnect y display=swap. Sin preloads de fuentes o imágenes innecesarios. |
| Baja | Errores potenciales si localStorage está bloqueado | Lectura/escritura protegidas; render inicial determinista para hidratar sin errores. |
| Baja | Archivos AppleDouble del SSD externo interrumpían lint | Exclusión de ._* en Git y Oxlint. |

Se mantuvieron los casos de éxito y el proceso existentes, sin añadir clientes, cifras, premios, reseñas ni resultados. No se validó externamente la autoría o veracidad de los casos ya publicados. No se han creado landings SEO ni añadido keywords ocultas. Los recursos SVG antiguos sin uso se conservaron para no romper posibles referencias externas.

## Rendimiento observado

| Recurso | Antes | Después |
| --- | --- | --- |
| Retrato | ~1,7 MB PNG, 1254 × 1254 | ~134 KB JPEG 840 × 840 / ~40 KB JPEG 420 × 420; carga diferida |
| Icono header/footer | ~866 KB, 2000 × 2000 | ~8,3 KB, 96 × 96 |
| Logo hero blanco | ~178 KB, 2000 × 2000 | ~107 KB, 1200 × 1200 |
| Logo hero negro | ~231 KB, 2000 × 2000 | ~128 KB, 1200 × 1200 |

Los originales permanecen intactos. Se inspeccionaron los derivados visualmente. Se fijaron dimensiones de todas las imágenes y se conservó la proporción mediante CSS. La fotografía tiene srcset y sizes. React sigue siendo la única dependencia de ejecución de la aplicación junto con react-dom; no se añadieron bibliotecas de SEO al cliente.

Estas cifras describen los recursos, no una medición de Core Web Vitals en tráfico real. Sora sigue siendo externa. La etiqueta de Google Ads preexistente se conserva; su coste de red sigue formando parte de la página.

## Comprobaciones

- `npm run build`: compilación de cliente, prerender y limpieza del bundle temporal.
- `npm run lint`: sin errores.
- `npm run check:seo`: HTML con contenido, único H1, canonical, metadatos, IDs únicos, anclas existentes, imágenes con alt y dimensiones, activos locales existentes, grafo JSON-LD coherente, sitemap de una URL y robots permisivo.
- XML de sitemap analizado con un parser XML; JSON-LD parseado como JSON. No equivale a ejecutar los validadores remotos de Google.
- Chrome real mediante Playwright: hidratación sin errores, preferencia de tema persistida, almacenamiento bloqueado, menú móvil y Escape, formulario que prepara correo, ausencia de parámetros personales en la URL y anchos 320/390/768/1440 sin desbordamiento horizontal.
- Chrome sin JavaScript: contenido principal y enlaces disponibles.
- Axe WCAG 2 A/AA y 2.1 AA: sin infracciones automáticas detectadas en los estados de tema claro y oscuro comprobados. No sustituye una auditoría manual integral de accesibilidad.
- Inspección visual del hero en escritorio y móvil, sin cambios de estructura visual.

### Dominio público antes del despliegue

Comprobaciones HTTP realizadas el 28/09/2026:

- https://maimonet.es/: 200, sin X-Robots-Tag restrictivo.
- http://maimonet.es/: 308 hacia HTTPS.
- https://www.maimonet.es/: 308 hacia el dominio sin www.
- https://maimonet.es/index.html: 200 antes del cambio; se configura redirección 308.
- Ruta de prueba inexistente: 404 real.
- Robots y sitemap públicos disponibles y correctos.

## Pendiente tras publicar

1. Confirmar en Vercel que el despliegue de este commit finaliza y usa `npm run build`; comprobar la nueva home, la redirección de /index.html y los activos públicos.
2. En Search Console, inspeccionar la URL principal, comprobar canonical seleccionado y HTML renderizado, enviar sitemap y solicitar indexación. No se tiene acceso a la propiedad desde esta sesión.
3. Ejecutar Rich Results Test y Schema Markup Validator sobre la URL publicada. La validez del JSON y las relaciones se comprueba localmente; la elegibilidad y presentación final dependen de Google.
4. Medir Core Web Vitals y evolución de consultas de marca/servicios en Search Console y PageSpeed Insights cuando exista tráfico suficiente. No se atribuyen métricas de campo inventadas ni se promete una posición.
5. Si se desea recepción del formulario directamente en la web, acordar e implementar un backend en otra tarea. La alternativa actual exige una aplicación de correo configurada.

## Fuentes oficiales consultadas

La revisión usa documentación consultada en septiembre de 2026, sin asumir requisitos SEO especiales por el año:

- [Google: Organization y desambiguación de entidades](https://developers.google.com/search/docs/appearance/structured-data/organization).
- [Google: nombre del sitio y WebSite](https://developers.google.com/search/docs/appearance/site-names).
- [Google: requisitos de favicon](https://developers.google.com/search/docs/appearance/favicon-in-search).
- [Google: fundamentos SEO para JavaScript y prerenderizado](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).
- [Vite: renderizado e hidratación](https://vite.dev/guide/ssr.html).
- [Vercel: configuración estática y redirecciones](https://vercel.com/docs/project-configuration/vercel-json).

## Archivos modificados o añadidos

- `.gitignore`
- `.oxlintrc.json`
- `README.md`
- `docs/seo-audit-2026.md`
- `index.html`
- `package.json`
- `public/apple-touch-icon.png`
- `public/favicon-48.png`
- `public/favicon-96.png`
- `public/fonts/README.md`
- `public/images/julia-jimenez-ayuso-420.jpg`
- `public/images/julia-jimenez-ayuso-840.jpg`
- `public/images/logo-maimonet-blanco.png`
- `public/images/logo-maimonet-negro.png`
- `public/logo-maimonet.png`
- `public/og-maimonet.jpg`
- `scripts/build.mjs`
- `scripts/check-seo.mjs`
- `src/App.css`
- `src/App.jsx`
- `src/components/About.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`
- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/Services.jsx`
- `src/entry-server.jsx`
- `src/index.css`
- `src/main.jsx`
- `vercel.json`
- `vite.config.js`
