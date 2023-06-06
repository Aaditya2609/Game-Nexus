import axios from "axios";

export const getCartService=async(dispatchCart)=>{
    const token=localStorage.getItem("Token")
    try{
        
        const response =await axios({
            method: 'get',
            url: '/api/user/cart',
            headers: {
             authorization:token
          }
        });
        if (response.status === 200) {
            dispatchCart({ type: "ADD_TO_CART", payload: response.data.cart });
          }
    }
    catch(e)
    {
        console.error(e)
    }
}