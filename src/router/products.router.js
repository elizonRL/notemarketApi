const productRouter = require('express').Router()
const {
  getAllProducts,
  getProductById,
} = require('../controller/products.controller')
/**
 * Router para gestionar productos.
 * @summary Implementa las rutas para la gestión de productos.
 * @param {Object} req, res - Objetos de solicitud y respuesta.
 * @return {Object} productos.
 */

productRouter.get('/', (req, res) => {
  const products = getAllProducts()
  res.send(products)
})

productRouter.get('/:id', (req, res) => {
  const { id } = req.params
  const product = getProductById(id)
  if (!product) {
    return res.status(404).send('Product not found')
  }
  res.send(product)
})

productRouter.post('/', (req, res) => {
  res.send('Crear un nuevo producto')
})

productRouter.put('/:id', (req, res) => {
  res.send(`Actualizar el producto con id ${req.params.id}`)
})

productRouter.delete('/:id', (req, res) => {
  res.send(`Eliminar el producto con id ${req.params.id}`)
})

module.exports = productRouter
