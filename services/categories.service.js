const { faker } = require('@faker-js/faker')
const findTheIndex = require('./findTheIndex')

class CategoriesService {

  constructor() {
    this.categories = []
    this.generate()
  }

  generate() {
    const limit = 10

    for(let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
      })
    }
  }

  async findAll() {
    return this.categories
  }

  async findOne(id) {
    return this.categories.find(category => category.id === id)
  }

  async create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newCategory)
    return newCategory
  }

  async update(id, changes) {
    const index = findTheIndex(id, this.categories)

    const category = this.categories[index]
    this.categories[index] = {
      ...category,
      ...changes
    }
    return this.categories[index]
  }

  async delete(id) {
    const index = findTheIndex(id, this.categories)
    this.categories.splice(index, 1)
    return { id }
  }
}

module.exports = CategoriesService
