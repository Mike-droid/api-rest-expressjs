const express = require('express');
const router = express.Router();

const CategoriesService = require('../services/categories.service')
const service = new CategoriesService();

router.get('/', async (req, res) => {
  const categories = await service.findAll()
  res.json(categories)
})

//! Rutas específicas ANTES que rutas dinámicas

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params; //* tiene que ser igual que en los query params
    const category = await service.findOne(id)
    res.json(category)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.post('/', async (req, res) => {
  const body = req.body
  const newCategory = await service.create(body)
  res.status(201).json(newCategory)
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const category = await service.update(id, body)
    res.json(category)
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
