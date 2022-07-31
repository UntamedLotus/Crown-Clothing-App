import { CartContext } from "../../contexts/cart";

import { ShoppingIcon, CartIconCt, ItemCount } from "./cart-icon.style";

import { useContext } from "react";

const CartIcon = ({ cartItem }) => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconCt onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconCt>
  );
};

export default CartIcon;
