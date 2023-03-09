const { faker } = require('@faker-js/faker')
const findTheIndex = require('./findTheIndex')

const pool = require('../libs/postgres.pool')

class ProductsService {

  constructor() {
    this.products = []
    this.generate() //* Creará los productos iniciales
    this.pool = pool
    this.pool.on('error', (err) => console.error(err))
  }

  generate() {
    const limit = 100

    for(let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlocked: faker.datatype.boolean()
      })
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  async findAll() {
    const query = 'SELECT * FROM tasks'
    const response = await this.pool.query(query)
    return response.rows
  }

  async findOne(id) {
    //TODO: la petición GET aún no funciona
    const query = `SELECT * FROM tasks WHERE id = ${id}`
    const response = await this.pool.query(query, [id])
    return response.rows
  }

  async update(id, changes) {
    const index = findTheIndex(id, this.products)

    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index]
  }

  async delete(id) {
    const index = findTheIndex(id, this.products)
    this.products.splice(index, 1)
    return { id };
  }
}

module.exports = ProductsService
