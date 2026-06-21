const { NODE_ENV } = require('./config')

const logger = (request, response, next) => {
  if (NODE_ENV === 'development') {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    if (request.method === 'POST' || request.method === 'PUT') {
      console.log('Body:  ', request.body)
    }
    console.log('---')
  }
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  response.status(500).send({ error: 'internal server error' })
  next(error)
}

module.exports = { unknownEndpoint, errorHandler, logger }
