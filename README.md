# AdministracionMVC

## Descripción

AdministracionMVC es un proyecto basado en el framework Astro que implementa un sistema de administración. Este proyecto incluye funcionalidades como formularios de registro y la integración de endpoints utilizando Ngrok.

## Enlace al Proyecto

- [Proyecto desplegado](https://core-mvc.vercel.app/)
- [Video de demostración](https://www.loom.com/share/d1d08ea541ff4955953235cdc7ebee47?sid=16994a69-4dd7-4568-be94-cfce035f2d8e)

## Estructura del Proyecto

Dentro del proyecto, encontrarás las siguientes carpetas y archivos:
/ ├── public/ │ └── favicon.svg ├── src/ │ ├── components/ │ │ └── Card.astro │ ├── layouts/ │ │ └── Layout.astro │ └── pages/ │ └── index.astro ├── package.json

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo. Los componentes se colocan en `src/components/` y los recursos estáticos, como imágenes, en `public/`.

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

- `npm install`: Instala las dependencias.
- `npm run dev`: Inicia el servidor de desarrollo local en `localhost:4321`.
- `npm run build`: Construye el sitio de producción en `./dist/`.
- `npm run preview`: Previsualiza tu construcción localmente, antes de desplegar.
- `npm run astro ...`: Ejecuta comandos CLI como `astro add`, `astro check`.
- `npm run astro -- --help`: Obtén ayuda usando el CLI de Astro.

## Tecnologías Utilizadas

- **Astro**: Framework principal utilizado para el desarrollo del proyecto.
- **TypeScript**: Lenguaje de programación utilizado para el desarrollo.
- **JavaScript**: Lenguaje de programación utilizado para el desarrollo.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

