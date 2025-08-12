# Biztopia

Plataforma ligera para noticias y análisis de negocios, tecnología, marketing y retail en 3–5 minutos. Utiliza un diseño minimalista con colores blanco, negro y rojo para lograr una lectura clara y moderna.

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) para estilos
- [React Router](https://reactrouter.com/) para navegación
- [Fuse.js](https://fusejs.io/) para búsqueda rápida
- Publicación automática en GitHub Pages mediante GitHub Actions

## Cómo iniciar el proyecto localmente

```bash
npm install
npm run dev
```

## Despliegue en GitHub Pages

1. Crea un repositorio llamado **biztopia** en tu cuenta de GitHub.
2. Sube el contenido de este proyecto al repositorio.
3. Habilita GitHub Pages a través de *Settings → Pages* seleccionando el origen *GitHub Actions*.
4. Cada push a la rama `main` ejecutará el flujo de trabajo de despliegue (ver `.github/workflows/deploy.yml`) que compila y publica la aplicación en la rama `gh-pages`.

## Estructura editorial de los artículos

- **Título**
- **Resumen** de 1–2 líneas
- **Contenido** (2–4 párrafos)
- **¿Por qué importa?** (bullets)
- **¿Qué puedo hacer?** (bullets)

Los artículos de ejemplo se encuentran en `src/lib/data.ts`. Puedes moverlos a Markdown o a un CMS sin cabeza para una versión de producción.
