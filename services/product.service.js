const { faker } = require('@faker-js/faker')

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

  create(name, price, image) {
    this.products.push({
      id: faker.datatype.uuid(),
      name,
      price,
      image
    })
  }

  findAll() {
    return this.products
  }

  findOne(id) {
    return this.products.find(item => item.id === id)
  }

  update(id, name, price, image) {
    const product = this.findOne(id)

    name !== undefined ? product.name = name : null
    price !== undefined ? product.price = price : null
    image !== undefined ? product.image = image : null

    return product
  }

  delete(id) {
    const product = this.findOne(id)
    this.products.splice(product, 1)
  }
}

module.exports = ProductsService
