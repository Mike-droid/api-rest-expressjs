# Curso de Backend con Node.js: API REST con Express.js

## Introducción

### ¿Qué es Express.js?

### Configuración del entorno de desarrollo para este curso

### Instalación de Express.js y tu primer servidor HTTP

[Express.js](https://expressjs.com/)

### Routing con Express.js

## CRUD

### ¿Qué es una RESTful API?

REST = Representational State Transfer.

### GET: recibir parámetros

### GET: parámetros query

Para recordar: **TODOS LOS ENDPOINTS ESPECÍFICOS DEBEN IR ANTES DE LOS DINÁMICOS**. De no ser así, habrá conflictos entre las rutas.

### Separación de responsabilidades con express.Router

### Instalación de Postman o Insomnia

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- [Thunder Client for VS Code](https://www.thunderclient.com/)

### POST: método para crear

### PUT, PATCH y DELETE

### Códigos de estado o HTTP response status codes

## Servicios

### Introducción a servicios: crea tu primer servicio

### Crear, editar y eliminar

### Async await y captura de errores

## Middlewares

### ¿Qué son los Middlewares?

Middleware es software que permite uno o más tipos de comunicación o conectividad entre dos o más aplicaciones o componentes de aplicaciones en una red distribuida. Al facilitar la conexión de aplicaciones que no fueron diseñadas para conectarse entre sí, y al brindar funcionalidad para conectarlas de manera inteligente, el middleware agiliza el desarrollo de aplicaciones y acelera el tiempo de comercialización.

### Middleware para HttpErrors

### Manejo de errores con Boom

### Validación de datos con Joi

### Probando nuestros endpoints

### Middlewares populares en Express.js

[Artículo en Platzi](https://platzi.com/clases/2485-backend-nodejs/41762-middlewares-populares-en-expressjs/)

## Deployment

### Consideraciones para producción

### Deployment a Heroku

------------------------------------------------

## Continuación con Docker y Postgresql

## Bases de datos

### Configuración de Postgres en Docker

Para iniciar un proceso hacemos `docker-compose up -d <nombre_del_servicio>`

Podemos ver los procesos que se están ejecutando con `docker-compose ps`

Para detenerlos hacemos `docker-compose down <nombre_del_servicio>` o podemos omitir el nombre para que todos se detengan.

### Explorando Postgres: interfaces gráficas vs. terminal

Nos podemos conectar al contenedor desde la terminal con `docker-compose exec <nombre_del_servicio> bash`

Una vez en el contenedor, nos conectamos a la BBDD, en este caso con `psql -h localhost -d <DDBB_name> -U <user_name>`

También podemos usar una interfaz gráfica con [pgadmin](https://www.pgadmin.org/)

Al ser una interfaz web, nos podemos conectar usando la imagen de Docker [dpage/pgadmin4](https://hub.docker.com/r/dpage/pgadmin4/)
