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
  res.json([
    {
      name: 'Product 1',
      price: 1000,
    },
    {
      name: 'Product 2',
      price: 1200,
    }
  ])
})

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
  res.json([
    {
      username: 'mike',
      email: 'mike@gmail.com',
    },
    {
      username: 'freddy',
      email: 'freddy@gmail.com',
    },
    {
      username: 'john',
      email: 'john@gmail.com',
    }
  ])
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
