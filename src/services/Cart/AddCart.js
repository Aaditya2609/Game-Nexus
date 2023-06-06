import axios from "axios";

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
        }
    }
    catch (e) {
        console.error(e)
    }
}