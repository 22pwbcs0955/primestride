import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/layout/Navbar";
import Products from "./components/pages/Products";
import Cart from "./components/pages/Cart";
import "./App.css";
import DetailsProduct from "./components/pages/DetailsProduct";
import { CartProvider } from "./context/CartContext";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Products />} />
        <Route path="/detail/:productId" element={<DetailsProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
