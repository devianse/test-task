import React from "react";
import ProductCategories from "../Product/ProductCategories";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import SideNav from "./SideNav";
import classes from "./Layout.module.css";
import { Route, Switch, Redirect } from "react-router-dom";

const Layout = () => {
  const productCategories = useSelector((state) => state.cart.items);
  return (
    <React.Fragment>
      <main>
        <SideNav />
        <div className={classes.mainSection}>
          <Switch>
            <Route path="/task" exact>
              {productCategories.map((category) => (
                <ProductCategories
                  key={category.rid}
                  categoryName={category.rname}
                  id={category.rid}
                />
              ))}
            </Route>
            {productCategories.map((category) => (
              <Route path={`/task/${category.rid}`} key={`category.rid`}>
                <ProductCategories
                  key={category.rid}
                  categoryName={category.rname}
                  id={category.rid}
                />
              </Route>
            ))}

            <Route path="/*">
              <Redirect to="/task" />
            </Route>
          </Switch>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default Layout;
