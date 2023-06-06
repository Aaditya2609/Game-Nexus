import axios from "axios";

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
        }
    }
    catch (e) {
        console.error(e)
    }
}