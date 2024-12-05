# AdministracionMVC

## Descripción

AdministracionMVC es un proyecto basado en el framework Astro que implementa un sistema de administración para vehículos eléctricos. Este proyecto incluye funcionalidades como formularios de registro, integración con un backend en Spring Boot, y una base de datos en MongoDB Atlas. El proyecto está desplegado en Netlify.

## Enlace al Proyecto

[Proyecto desplegado en Netlify](https://core-web-engineering.netlify.app/)

## Tecnologías Utilizadas

- **Astro**: Framework principal utilizado para el desarrollo del frontend.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para el diseño y la estilización.
- **Spring Boot**: Framework para el desarrollo del backend.
- **MongoDB Atlas**: Base de datos NoSQL utilizada para almacenar los datos.
- **TypeScript**: Lenguaje de programación utilizado para el desarrollo.
- **JavaScript**: Lenguaje de programación utilizado para el desarrollo.

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Djtv1304/AdministracionMVC.git
   cd AdministracionMVC
2. **Instalar las dependencias**:
    ```bash
    npm install
    ```
3. **Iniciar el servidor de desarrollo**:
     ```bash
    npm run dev
    ```
5. **Construir el sitio de producción**:
     ```bash
    npm run build
    ```
6. **Previsualizar la construccion localmente**:
     ```bash
    npm run preview
    ```
## Comandos
Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

- npm install: Instala las dependencias.
- npm run dev: Inicia el servidor de desarrollo local en localhost:4321.
- npm run build: Construye el sitio de producción en ./dist/.
- npm run preview: Previsualiza tu construcción localmente, antes de desplegar.
- npm run astro ...: Ejecuta comandos CLI como astro add, astro check.
- npm run astro -- --help: Obtén ayuda usando el CLI de Astro.

## Usuario para Logearse
Usuario: test@udla.edu.ec

Contraseña: test123@

## Estructura del Proyecto
Dentro del proyecto, encontrarás las siguientes carpetas y archivos:

```bash
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── package.json
```
Astro busca archivos .astro o .md en el directorio src/pages/. Cada página se expone como una ruta basada en su nombre de archivo. Los componentes se colocan en src/components/ y los recursos estáticos, como imágenes, en public/.
## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.