import axios from "axios";

export const removeCartService = async (id, dispatchCart) => {
    const token = localStorage.getItem("Token")
    try {
        const response = await axios({
            method: "DELETE",
            url: `/api/user/cart/${id}`,
            headers: {
              authorization: token,
            },
          });
          if (response.status === 200) {
            dispatchCart({ type: "REMOVE_FROM_CART", payload: response.data.cart });
        }
    }
    catch (e) {
        console.error(e)
    }
}