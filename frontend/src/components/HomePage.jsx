import React from "react";
import Navbar from "./layout/Navbar";
import Navigation from "./Navigation";
import FeatureCategories from "./FeatureCategories";
import FeatureProducts from "./FeatureProducts";
import Testimonial from "./Testimonial";
import Brands from "./Brands";
import Footer from "./Footer";
import Header from "./Header";
const index = () => {
  return (
    <>
      <Header />
      <Navigation />
      <FeatureCategories />
      <FeatureProducts />
      <Testimonial />
      <Brands />
      <Footer />
    </>
  );
};

export default index;
