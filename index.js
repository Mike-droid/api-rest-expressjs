const express = require('express');

const { faker } = require('@faker-js/faker')

const app = express();
const port = 3050;

app.get('/', (req, res) => {
  res.send('Hello world from Express.js!');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('soy una nueva ruta');
})

app.get('/products', (req, res) => {
  const products = []
  const { size } = req.query
  const limit = size || 10

  for(let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }

  res.json(products)
})

app.get('/products/filter', (req, res) => {
  res.send('yo soy un filter')
})

//! Rutas específicas ANTES que rutas dinámicas

app.get('/products/:id', (req, res) => {
  const { id } = req.params; //* tiene que ser igual que en los query params

  res.json({
    id,
    name: 'Product 2',
    price: 1200,
  })
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params
  res.json({
    categoryId,
    productId
  })
})

app.get('/users', (req, res) => {
  const { limit, offset } = req.query

  if (limit && offset) {
    res.json({ limit: limit, offset})
  } else {
    res.send('no hay parametros')
  }
})

app.get('/users/:username&:email', (req, res) => {
  const { username, email } = req.params

  res.json({
    username,
    email
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
