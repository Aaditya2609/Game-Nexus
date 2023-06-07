import axios from "axios";
import { toast } from "react-toastify";

export const removeWishlistService = async (id, dispatchCart) => {
    const token = localStorage.getItem("Token")
    try {
        const response = await axios({
            method: "DELETE",
            url: `/api/user/wishlist/${id}`,
            headers: {
              authorization: token,
            },
          });
          if (response.status === 200) {
            dispatchCart({ type: "ADD_TO_WISHLIST", payload: response.data.wishlist });
            toast.error("Removed from wishlist", {
              position: "bottom-center",
              autoClose: 2000,
            });
        }
    }
    catch (e) {
        console.error(e)
    }
}