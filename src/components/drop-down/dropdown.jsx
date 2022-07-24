import "./dropdown.scss";
import Button from "../buttons/button";
import cartItem from "../cart-items/cart-item";

const DropDown = () => {
  return (
    <div className="dropdown">
      <div className="cart-items">{}</div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default DropDown;
