const express = require('express');
const router = express.Router();

const { faker } = require('@faker-js/faker')

router.get('/', (req, res) => {
  const categories = []
  const { size } = req.query
  const limit = size || 10

  for(let index = 0; index < limit; index++) {
    categories.push({
      name: faker.commerce.department(),
    })
  }

  res.json(categories)
})

//! Rutas específicas ANTES que rutas dinámicas

router.get('/:id', (req, res) => {
  const { id } = req.params; //* tiene que ser igual que en los query params

  res.json({
    id,
    name: faker.commerce.department(),
  })
})

router.post('/', (req, res) => {
  const body = req.body

  res.status(201).json({
    message: 'category created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body

  res.json({
    message: 'category updated partially',
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  res.json({
    message: 'category deleted',
    id
  })
})


module.exports = router;
