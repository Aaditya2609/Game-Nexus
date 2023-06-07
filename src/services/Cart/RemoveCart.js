import axios from "axios";
import { toast } from "react-toastify";

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
            toast.error("Removed from cart", {
              position: "bottom-center",
              autoClose: 2000,
            });
        }
    }
    catch (e) {
        console.error(e)
    }
}