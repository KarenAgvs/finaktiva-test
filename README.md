# Fullstack test finaktiva

Este proyecto es una aplicación de gestión de eventos que permite registrarlos y consultarlos. La arquitectura incluye un frontend desarrollado en React con Vite y Tailwind, y un backend desarrollado en Express y TypeScript que se compone de dos servicios, una api para la comunicación con el frontend y un worker para la modificación de datos (crear y eliminar). Estos dos servicios del backend se comunican por medio de un broker de mensajería, en este caso, RabbitMQ. Los dos servicios se comunican a una base de datos MySQL.

### General

- **NodeJS 20.16.0**
- **Docker 27.1.1**

### Frontend:

- **React 18.3.1**
- **Vite 5.4.1**
- **TypeScript 5.5.3**
- **TailwindCSS 3.4.11**

### Backend

- **Express 4.21.0**
- **TypeScript 5.6.2**
- **MySQL 8.4.2**
- **RabbitMQ 3.13.7**

## Despliegue

El proyecto está desplegado en railway y puede encontrarse en el [link](https://frontend-production-971f.up.railway.app/)

## Ejecutar manualmente

> Asegúrate de tener instalados los siguientes requisitos antes de comenzar:
>
> - [Git](https://git-scm.com/downloads)
> - [Node.js](https://nodejs.org/)
> - [npm](https://www.npmjs.com/get-npm) o [yarn](https://yarnpkg.com/)
> - [MySQL](https://www.mysql.com/downloads/)
> - [RabbitMQ](https://www.rabbitmq.com/docs/download)
>   Asegurate de crear la base de datos Registration en MySQL

1. Abre tu terminal o consola de comandos
2. Navega hasta el directorio donde deseas clonar el repositorio

   ```bash
   cd ruta/al/directorio
   ```

3. Clona el repositorio
   ```bash
   git clone https://github.com/KarenAgvs/finaktiva-test.git
   ```
4. Navega al directorio `backend`

   ```bash
   cd finaktiva-test/backend
   ```

5. Allí habrán dos servicios, el `api` y el `worker`
   5.1. Ingresamos a la carpeta de la api
   ```bash
   cd api
   ```
   Instalamos las dependencias
   ```bash
   npm install
   ```
   Creamos un archivo .env en la ruta raíz
   ```ini
   APP_PORT  = 3000
   APP_HOST  = http://localhost
   BROKER_URL  = amqp://localhost:5672
   DATABASE_URL  = mysql://finaktiva_user:finaktiva_password@localhost:3307/Registration
   ```
   5.2. Regresamos a la carpeta `backend` e ingresamos al servicio `worker`
   ```bash
   cd worker
   ```
   Instalamos las dependencias
   ```bash
   npm install
   ```
   Creamos un archivo .env en la ruta raíz
   ```ini
   BROKER_URL  = amqp://localhost:5672
   DATABASE_URL  = mysql://finaktiva_user:finaktiva_password@localhost:3307/Registration
   ```
6. Dirígete nuevamente al directorio api e inicia el servidor con el comando
   ```bash
   npm run dev
   ```
7. En una nueva terminal, dirígente al directorio worker y utiliza el mismo comando para iniciar el servicio
   `bash
npm run dev
`
   Con estos pasos el backend ya está listo para poder usarse.

8. En una nueva consola, ingresa a la ruta del frontend
   ```bash
   cd ruta/al/directorio/finaktiva-test/frontend
   ```
9. Instala las dependencias
   ```bash
   npm install
   ```
10. Iniciarás le proyecto con el siguiente comando
    ```bash
    npm run dev
    ```

## Ejecutar con Docker

1. Copia el archivo `docker-compose.yml` en tu dispositivo o clona todo el proyecto.
2. Dirígete a donde está el archivo y ejecuta el comando
   ```bash
   docker compose up -d
   ```
3. Los puertos por defecto son:
   - Frontend : 8080
   - Backend: 3000
   - Base de datos: 3306
   - Broker de mensajería: 5672
