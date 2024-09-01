import React from "react";
import Navbar from './layout/Navbar'
const Header = () => {
  return (
    <div className="header">
      <div className="container">
         <Navbar />
        <div className="row">
          <div className="col-2">
            <h1>
              Stride Boldly:
              <br />
              PrimeStride Shoes for Every Adventure
            </h1>
            <p>
              Step into style and comfort with our <br />
              exclusive collection of trendsetting footwear.
            </p>
            <a href="products.html" className="btn">
              Explore Now &#8594;
            </a>
          </div>
          <div className="col-2">
            <img src="images/image1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
