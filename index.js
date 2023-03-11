const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/')

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()) //* middleware

/* const whiteList = ['http://127.0.0.1:5500', `http://localhost:${port}` ,'https://myapp.com', 'https://api-rest-expressjs-production.up.railway.app/']
const options = {
  origin: (origin, callback) => {
    whiteList.includes(origin || !origin) ? callback(null, true) : callback(new Error('No permitido'))
  }
} */

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello world from Express.js!');
})

routerApi(app);
//! los middlewares se deben usar después de definir el routing
//! el orden de ejecución será en como estén ordenados en el código
app.use(logErrors);
app.use(ormErrorHandler)
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port);
