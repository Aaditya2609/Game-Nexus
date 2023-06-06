import axios from "axios";

export const productService = async (dispatchProduct) => {
  try {
    dispatchProduct({ type: "GET_PRODUCTS" });
    const { data } = await axios.get("/api/products");
    dispatchProduct({
      type: "GET_PRODUCTS_LOADED",
      payload: data.products,
    });
  } catch (e) {
    dispatchProduct({ type: "ERROR" });
    console.log(e);
  }
};