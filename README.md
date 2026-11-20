# Arxevo · Web de Mauricio Lara

Sitio web personal y de Arxevo: portafolio + servicios + contacto, en español e inglés.
Hecho con React + Vite. No usa base de datos: todo el contenido vive en archivos de `src/data/`.

## Comandos

    npm install       # instala dependencias (solo la primera vez)
    npm run dev       # servidor de desarrollo (http://localhost:5173)
    npm run lint      # revisa el código en busca de errores
    npm run build     # genera la versión final en dist/
    npm run preview   # prueba localmente la versión final

Antes de cada commit: `npm run lint && npm run build` debe terminar sin errores.

## Estructura

    public/                 archivos tal cual: foto.jpg, CV en PDF, favicon
    src/
      data/
        contacto.js         datos que NO cambian con el idioma (WhatsApp, redes, foto, nombre)
        es/  en/            textos por idioma, con las MISMAS claves en ambas carpetas
          perfil.js         portada y "Sobre mí"
          ui.js             textos sueltos: botones, títulos, etiquetas
          stack.js          tecnologías
          proyectos.js      proyectos
          servicios.js      servicios, cómo trabajo y cotización
          contactar.js      sección final de contacto
          arquitectura.js   tarjeta "Cómo construyo"
          navegacion.js     enlaces de la barra superior
      i18n/                 lógica del idioma (guarda la elección y la lee desde los componentes)
      components/           una pieza por sección (Hero, About, Stack, Proyectos, Servicios, Contacto...)
      styles/               variables.css (colores y fuentes), base.css, y un CSS por sección
      App.jsx               pone las secciones en orden
      main.jsx              arranque de la aplicación

## Qué archivo edito para...

| Quiero cambiar...                          | Archivo                                           |
| ------------------------------------------ | ------------------------------------------------- |
| WhatsApp, LinkedIn, GitHub, foto           | `src/data/contacto.js`                            |
| Titular, presentación, "Sobre mí"          | `src/data/<idioma>/perfil.js`                     |
| Agregar una habilidad                      | `src/data/<idioma>/stack.js`                      |
| Agregar o editar un proyecto               | `src/data/<idioma>/proyectos.js`                  |
| Servicios, pasos, botón de cotización      | `src/data/<idioma>/servicios.js`                  |
| Textos de botones y etiquetas              | `src/data/<idioma>/ui.js`                         |
| Colores y fuentes                          | `src/styles/variables.css`                        |
| CV                                         | reemplazar los PDF de `public/` (mismo nombre)    |

Regla de oro: todo texto se cambia en **los dos idiomas** (`es/` y `en/`) con las mismas claves.

## Agregar un proyecto

1. Abre `src/data/es/proyectos.js` y copia un bloque de `destacados`.
2. Cambia `nombre`, `estado`, `resumen`, `puntos`, `tecnologias` y `enlaces`.
   Un enlace se escribe así: `{ texto: 'Código', url: 'https://github.com/mauricioLara1/mi-repo' }`.
   Si `tecnologias` o `enlaces` están vacíos (`[]`), esa parte no se muestra.
3. Haz lo mismo en `src/data/en/proyectos.js`, traducido.

## Agregar una sección nueva (la receta)

1. Crea `src/data/es/<nombre>.js` y `src/data/en/<nombre>.js` con los textos (mismas claves).
2. En `src/i18n/datos.js`: importa los dos archivos y agrégalos a `idiomas.es` y `idiomas.en`.
3. Crea `src/components/<Nombre>.jsx`: lee los textos con `const { <nombre> } = useIdioma()`.
4. Crea `src/styles/<nombre>.css` y súmalo con un `@import` en `src/index.css`.
5. Agrégalo en `src/App.jsx`, en el orden que quieras que aparezca.
6. Si quieres enlace en la barra: una línea en `navegacion.js` (es y en), con `href: '#id-de-la-seccion'`.

## Idiomas

`IdiomaProvider` (en `src/i18n/`) guarda el idioma elegido en el navegador. En la primera visita usa
el idioma del navegador del visitante (es o en). También actualiza `<html lang>` y el título de la pestaña.
Para agregar un tercer idioma: crea `src/data/<codigo>/` con todos los archivos y regístralo en `src/i18n/datos.js`.

## Publicar

Hospedaje estático (Cloudflare Pages, Netlify o Vercel) conectado a este repositorio:
comando de build `npm run build`, carpeta de salida `dist`. Cada `git push` a `main` publica solo.

## Pendientes

- [ ] Sección de experiencia
- [ ] Preguntas frecuentes
- [ ] SEO: descripción por idioma, imagen al compartir el enlace
- [ ] Animaciones ligeras (solo CSS)
- [ ] Publicar y, cuando haya cliente, comprar dominio
- [ ] Perfil de Google Maps (como negocio con área de servicio)
