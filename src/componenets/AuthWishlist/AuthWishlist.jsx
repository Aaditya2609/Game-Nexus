import { useCart } from "../../contexts/CartContext"
import { removeWishlistService } from "../../services/Wishlist/RemoveWishlist"
import "./Styles.css"
export function AuthWishlist()
{
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
                        <button className="wishlist-add-cart">Add to Cart</button>
                        <button className="wishlist-remove-wishlist" onClick={()=>removeWishlistService(item._id,dispatchCart)}>Remove From Wishlist</button>
                    </div>
                  </div>)
                })}
                </>)}
            </div>
        </div>
    )
}