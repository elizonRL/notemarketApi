const products = [
  { id: 1, name: 'Product 1', price: 10.99, quantity: 1, quantityType: 'unidad', category: 'frutas y verduras' },
  { id: 2, name: 'Product 2', price: 19.99, quantity: 2, quantityType: 'libra', category: 'carnes' },
  { id: 3, name: 'Product 3', price: 5.99, quantity: 3, quantityType: 'unidad', category: 'enlatados' },
]


const getAllProducts = () => {
  return products
}

const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id))
}

const deleteProductById = (id) => {
  return products.filter(p => p.id !== parseInt(id))
}

module.exports = { getAllProducts, getProductById, deleteProductById }
