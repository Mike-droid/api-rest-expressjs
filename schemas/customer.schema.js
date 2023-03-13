const Joi = require('joi')

const { createUserSchema, updateUserSchema } = require('./user.schema')

const id = Joi.number().integer()
const name = Joi.string().min(6)
const age = Joi.number().integer().min(16)
const userId = Joi.number().integer()

const createCustomerSchema = Joi.object({
  name: name.optional(),
  age: age.optional(),
  user: createUserSchema
})

const updateCustomerSchema = Joi.object({
  name,
  age,
  userId,
  user: updateUserSchema
})

const getCustomerSchema = Joi.object({
  id: id.required(),
})

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
