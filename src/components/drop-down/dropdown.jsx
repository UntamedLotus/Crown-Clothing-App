import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import CartItem from "../cart-items/cart-item";

import "./dropdown.scss";
import Button from "../buttons/button";

const DropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default DropDown;
