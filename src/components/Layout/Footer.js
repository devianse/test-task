import { useSelector, useDispatch } from "react-redux";
import { sendCartData } from "../../store/cart-actions";
import classes from "./Footer.module.css";

const Footer = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartSum = useSelector((state) => state.cart.totalPrice);
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(sendCartData(cart));
  };
  return (
    <div className={classes.footer}>
      <div>Количество: {cartQuantity}</div>
      <div>Сумма: {cartSum}</div>
      <button className={classes.button} onClick={submitHandler}>
        <span>Корзина</span>
      </button>
    </div>
  );
};

export default Footer;
