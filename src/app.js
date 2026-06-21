//Modulos externos
const express = require('express')
const { unknownEndpoint, errorHandler, logger } = require('./utils/middelware')
const productRouter = require('./router/products.router')

//Modulos internos y configuración de middleware antes de las rutas
const app = express()
app.use(express.json())
app.use(logger)
//Rutas
app.use('/products', productRouter)

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

//Middelware de manejo de errores y rutas desconocidas DESPUES de las rutas
app.use(errorHandler)
app.use(unknownEndpoint)

//Exportar la aplicación para su uso en otros módulos, como el servidor
module.exports = app
