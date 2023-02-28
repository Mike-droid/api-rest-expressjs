const { faker } = require('@faker-js/faker')
const findTheIndex = require('./findTheIndex')

class UsersService {

  constructor() {
    this.users = []
    this.generate()
  }

  generate() {
    const limit = 50

    for (let index = 0; index < limit; index++) {
      this.users.push({
        name: faker.name.fullName(),
        username: faker.internet.userName(),
        age: Math.random() * 100,
        email: faker.internet.email()
      })
    }
  }

  findAll() {
    return this.users
  }

  findOne(id) {
    return this.users.find(user => user.id === id)
  }

  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser)
    return newUser
  }

  update(id, changes) {
    const index = findTheIndex(id, this.users)

    const user = this.users[index]
    this.users[index] = {
      ...user,
      ...changes
    }
    return this.users[index]
  }

  delete(id) {
    const index = findTheIndex(id, this.users)
    this.users.splice(index, 1)
    return { id }
  }

}

module.exports = UsersService
