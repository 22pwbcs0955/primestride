import express from 'express';
import bodyParser from 'body-parser';
import connectDb from './db.js';
import { populateProduct, Product } from './controller/product.js';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors('*'))

// Connect to MongoDB
connectDb();

// Middleware
app.use(bodyParser.json());


// Route to get all products
app.get('/api/getProducts', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({products});
  } catch (err) {
    res.status(500).send(err);
  }
});
//get single product
app.get('/api/products/:id', async (req, res) => {
  try {
      const product = await Product.findById(req.params.id);
      if (!product) return res.status(404).send('Product not found');
      res.status(200).send(product);
  } catch (err) {
      res.status(500).send(err.message);
  }
});
// populate product collection
app.get('/api/populate', async (req, res) => {
    try {
     await populateProduct();
    } catch (err) {
      res.status(500).send(err);
    }
});

// Route to add products
app.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (err) {
    res.status(400).send(err);
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
