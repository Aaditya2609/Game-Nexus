import axios from "axios";

export const getWishlistService=async(dispatchCart)=>{
    const token=localStorage.getItem("Token")
    try{
        
        const response =await axios({
            method: 'get',
            url: '/api/user/wishlist',
            headers: {
             authorization:token
          }
        });
        if (response.status === 200) {
            dispatchCart({ type: "ADD_TO_WISHLIST", payload: response.data.wishlist });
          }
    }
    catch(e)
    {
        console.error(e)
    }
}