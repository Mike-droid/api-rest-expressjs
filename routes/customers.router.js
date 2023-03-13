const express = require('express');
const router = express.Router();

const CustomersService = require('../services/customer.service')
const service = new CustomersService()

const validatorHandler = require('../middlewares/validator.handler')
const { createCustomerSchema, getCustomerSchema, updateCustomerSchema } = require('../schemas/customer.schema')

router.get('/', async (req, res) => {
  try {
    const customers = await service.findAll()
    res.json(customers)
  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  }
})

router.get('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const customer = await service.findById(id)
      res.json(customer)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res) => {
    const body = req.body
    const newCustomer = await service.create(body)
    res.status(201).json(newCustomer)
  }
)

router.patch('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const customer = await service.update(id, body)
      res.json(customer)
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const response = await service.delete(id)
    res.json(response)
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
