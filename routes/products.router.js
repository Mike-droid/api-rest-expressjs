const express = require('express');
const router = express.Router();

const { faker } = require('@faker-js/faker')

router.get('/', (req, res) => {
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

//! Rutas específicas ANTES que rutas dinámicas

router.get('/:id', (req, res) => {
  const { id } = req.params; //* tiene que ser igual que en los query params

  res.json({
    id,
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(), 10),
    image: faker.image.imageUrl(),
  })
})

router.post('/', (req, res) => {
  const body = req.body

  res.json({
    message: 'created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body

  res.json({
    message: 'updated partial',
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  res.json({
    message: 'deleted',
    id
  })
})

module.exports = router;
