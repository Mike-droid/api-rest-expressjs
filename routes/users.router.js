const express = require('express');
const router = express.Router();

const UsersService = require('../services/user.service')
const service = new UsersService()

const validatorHandler = require('../middlewares/validator.handler')
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/user.schema')

router.get('/', async (req, res) => {
  try {
    const users = await service.findAll()
    res.json(users)
  } catch (error) {
    return {
      errorMessage: error.message
    }
  }
})

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const user = await service.findOne(id)
      res.json(user)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res) => {
    const body = req.body
    const newUser = await service.create(body)
    res.status(201).json(newUser)
  }
)

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const user = await service.update(id, body)
      res.json(user)
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
