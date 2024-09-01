import mongoose from 'mongoose';

// Define a product schema
const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    rating: Number,
    image: String
});

// Create a model for products
export const Product = mongoose.model('Product', productSchema);

const productsList = [
  {
    "name": "Flat Heel Gray Shoes",
    "price": "$50.00",
    "rating": 4.5,
    "image": "images/product-5.jpg"
  },
  {
    "name": "Lace-Fastening Black Shoes",
    "price": "$21.00",
    "rating": 4.5,
    "image": "images/product-3.jpg"
  },
  {
    "name": "HRX Men's Cotton Socks",
    "price": "$09.00",
    "rating": 4.0,
    "image": "images/product-7.jpg"
  },
  {
    "name": "Lace-Up Running Shoes",
    "price": "$35.00",
    "rating": 4.0,
    "image": "images/product-2.jpg"
  },
  {
    "name": "HRX Cotton Socks",
    "price": "$10.00",
    "rating": 4.0,
    "image": "images/product-7.jpg"
  },
  {
    "name": "Flat Lace-Fastening Shoes",
    "price": "$48.00",
    "rating": 4.5,
    "image": "images/product-10.jpg"
  },
  {
    "name": "Loafers Men (Gray)",
    "price": "$15.00",
    "rating": 4.0,
    "image": "images/product-11.jpg"
  },
  {
    "name": "Lace-Fastening White Shoes",
    "price": "$21.00",
    "rating": 4.0,
    "image": "images/product-12.jpg"
  }
];

export const populateProduct = async ()=>{

    await Product.insertMany(productsList)
      .then(() => {
        console.log("Data inserted");
        mongoose.connection.close();
      })
      .catch(err => {
        console.error(err);
      });
}
