import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContext";
import "./Styles.css"
import { Nav } from "../../layouts/Nav/Nav";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { addCartService } from "../../services/Cart/AddCart";
import { toast } from "react-toastify";
import { addWishlistService } from "../../services/Wishlist/AddWishlist";
import { removeWishlistService } from "../../services/Wishlist/RemoveWishlist";

export function SingleProduct()
{
    const {id}=useParams();
    const {stateProduct}=useProduct();
    const {stateAuth}=useAuth();
    const {stateCart,dispatchCart}=useCart();
    const navigate=useNavigate();
    const product=stateProduct.product?.find(item=>item._id===id)


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

const HandleWishlist=(item,dispatchCart)=>
{
  if (stateAuth.isAuth)
    {
      if(stateCart.myWishlist.length === 0)
      {
        addWishlistService(item, dispatchCart)
      } 
      else{
        if(stateCart.myWishlist.find((product) => product._id === item._id))
        {
          removeWishlistService(item._id,dispatchCart);
        }
        else{
          addWishlistService(item, dispatchCart)  
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
    
    return(
        <div>
            <Nav/>
        <div className="single-product-container">
            <div className="single-product-card" key={product?._id} >
            <div className="single-product-card image">
                <img className="single-product-card thumbnail" alt="thumbnail" src={product?.thumbnail} style={{ height: "300px" }} />
                </div>
                <div className="single-product-card details">
                <h2 className="single-product-card name">{product?.name}</h2>
                <p className="single-product-card price">₹ {product?.price} <span id="single-product-card-original-price"> ₹ {product?.originalPrice}</span><span id="single-product-card-discount"> {product?.discount}% OFF</span> </p>
                <p className="single-product-card description">Description: {product?.description}</p>
                <p className="single-product-card category">Category: {product?.categoryName}</p>
                <p className="single-product-card studio">Studio: {product?.studio}</p>
                <div>
                <button id="single-product-card-add-to-cart" onClick={()=>HandleCart(product,dispatchCart)}>{stateCart.myCart.find((products) => products._id === product._id)?"Go to Cart":"Add to Cart"}</button>
                <button id="single-product-card-add-to-wishlist"onClick={()=>HandleWishlist(product,dispatchCart)}>{stateCart.myWishlist.find((products) => products._id === product._id)?"Remove from Wishlist":"Add to Wishlist"}</button>
                </div>
                </div>
              </div>
        </div>
        </div>
    )
}