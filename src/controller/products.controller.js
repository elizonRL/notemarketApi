const products = [
  { id: 1, name: 'Product 1', price: 10.99, quantity: 1, quantityType: 'unidad', category: 'frutas y verduras' },
  { id: 2, name: 'Product 2', price: 19.99, quantity: 2, quantityType: 'libra', category: 'carnes' },
  { id: 3, name: 'Product 3', price: 5.99, quantity: 3, quantityType: 'unidad', category: 'enlatados' },
];


const getAllProducts = (req, res) => {
  res.send(products);
}

const getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === parseInt(id));
  if (!product) {
    return res.status(404).send('Product not found');
  }
  res.send(product);
}

module.exports = { getAllProducts, getProductById };