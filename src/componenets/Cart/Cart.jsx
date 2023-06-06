import { toast } from "react-toastify";
import { useCart } from "../../contexts/CartContext";
import { quantityCartService } from "../../services/Cart/QuantityCart";
import { removeCartService } from "../../services/Cart/RemoveCart";
import { addWishlistService } from "../../services/Wishlist/AddWishlist";
import './Styles.css'

export function Cart() {
    const { stateCart, dispatchCart } = useCart();

    const finalPrice = stateCart.myCart.reduce(
        (acc, curr) => (acc += curr.originalPrice * curr.qty),
        0
    );
    const Discount = stateCart.myCart.reduce(
        (acc, curr) => (acc += ((curr.originalPrice - curr.price) * curr.qty)),
        0
    );
    const total = finalPrice - Discount;

    const handleIncrementDecrement = (item, dispatchCart, type) => {
        if (type === "increment")
            quantityCartService(item._id, dispatchCart, type)
        else if (type === "decrement" && item.qty > 1) {
            quantityCartService(item._id, dispatchCart, type)
        }
        else if (type === "decrement" && item.qty <= 1) {
            removeCartService(item._id, dispatchCart)
        }
    }
    const HandleWishlist = (item, dispatchCart) => {
            if (stateCart.myWishlist.length === 0) {
                removeCartService(item._id,dispatchCart)
                addWishlistService(item, dispatchCart)
            }
            else {
                if (stateCart.myWishlist.find((product) => product._id === item._id)) {
                    toast.warning("Already In Wishlist", {
                        position: "bottom-center",
                        autoClose: 2000,
                      })
                }
                else {
                    removeCartService(item._id,dispatchCart)
                    addWishlistService(item, dispatchCart)
                }
            }

    }
    return (
        <div>
            <h1 style={{ marginTop: "1rem" }}>My Cart ({stateCart.myCart.length} items) </h1>
            {stateCart.myCart.length === 0 ? (<div style={{ margin: "1rem auto", fontSize: "3rem" }}>Your Cart Is Empty</div>) : (
                <div className="cart-page-container">
                    <div className="cart-page-card">
                        {stateCart.myCart.map(item => {
                            return (
                                <div className="cart-card-container" key={item._id}>
                                    <div className="cart-card-thumbnail">
                                        <img src={item.thumbnail} alt="thumbnail" />
                                    </div>
                                    <div className="cart-card-details">
                                        <h2 className="cart-card-name">{item.name}</h2>
                                        <p className="cart-card-category">{item.categoryName}</p>
                                        <p className="cart-card-price">₹ {item.price} <span id="cart-card-original-price"> ₹ {item.originalPrice}</span><span id="cart-card-discount"> {item.discount}% OFF</span> </p>
                                        <p id="cart-card-quantity-text">Quantity: <button id="cart-card-decrement" onClick={() => handleIncrementDecrement(item, dispatchCart, "decrement")}> - </button><span id="cart-card-quantity"> {item.qty} </span><button id="cart-card-increment" onClick={() => handleIncrementDecrement(item, dispatchCart, "increment")}> + </button></p>
                                        <button id="cart-card-remove" onClick={() => removeCartService(item._id, dispatchCart)}>Remove From Cart</button>
                                        <button id="cart-card-wishlist" onClick={()=>HandleWishlist(item,dispatchCart)}>Move to Wishlist</button>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                    <div className="cart-page-details">
                        <div className="cart-summary">
                            <h2 className="cart-summary-title">Cart Summary</h2>
                            <div className="cart-summary-item-container">
                            <hr></hr>
                            <div className="cart-summary-item">
                            <p>Price ({stateCart.myCart.reduce((acc,cv)=>acc+cv.qty,0)} items)</p> 
                            <p>₹{finalPrice}</p>
                            </div>
                            <div className="cart-summary-item">
                            <p>Discount</p> 
                            <p>₹{Discount}</p>
                            </div>
                            <div className="cart-summary-item delivery">
                            <p>Delivery Charges</p> 
                            <p>Free</p>
                            </div>
                           
                            <hr></hr>
                            <div className="cart-summary-item amount">
                            <p>Total Amount</p> 
                            <p>₹ {total}</p>
                            </div>
                            <p className="cart-summary-savings">You Saved ₹ {Discount} on this order </p>
                            <button>Check Out</button>
                            </div>
                            
  
                        </div>
                    </div>
                </div>)}
        </div>
    )
}