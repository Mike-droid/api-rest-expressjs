const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')

class CustomerService {
  constructor() {}

  async findAll() {
    const response = await models.Customer.findAll()
    return response
  }

  async findById(id) {
    const response = await models.Customer.findByPk(id)
    if (!response) throw boom.notFound('Customer not found')
    return response
  }

  async create(data) {
    const newCustomer = await models.Customer.create(data)
    return newCustomer
  }

  async update(id, changes) {
    const user = await this.findById(id)
    if (!user) throw boom.notFound('Customer not found')
    const response = await user.update(changes)
    return response
  }

  async delete(id) {
    const user = await this.findById(id)
    if (!user) throw boom.notFound('Customer not found')
    await user.destroy()
    return { id }
  }
}

module.exports = CustomerService
