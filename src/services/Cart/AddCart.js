import axios from "axios";
import { toast } from "react-toastify";

export const addCartService = async (product, dispatchCart) => {
    const token = localStorage.getItem("Token")
    try {
        const response = await axios({
            method: 'post',
            url: '/api/user/cart',
            headers: {
                authorization: token
            },
            data: {
                product:product
            }
        });
        if (response.status === 201) {
            dispatchCart({ type: "ADD_TO_CART", payload: response.data.cart });
            toast.success("Added to cart", {
                position: "bottom-center",
                autoClose: 2000,
              });
        }
    }
    catch (e) {
        console.error(e)
    }
}