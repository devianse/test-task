import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const GoodsItem = (props) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const changeHandler = (event) => {
    setQuantity(+event.target.value);
    dispatch(
      cartActions.addValuesToCart({
        id: props.id,
        quantity: +event.target.value,
        totalPrice: +props.price * quantity,
      })
    );
  };
  return (
    <tr key={props.id}>
      <td>ID = {props.id}</td>
      <td>NAME = {props.name}</td>
      <td>PRICE = {+props.price}</td>
      <td>
        <input
          type="number"
          min="0"
          id="количество"
          onChange={changeHandler}
          value={quantity}></input>
      </td>
      <td>
        {!quantity && "Сумма"}
        {!!quantity && quantity * +props.price}
      </td>
    </tr>
  );
};

export default GoodsItem;
