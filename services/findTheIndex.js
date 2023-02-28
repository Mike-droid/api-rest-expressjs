const findTheIndex = (id, array) => {
  const index = array.findIndex(item => item.id === id)
  if (index === -1) {
    throw new Error('Element not found')
  }
  return index
}

module.exports = findTheIndex
