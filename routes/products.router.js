const express = require('express');
const router = express.Router();

const ProductsService = require('../services/product.service')
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.findAll()
  res.json(products)
})

//! Rutas específicas ANTES que rutas dinámicas

router.get('/:id', (req, res) => {
  const { id } = req.params; //* tiene que ser igual que en los query params
  const product = service.findOne(id)
  res.json(product)
})

router.post('/', (req, res) => {
  const body = req.body
  const { name, price, image } = body
  service.create(name, price, image)

  res.status(201).json({
    message: 'product created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  const { name, price, image } = body
  service.update(id, name, price, image)

  res.json({
    message: 'updated partial',
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  service.delete(id)

  res.json({
    message: 'deleted',
    id
  })
})

module.exports = router;
