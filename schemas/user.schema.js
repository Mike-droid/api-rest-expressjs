const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(30)
const userName = Joi.string().min(3).max(20)
const age = Joi.number().integer().min(16)
const email = Joi.string().min(6) //@gmail.com

const createUserSchema = Joi.object({
  name: name.required(),
  userName: userName.required(),
  age: age.required(),
  email: email.required()
})

const updateUserSchema = Joi.object({
  name,
  userName,
  age,
  email
})

const getUserSchema = Joi.object({
  id: id.required()
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
