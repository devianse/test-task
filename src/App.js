import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "./components/Layout/Layout";
import { fetchCartData } from "./store/cart-actions";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  return <Layout />;
}

export default App;
