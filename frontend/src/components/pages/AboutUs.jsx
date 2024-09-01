import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../../assets/styles/aboutus.css";
import Navbar from "../layout/Navbar";
import Footer from "../Footer";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="about-us-container container-fluid">
        <div className="title-section" data-aos="fade-down">
          <h1 className="main-title">About PrimeStride Shoes</h1>
          <p className="subtitle">
            At PrimeStride Shoes, we believe in combining style, comfort, and
            durability. Our shoes are designed for every adventure, whether
            you're exploring city streets or trekking through nature's trails.
          </p>
        </div>

        <div className="image-section" data-aos="zoom-in">
          <img
            src="images/slide22.jpg"
            alt="PrimeStride Shoes"
            className="about-image"
          />
        </div>

        <div className="info-section">
          <div className="info-card" data-aos="fade-right">
            <h2 className="info-title">Why Choose Us?</h2>
            <p className="info-text">
              We are dedicated to providing footwear that blends quality and
              style. Our products are crafted with care and designed to offer
              maximum comfort for any occasion. Experience the difference with
              PrimeStride Shoes.
            </p>
          </div>
          <div className="info-card" data-aos="fade-left">
            <h2 className="info-title">Our Mission</h2>
            <p className="info-text">
              Our mission is to create shoes that cater to all walks of life,
              ensuring that everyone can find their perfect pair for any
              journey. We are committed to sustainability and use eco-friendly
              materials in our designs.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
