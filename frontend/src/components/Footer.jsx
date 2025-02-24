import React from "react";
import "../assets/styles/footer.css";
const Footer = () => {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download App for Android and ios mobile phone.</p>
            <div class="app-logo">
              <img src="/images/play-store.png" alt="" />
              <img src="/images/app-store.png" alt="" />
            </div>
          </div>
          <div class="footer-col-2">
            <img src="/images/logo.png" />
            <p>
              Our Purpose Is To Sustainably Make the Pleasure and Benefits of
              Sports Accessible to the Many.
            </p>
          </div>
          <div class="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div class="footer-col-4">
            <h3>Follow us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>

        <hr />
        <p class="copyright">Copyright 2024 - PrimeStride</p>
      </div>
    </div>
  );
};

export default Footer;
