const express = require('express');
const router = express.Router();

const CategoriesService = require('../services/categories.service')
const service = new CategoriesService();

const validatorHandler = require('../middlewares/validator.handler')
const { createCategorySchema, updateCategorySchema, getCategorySchema } = require('../schemas/category.schema')

router.get('/', async (req, res) => {
  try {
    const categories = await service.find()
    res.json(categories)
  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  }
})

//! Rutas específicas ANTES que rutas dinámicas

router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params; //* tiene que ser igual que en los query params
      const category = await service.findOne(id)
      res.json(category)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res) => {
    const body = req.body
    const newCategory = await service.create(body)
    res.status(201).json(newCategory)
  }
)

router.patch('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const category = await service.update(id, body)
      res.json(category)
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
      success: false,
      message: error.message
    })
  }
})


module.exports = router;
