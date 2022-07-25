import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

import "./checkout.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="">
      <h1>I AM REVIEW</h1>
      <div>
        {cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id}>
              <h2>{cartItem.name}</h2>
              <span>{cartItem.quantity}</span>
              <span>decrement</span>
              <span>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
