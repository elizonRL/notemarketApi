const express = require('express')
const { unknownEndpoint, errorHandler } = require('./utils/middelware')

const app = express()
app.use(express.json())
const productRouter = require('./router/products.router')

app.use('/products', productRouter)

app.get('/', (req, res) => {
  res.send('Hello, World!')
})
app.use(errorHandler)
app.use(unknownEndpoint)
module.exports = app
