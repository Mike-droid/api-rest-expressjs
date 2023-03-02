const boom = require('@hapi/boom')

const findOne = (id, array) => {
  const item = array.find(item => item.id === id)
  if (!item) {
    throw boom.notFound('Element not found')
  }
  if(item.isBlocked) {
    throw boom.conflict('Element is blocked')
  }

  return item
}

module.exports = findOne
