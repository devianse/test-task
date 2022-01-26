import { useSelector } from "react-redux";
import classes from "./SideNav.module.css";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const productCategories = useSelector((state) => state.cart.items);
  return (
    <div className={classes.sidenav}>
      <ul>
        {productCategories.map((item) => (
          <li key={item.rid}>
            <NavLink to={`/task/${item.rid}`} activeClassName={classes.active}>
              {item.rname}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
