import { useSelector } from "react-redux";
import GoodsItem from "./GoodsItem";
import classes from "./ProductCategories.module.css";

const ProductCategories = (props) => {
  const data = useSelector((state) => state.cart.items);
  const currentCategory = data.filter((item) => item.rid === props.id);
  return (
    <table id={props.id} className={classes.table}>
      <thead>
        <tr>
          <td colSpan={5}>
            <h1>{props.categoryName}</h1>
          </td>
        </tr>
      </thead>
      <tbody>
        {currentCategory[0].goods.map((item) => (
          <GoodsItem
            key={item.gid}
            id={item.gid}
            name={item.gname}
            price={item.gprice}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductCategories;
