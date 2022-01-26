import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://datainlife.ru/junior_task/get_products.php"
      );
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      const sortedData = [];
      for (const category of cartData) {
        if (category.rid) {
          sortedData.push({
            rname: category.rname,
            rid: category.rid,
            goods: [...category.goods],
          });
        } else {
          category.rname = "Остальные товары";
          category.rid = "306";
          sortedData.push(category);
        }
      }
      dispatch(
        cartActions.generateCart({
          items: sortedData || [],
        })
      );
    } catch (error) {}
  };
};

export const sendCartData = (cart) => {
  return async () => {
    const data = new FormData();
    const products = {};

    cart.map((item) => (products[item.id] = item.quantity));
    data.append("products", JSON.stringify(products));

    const sendRequest = async () => {
      const response = await fetch(
        "https://datainlife.ru/junior_task/add_basket.php",
        {
          method: "POST",
          body: data,
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      alert(error);
    }
  };
};
