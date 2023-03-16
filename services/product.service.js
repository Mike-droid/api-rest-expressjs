const { models } = require('../libs/sequelize')

class ProductsService {
  constructor() {}

  async create(data) {
    const newProduct = await models.Product.create(data)
    return newProduct
  }

  async findAll(query) {
    const options = { include: ['category'] };

    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit
      options.offset = offset
    }

    const products = await models.Product.findAll(options)
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
