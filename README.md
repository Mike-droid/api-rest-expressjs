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

### Integración de node-postgres

Para conectar Node con Postgres usamos [node-postgres](https://node-postgres.com/)

#### Serverless

💡Es un tipo de arquitectura que nos permite descentralizar los diferentes recursos existentes de nuestra aplicación.

En ocasiones, a serverless se le denomina sistemas distribuidos ya que permite, abstraer desde servidores hasta módulos denominados cloud functions.

Una de las principales ventajas de implementar serverless es la creación de arquitecturas como cliente-servidor, micro-servicios, entre otros.

#### Clean Architecture

💡Es un conjunto de principios cuya finalidad principal es ocultar los detalles de implementación a la lógica de dominio de la aplicación.

Las principal característica de Clean Architecture frente a otras arquitecturas es la regla de dependencia.

En Clean Architecture, una aplicación se divide en responsabilidades y cada una de estas responsabilidades se representa en forma de capa.

### Manejando un Pool de conexiones

Un pool de conexiones es un conjunto limitado de conexiones a una base de datos, que es manejado por un servidor de aplicaciones de forma tal, que dichas conexiones pueden ser reutilizadas por los diferentes usuarios.

De esta forma gestionamos las conexiones de una forma más óptima. Así evitamos crear clientes por cada consulta.

### Variables de ambiente en Node.js

## Sequelize

### ¿Qué es un ORM? Instalación y configuración de Sequelize ORM

Si bien un ORM nos ahorra el tener que aprender SQL, NO es excusa para no aprender el propio lenguaje de SQL. En queries complejas seguramente necesitaremos utilizar este lenguaje.

- [Sequielize](https://sequelize.org/)
- [TypeORM](https://typeorm.io/)

### Tu primer modelo en Sequelize

Con Sequelize podemos crear métodos estáticos. Significa que no necesitamos instanciar objetos de la clase para poder acceder a ellos.

### Crear, actualizar y eliminar

1. El frontend envía datos a la API con un verbo HTTP.
2. El router (cuyas rutas de API diseñamos usando Express.js) recibe los datos y los verifica usando un Middleware de validación.
3. Si todo está bien, el router llama a los servicios.
4. Los servicios usan un método de POO incluido en la ORM para ejecutar una acción con la DB.
5. La ORM traduce a SQL para comunicarse con la DB.
6. La respuesta de la DB se propaga hasta llegar al router.
7. El router detecta si es un error y llama a un Middleware de gestión de errores (aquí usamos el paquete boom).
8. La respuesta, exitosa o de error se envía como respuesta al Frontend.

Y así es como está funcionando nuestro backend hasta el momento.

### Cambiando la base de datos a MySQL

[Mysql with Docker](https://hub.docker.com/_/mysql)

## Migraciones

### ¿Qué son las migraciones? Migraciones en Sequelize ORM

Las migraciones mantienen el historial del esquema que vamos llevando en nuestra base de datos.

### Configurando y corriendo migraciones con npm scripts

### Modificando una entidad

## Relaciones

### Relaciones uno a uno

### Resolviendo las relaciones uno a uno

### Relaciones uno a muchos

### Resolviendo relaciones uno a muchos

## Consultas

### Órdenes de compra

### Relaciones muchos a muchos

### Resolviendo relaciones muchos a muchos

Importante:

Si bien hacer esto en node.js no está mal:

```javascript
total: {
  type: DataTypes.VIRTUAL,
  get() {
    if (this.items.length > 0) {
      return this.items.reduce((total, item) => {
        return total + (item.price * item.OrderProduct.amount);
      }, 0)
    }
    return 0;
  }
}
```

Este cálculo puede llegar a ser pesado para el servidor y es mejor dejar ese tipo de cosas para las BBDD.

### Paginación

- Limit → Número de elementos que deseo traer. Límite de elementos que deseo traer en cada página.
- Offset → Apuntador, es decir, cuántos elementos quiero escapar.
