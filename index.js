const express = require('express');
const routerApi = require('./routes/')

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3050;

app.use(express.json()) //* middleware

app.get('/', (req, res) => {
  res.send('Hello world from Express.js!');
})

routerApi(app);
//! los middlewares se deben usar después de definir el routing
//! el orden de ejecución será en como estén ordenados en el código
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
