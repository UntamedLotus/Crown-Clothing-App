import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { UserContext } from "../../contexts/user";

import { CartContext } from "../../contexts/cart";

import "./cart-icon.scss";
import { useContext } from "react";

const CartIcon = ({ cartItem }) => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
