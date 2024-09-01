import React, { useEffect, useState } from "react";
// import { products, latestProduct } from "./data.json";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";

const FeatureProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);    
          await axios.get('https://shoestorebackend-lfcreixow-emans-projects-fe755699.vercel.app/api/getProducts').then(data=>{
            setProducts(data?.data?.products)
          });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("An error encountered while reteriving the data");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div class="small-container">
        <h2 class="title">Featured Products</h2>
        <div class="row">
          {loading ? (
            <Loader />
          ) : (
            products?.map((item) => (
             
              <div class="col-4">
                <NavLink to={`/detail/${item?._id}`}>
                  <img src={item.image} />
                </NavLink>
                <NavLink to={`/detail/${item?._id}`}>
                  <h4>{item.name}</h4>
                </NavLink>
                <div class="rating">
                  {/* <!--(before this added awesome4 cdn font link to the head)added a cdn link by searching font awesome4 icon and from the site  search the star entering the first option and getting a link of this fa-star*--> */}
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <p>${item.price}</p>
              </div>
             
            ))
          )}
        </div>

      </div>
    </>
  );
};

export default FeatureProducts;
