import "./cart-item.scss";

const cartItem = ({ cartItem }) => {
  return (
    <div className="">
      <h2>{cartItem.name}</h2>
      <span>{cartItem.quantity}</span>
    </div>
  );
};

export default cartItem;
