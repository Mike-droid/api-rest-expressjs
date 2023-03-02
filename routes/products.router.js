const express = require('express');
const router = express.Router();

const ProductsService = require('../services/product.service')
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.findAll()
  res.json(products)
})

//! Rutas específicas ANTES que rutas dinámicas

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params; //* tiene que ser igual que en los query params
    const product = await service.findOne(id)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res) => {
  const body = req.body
  const newProduct = await service.create(body)

  res.status(201).json(newProduct)
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const product = await service.update(id, body)
    res.json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const rta = await service.delete(id)
    res.json(rta)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

module.exports = router;
