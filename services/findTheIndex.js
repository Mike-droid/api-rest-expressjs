const boom = require('@hapi/boom')

const findTheIndex = (id, array) => {
  const index = array.findIndex(item => item.id === id)
  if (index === -1) {
    throw boom.notFound('Element not found')
  }
  return index
}

module.exports = findTheIndex
