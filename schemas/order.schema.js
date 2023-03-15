const Joi = require('joi');

const id = Joi.number().integer()
const customerId = Joi.number().integer();
const successfull = Joi.boolean()

const getOrderSchema = Joi.object({
	id: id.required(),
})

const createOrderSchema = Joi.object({
	customerId: customerId.required(),
  successfull: successfull.optional()
});

module.exports = {
	getOrderSchema,
	createOrderSchema
}
