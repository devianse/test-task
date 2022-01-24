import React from "react";
import ProductCategories from "../Product/ProductCategories";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const Layout = (props) => {
  const productCategories = useSelector((state) => state.cart.items);
  return (
    <React.Fragment>
      <main>
        {productCategories.map((category) => (
          <ProductCategories
            key={category.rid}
            categoryName={category.rname}
            id={category.rid}
          />
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default Layout;
