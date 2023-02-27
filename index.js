const express = require('express');
const routerApi = require('./routes/')

const app = express();
const port = 3050;

app.get('/', (req, res) => {
  res.send('Hello world from Express.js!');
})

routerApi(app);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
