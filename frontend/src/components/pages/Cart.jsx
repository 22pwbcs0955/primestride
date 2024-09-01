// Cart.js
import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../Footer";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { items } = state;

  // Handle quantity change
  const handleQuantityChange = (id, quantity) => {
    dispatch({
      type: "UPDATE_ITEM",
      payload: { id, quantity: Number(quantity) },
    });
  };
  console.log(items, "itemssss");
  // Handle item removal
  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  // Calculate totals
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.175; // Example tax rate of 17.5%
  const total = subtotal + tax;

  return (
    <>
      <Navbar />
      <div className="small-container cart-page">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="cart-info">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p>{item.name}</p>
                      <small>Price: ${item.price.toFixed(2)}</small>
                      <br />
                      <button onClick={() => handleRemoveItem(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                    min="1"
                  />
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total-price">
          <table>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>${tax.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>${total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
