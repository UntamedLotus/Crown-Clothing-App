import "./product-card.scss";

import Button from "../buttons/button";

const ProductCard = ({ product }) => {
  return (
    <div className="pc-container">
      <img src={product.imageUrl} alt={`${product.name}`} />
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCard;
