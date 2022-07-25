import "./cart-item.scss";

const CartItem = ({ cartItem }) => {
  return (
    <div className="">
      <h2>{cartItem.name}</h2>
      <span>{cartItem.quantity}</span>
    </div>
  );
};

export default CartItem;
