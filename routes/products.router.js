const express = require('express');
const router = express.Router();

const ProductsService = require('../services/product.service')
const service = new ProductsService();

const validatorHandler = require('./../middlewares/validator.handler')
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  queryProductSchema
} = require('./../schemas/product.schema')

router.get('/',
  validatorHandler(queryProductSchema, 'query'),
  async (req, res, next) => {
    try {
      const products = await service.findAll(req.query)
      res.json(products)
    } catch (error) {
      next(error)
    }
  }
)

//! Rutas específicas ANTES que rutas dinámicas

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params; //* tiene que ser igual que en los query params
      const product = await service.findOne(id)
      res.json(product)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body
    const newProduct = await service.create(body)
    res.status(201).json(newProduct)
  }
)

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const product = await service.update(id, body)
      res.json(product)
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const rta = await service.delete(id)
    res.json(rta)
  } catch (error) {
    res.status(404).json({
      errorMessage: error.message
    })
  }
})

module.exports = router;
