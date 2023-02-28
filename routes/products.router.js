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
  const newProduct = service.create(body)

  res.status(201).json(newProduct)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  const product = service.update(id, body)

  res.json(product)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const rta = service.delete(id)

  res.json(rta)
})

module.exports = router;
