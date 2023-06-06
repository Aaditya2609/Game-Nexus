import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/CartReucer";
import { getCartService } from "../services/Cart/GetCart";
import { getWishlistService } from "../services/Wishlist/GetWishlist";



const CartContext = createContext()
export const useCart = () => useContext(CartContext);
export function CartProvider({ children }) {
  useEffect(()=>{
    getCartService();
    getWishlistService();
  },[])
    const [stateCart, dispatchCart] = useReducer (cartReducer, {
        myCart: [],
        myWishlist: [],
        quantity:0,
    });
    
    

    return(
        <div>
            <CartContext.Provider value={{stateCart,dispatchCart}}>
                {children}
            </CartContext.Provider>
        </div>
    )
}