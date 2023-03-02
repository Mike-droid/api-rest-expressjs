const logErrors = (error, request, response, next) => {
  console.error(error)
  next(error)
}

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, request, response, next) => {
  response.status(500).json({
    message: error.message,
    stack: error.stack
  })
}

const boomErrorHandler = (error, request, response, next) => {
  if (error.isBoom) {
    const { output } = error
    response.status(output.statusCode).json(output.payload)
  }
  next(error)
}

module.exports = { logErrors, errorHandler, boomErrorHandler }
