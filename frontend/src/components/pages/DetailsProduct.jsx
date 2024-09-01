import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../Footer";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import Loader from "../Loader";

const DetailsProduct = () => {
  const { dispatch } = useCart();
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://shoestorebackend-lfcreixow-emans-projects-fe755699.vercel.app/api/products/${productId}`
        );
        
        setProduct(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);
  const parsePrice = (priceString) => {
    // Remove any non-numeric characters except for the decimal point
    const numberString = priceString.replace(/[^0-9.]/g, "");
    return parseFloat(numberString);
  };

  const handleAddToCart = () => {
    const price = parsePrice(product.price);
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product._id,
        name: product.name,
        image: product.image,
        price: price,
        quantity: 1, // default quantity
      },
    });
  };
 

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="row">
        <div
          className="col-2 d-flex"
          style={{ display: "flex", "justify-content": "center" }}
        >
          <img
            src={`/${product.image}`}
            width="50%"
            alt={product.name}
            id="productImg"
          />
          {/* Add more product images here */}
        </div>

        <div className="col-2">
          <p>Home / {product.category}</p>
          <h1>{product.name}</h1>
          <h4>${product.price}</h4>

          <NavLink onClick={handleAddToCart} className="btn" to="/cart">
            Add to Cart
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailsProduct;
