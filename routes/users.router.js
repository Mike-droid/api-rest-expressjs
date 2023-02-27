const express = require('express');
const router = express.Router();

const { faker } = require('@faker-js/faker')

router.get('/', (req, res) => {
  const users = []
  const { size } = req.query
  const limit = size || 10

  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.name.fullName(),
      username: faker.internet.userName(),
      age: Math.random() * 100,
      email: faker.internet.email()
    })
  }

  res.json(users)
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  res.json({
    id,
    username: faker.internet.userName(),
  })
})

router.post('/', (req, res) => {
  const body = req.body

  res.json({
    message: 'user created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body

  res.json({
    message: 'user updated partially',
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  res.json({
    message: 'user deleted',
    id
  })
})


module.exports = router;
