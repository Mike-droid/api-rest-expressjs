const { ValidationError } = require("sequelize")

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

function ormErrorHandler(error, request, response, next) {
  if (error instanceof ValidationError) {
    response.status(409).json({
      statusCode: 409, //! Conflict
      message: error.name,
      errors: error.errors
    })
  }
  next(error)
}

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler }
