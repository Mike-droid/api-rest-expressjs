const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/')

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()) //* middleware

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
