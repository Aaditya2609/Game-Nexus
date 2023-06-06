import axios from "axios";

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
        }
    }
    catch (e) {
        console.error(e)
    }
}