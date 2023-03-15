const { models } = require('../libs/sequelize')

class ProductsService {
  constructor() {}

  async create(data) {
    const newProduct = await models.Product.create(data)
    return newProduct
  }

  async findAll() {
    const products = await models.Product.findAll({
      include: ['category']
    })
    return products
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id)
    return product
  }

  async update(id, changes) {
    return {
      id,
      changes
    }
  }

  async delete(id) {
    return { id }
  }
}

module.exports = ProductsService
