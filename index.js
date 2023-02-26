const express = require('express');
const app = express();
const port = 3050;

app.get('/', (req, res) => {
  res.send('Hello world from Express.js!');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('soy una nueva ruta');
})

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000,
  })
})

app.get('/home', (req, res) => {
  res.json({
    home: 'home page',
    index: '/'
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
