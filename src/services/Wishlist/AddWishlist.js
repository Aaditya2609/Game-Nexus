import axios from "axios";
import { toast } from "react-toastify";

export const addWishlistService = async (product, dispatchCart) => {
    const token = localStorage.getItem("Token")
    try {
        const response = await axios({
            method: 'post',
            url: '/api/user/wishlist',
            headers: {
                authorization: token
            },
            data: {
                product:product
            }
        });
        if (response.status === 201) {
            dispatchCart({ type: "ADD_TO_WISHLIST", payload: response.data.wishlist });
            toast.success("Added to wishlist", {
                position: "bottom-center",
                autoClose: 2000,
              });
        }
    }
    catch (e) {
        console.error(e)
    }
}