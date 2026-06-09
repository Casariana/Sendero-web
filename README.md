# Sendero de la 80 — Portal residencial

Sitio web oficial de la unidad residencial Sendero de la 80. Incluye contador de visitas, pagos en línea, publicaciones informativas, noticias, documentos y contacto por WhatsApp.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Build de producción

```bash
npm run build
npm run preview
```

## Despliegue en Netlify

1. Sube este repositorio a GitHub.
2. En [Netlify](https://www.netlify.com), crea un sitio nuevo conectado al repositorio.
3. Netlify detectará automáticamente la configuración de `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Cada push a la rama principal redeployará el sitio.

## Actualizar contenido

| Contenido | Archivo / carpeta |
|-----------|-------------------|
| Carrusel informativo | `src/data/announcements.js` |
| Noticias | `src/data/news.js` |
| Documentos PDF | `public/documents/` |

### Reglamento de propiedad horizontal

Reemplace el archivo placeholder en:

```
public/documents/reglamento-propiedad-horizontal.pdf
```

con el PDF oficial del reglamento antes del despliegue final.

## Logo

El logo oficial está en `public/logo.jpeg` y se usa en el header, hero y footer.

## Contador de visitas

El contador usa [CounterAPI](https://counterapi.dev) con namespace `sendero-de-la-80` y nombre `visitas`.

- **En producción (Netlify):** las peticiones pasan por `/.netlify/functions/visits` para evitar bloqueos del navegador y problemas de CORS.
- **En desarrollo local:** se consulta CounterAPI directamente.

Tras cambios en `netlify/functions/`, haz un nuevo deploy en Netlify para que la función quede activa.
