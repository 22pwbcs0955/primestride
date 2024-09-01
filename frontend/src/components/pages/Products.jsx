import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../Footer";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Loader from "../Loader";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://shoestorebackend-lfcreixow-emans-projects-fe755699.vercel.app/api/getProducts");
      setProducts(response?.data?.products || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("An error occurred while retrieving the data");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="row row-2">
          <h2>All Products</h2>
          <select>
            <option>Default sorting</option>
            <option>Sort by price</option>
            <option>Sort by popularity</option>
            <option>Sort by rating</option>
            <option>Sort by sale</option>
          </select>
        </div>

        <div className="row">
          {loading ? (
            <Loader />
          ) : (
            products.map((product) => (
              <div className="col-4" key={product._id}>
                <NavLink to={`/detail/${product._id}`}>
                  <img src={product.image} alt={product.name} />
                </NavLink>
                <NavLink to={`/detail/${product._id}`}>
                  <h4>{product.name}</h4>
                </NavLink>
                <div className="rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <i
                      key={index}
                      className={`fa fa-star${index < Math.ceil(product.rating) ? '' : '-o'}`}
                    ></i>
                  ))}
                </div>
                <p>${product.price}</p>
              </div>
        
            ))
          )}
        </div>

        <div className="page-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
