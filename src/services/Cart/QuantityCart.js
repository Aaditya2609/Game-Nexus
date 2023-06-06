import axios from "axios";
export const quantityCartService = async (id, dispatchCart, quantityIncDec) => {
  const token = localStorage.getItem("Token");
  try {
    const res = await axios({
      method: "POST",
      url: `/api/user/cart/${id}`,

      data: {
        action: {
          type: quantityIncDec,
        },
      },

      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      dispatchCart({ type: "REMOVE_FROM_CART", payload: res.data.cart });
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};