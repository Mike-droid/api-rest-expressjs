const { faker } = require('@faker-js/faker')
const findTheIndex = require('./findTheIndex')

class ProductsService {

  constructor() {
    this.products = []
    this.generate() //* Creará los productos iniciales
  }

  generate() {
    const limit = 100

    for(let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
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
    return this.products
  }

  async findOne(id) {
    return this.products.find(item => item.id === id)
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
