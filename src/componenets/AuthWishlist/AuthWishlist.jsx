import { useNavigate } from "react-router-dom"
import { useCart } from "../../contexts/CartContext"
import { addCartService } from "../../services/Cart/AddCart"
import { removeWishlistService } from "../../services/Wishlist/RemoveWishlist"
import "./Styles.css"
import { useAuth } from "../../contexts/AuthContext"
import { toast } from "react-toastify"
export function AuthWishlist()
{
    const navigate=useNavigate();
    const{stateAuth}=useAuth();
    const HandleCart=(item,dispatchCart)=>
  {
    if (stateAuth.isAuth)
    {
      if(stateCart.myCart.length === 0)
      {
        addCartService(item, dispatchCart)
      } 
      else{
        if(stateCart.myCart.find((product) => product._id === item._id))
        {
          navigate("/cart")
        }
        else{
          addCartService(item, dispatchCart)  
        }
      }    
    }
    else
    {
      navigate("/login")
      toast.warning("Login Required", {
        position: "bottom-center",
        autoClose: 2000,
      })
    }
  }
    const {stateCart,dispatchCart}=useCart()

    return(
        <div style={{minHeight:"30rem"}}>
            <h1 style={{marginTop:"1rem"}}>My Wishlist ({stateCart.myWishlist.length} items)</h1>
            <div className="wishlist-container">
                {stateCart.myWishlist.length===0?(<div style={{margin:" 1rem auto",fontSize:"3rem"}}>Your Wishlist Is Empty</div>):(
                <>
                {stateCart.myWishlist.map(item=>{
                    return(
                    <div className="wishlist-card" key={item._id} >
                    <img className="thumbnail" alt="thumbnail"src={item.thumbnail} style={{ height: "300px" }} />
                    <h2 className="name">{item.name}</h2>
                    <p className="category">{item.categoryName}</p>
                    <p className="price">₹ {item.price} <span id="original-price"> ₹ {item.originalPrice}</span><span id="discount"> {item.discount}% OFF</span> </p>
                    <div>
                        <button className="wishlist-add-cart" onClick={()=>HandleCart(item,dispatchCart)}>{stateCart.myCart.find((products) => products._id === item._id)?"Go to Cart":"Add to Cart"}</button>
                        <button className="wishlist-remove-wishlist" onClick={()=>removeWishlistService(item._id,dispatchCart)}>Remove From Wishlist</button>
                    </div>
                  </div>)
                })}
                </>)}
            </div>
        </div>
    )
}