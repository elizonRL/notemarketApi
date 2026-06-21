const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    quantity: 1,
    quantityType: 'unidad',
    category: 'frutas y verduras',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 19.99,
    quantity: 2,
    quantityType: 'libra',
    category: 'carnes',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 5.99,
    quantity: 3,
    quantityType: 'unidad',
    category: 'enlatados',
  },
]

const getAllProducts = () => {
  return products
}

const getProductById = (id) => {
  return products.find((p) => p.id === parseInt(id))
}

const deleteProductById = (id) => {
  return products.filter((p) => p.id !== parseInt(id))
}

const createProduct = (product) => {
  const newProduct = {
    id: products.length + 1,
    ...product,
  }
  products.push(newProduct)
  return newProduct
}

const updateProductById = (id, updatedProduct) => {
  const product = getProductById(id)
  if (product) {
    const index = products.indexOf(product)
    products[index] = { ...product, ...updatedProduct }
    return products[index]
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  deleteProductById,
  createProduct,
  updateProductById,
}
