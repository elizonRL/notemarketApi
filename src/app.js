const express = require('express');

const app = express();
app.use(express.json());
const productRouter = require('./router/products.router');

app.use('/products', productRouter);

app.get('/', (req, res) => { 
   res.send('Hello, World!');
});

module.exports = app;