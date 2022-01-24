import { useSelector } from "react-redux";
import classes from "./Footer.module.css";

const Footer = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartSum = useSelector((state) => state.cart.totalPrice);
  const submitHandler = () => {};
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
