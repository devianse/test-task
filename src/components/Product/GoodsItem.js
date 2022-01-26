import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./GoodsItem.module.css";

const GoodsItem = (props) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const changeHandler = (event) => {
    setQuantity(+event.target.value);
    dispatch(
      cartActions.addValuesToCart({
        id: props.id,
        quantity: +event.target.value,
        totalPrice: +props.price * +event.target.value,
      })
    );
  };
  return (
    <tr key={props.id} className={classes.tr}>
      <td>ID = {props.id}</td>
      <td>Артикул = {props.name}</td>
      <td>Цена = {+props.price}</td>
      <td>
        <input
          type="number"
          min="0"
          id="количество"
          onChange={changeHandler}
          value={quantity}></input>
      </td>
      <td>
        {!quantity && "Итого"}
        {!!quantity && quantity * +props.price}
      </td>
    </tr>
  );
};

export default GoodsItem;
