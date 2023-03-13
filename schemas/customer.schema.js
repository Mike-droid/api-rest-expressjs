const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(6)
const age = Joi.number().integer().min(16)
const userId = Joi.number().integer()

const createCustomerSchema = Joi.object({
  name: name.optional(),
  age: age.optional(),
  userId: userId.required()
})

const updateCustomerSchema = Joi.object({
  name,
  age,
  userId,
})

const getCustomerSchema = Joi.object({
  id: id.required(),
})

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
