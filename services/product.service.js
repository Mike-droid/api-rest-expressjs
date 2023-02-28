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

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  findAll() {
    return this.products
  }

  findOne(id) {
    return this.products.find(item => item.id === id)
  }

  update(id, changes) {
    const index = findTheIndex(id, this.products)

    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index]
  }

  delete(id) {
    const index = findTheIndex(id, this.products)
    if (index === -1) {
      throw new Error('Product not found')
    }
    this.products.splice(index, 1)
    return { id };
  }
}

module.exports = ProductsService
