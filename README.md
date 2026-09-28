# Maimonet

Web de software a medida, automatización e inteligencia artificial para empresas, con base en Albacete y servicio en toda España. React + Vite, una sola URL: https://maimonet.es/.

## Desarrollo y validación

```sh
npm ci
npm run dev
npm run build
npm run lint
npm run check:seo
npm run preview
```

`build` compila el cliente y renderiza la misma aplicación React en `dist/index.html`. La compilación temporal del servidor se elimina al terminar: no requiere un backend ni funciones de Vercel. En producción, React hidrata ese HTML; en desarrollo se monta normalmente. El estado inicial usa tema oscuro y recupera la preferencia guardada después de hidratar.

Vercel debe ejecutar `npm run build` y publicar `dist`, según `vercel.json`. No sustituirlo por `vite build`, que no incluye el prerenderizado. No añadir una reescritura global de rutas hacia la home: las rutas inexistentes deben devolver 404. `/index.html` redirige a la URL canónica. Las redirecciones de HTTP y www ya estaban configuradas en el dominio y se comprobaron durante la auditoría.

## Contenido e identidad

- Metadatos, canonical y JSON-LD: `index.html`.
- Contenido visible: `src/components/`.
- El Instagram corresponde a la organización; el LinkedIn personal, a la fundadora. Ambos se enlazan mediante el grafo JSON-LD.
- La ciudad de actividad es Albacete; no se declara dirección postal ni oficina abierta al público.
- El sitemap contiene exclusivamente la home. Las secciones son anclas, no páginas independientes.
- El formulario prepara un correo mediante `mailto:`. El visitante debe enviarlo desde su aplicación de correo. No hay backend de formularios ni almacenamiento de los campos en la web.

## Imágenes

Los originales se conservan en `src/assets/`. Se publican derivados optimizados con URLs estables:

- `/logo-maimonet.png`: símbolo de marca, 512 × 512, para Organization.
- `/favicon_maimonet.svg`, `/favicon-48.png`, `/favicon-96.png` y `/apple-touch-icon.png`.
- `/og-maimonet.jpg`: logo completo sobre blanco, 1200 × 630, para redes sociales.
- `/images/`: logos claro/oscuro de 1200 × 1200 y retratos JPEG de 420 y 840 píxeles.

Los derivados se generaron con `sips` de macOS: remuestreo proporcional, JPEG de perfil a calidad 86 y tarjeta social a calidad 90. Para esta última se recortaron únicamente márgenes transparentes del logo negro (1050 × 2000 antes de reducir a 1200 × 630). Se inspeccionaron visualmente los resultados. El header y el footer usan el PNG de 96 píxeles para no descargar el original de 2000 píxeles.

## Auditoría y seguimiento

Consulta [la auditoría SEO de septiembre de 2026](docs/seo-audit-2026.md), con hallazgos, fuentes oficiales, comprobaciones y pasos posteriores al despliegue.
