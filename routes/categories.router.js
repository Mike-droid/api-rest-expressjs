const express = require('express');
const router = express.Router();

const CategoriesService = require('../services/categories.service')
const service = new CategoriesService();

router.get('/', (req, res) => {
  const categories = service.findAll()
  res.json(categories)
})

//! Rutas específicas ANTES que rutas dinámicas

router.get('/:id', (req, res) => {
  const { id } = req.params; //* tiene que ser igual que en los query params
  const category = service.findOne(id)
  res.json(category)
})

router.post('/', (req, res) => {
  const body = req.body
  const newCategory = service.create(body)
  res.status(201).json(newCategory)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  const category = service.update(id, body)
  res.json(category)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const rta = service.delete(id)
  res.json(rta)
})


module.exports = router;
