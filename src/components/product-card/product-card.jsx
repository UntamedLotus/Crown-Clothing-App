import "./product-card.scss";

import Button, { BUTTON_TYPES } from "../buttons/button";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const addProducts = () => addItemToCart(product);

  return (
    <div className="pc-container">
      <img src={product.imageUrl} alt={`${product.name}`} />
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      <Button buttonType={BUTTON_TYPES.inverted} onClick={addProducts}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
