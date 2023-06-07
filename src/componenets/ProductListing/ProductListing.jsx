import React from "react";
import './Styles.css'
import { useProduct } from "../../contexts/ProductContext";
import { NavLink, useNavigate } from "react-router-dom";
import { addCartService } from "../../services/Cart/AddCart";
import { useCart } from "../../contexts/CartContext";
import { addWishlistService } from "../../services/Wishlist/AddWishlist";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { removeWishlistService } from "../../services/Wishlist/RemoveWishlist";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faStar} from '@fortawesome/free-solid-svg-icons'
import { useFilter } from "../../contexts/FilterContext";

export function ProductListing() {
  const { stateProduct} = useProduct();
  const { stateFilter,dispatchFilter } = useFilter();
  const { stateCart, dispatchCart } = useCart();
  const {stateAuth}=useAuth();
  const navigate=useNavigate();

  const{priceFilter,ratingFilter,categoryFilter,searchFilter}=stateFilter;
  const handleResetFilters = () => {
    dispatchFilter({
      type:"RESET",
    });
  };
 

  const handlePriceFilterChange = (event) => {
    dispatchFilter({
      type:"SET_PRICE_FILTER",
      payload:event.target.value
    });
  }

  const handleCategoryFilterChange = (event) => {
    const { value, checked } = event.target;
    const action = {
      type: "SET_CATEGORY_FILTER",
      payload: value
    };
  
    if (checked) {
      dispatchFilter(action);
    } else {
      dispatchFilter({ ...action, type: "REMOVE_CATEGORY_FILTER" });
    }
  };

  const handleRatingFilterChange = (event) => {
    dispatchFilter({
      type:"SET_RATING_FILTER",
      payload:Number(event.target.value)
    });
  }

  
  const applyFilters = (product) => {
    if (priceFilter === "lowToHigh") {
      product = product.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "highToLow") {
      product = product.sort((a, b) => b.price - a.price);
    }

    if (categoryFilter.length > 0) {
      product = product.filter(item => categoryFilter.includes(item.categoryName));
    }

    if (ratingFilter > 0) {
      product = product.filter(item => item.rating >= ratingFilter);
    }

    if(searchFilter!=="")
    {
      product=product.filter(item=>item.name.toLowerCase().includes(searchFilter.toLowerCase()));
    }

    return product;
  }
  const FilteredProducts=applyFilters(stateProduct.product)

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
  return (
    <div id="product-list" style={{minHeight:"31rem"}}>
      <div className="filter-sidebar">
        <h2>Filters</h2>
        <div className="filter-group">
          <h3>Price</h3>
          <div>
            <label>
              <input type="radio" name="priceFilter" value="lowToHigh" onChange={handlePriceFilterChange} checked={priceFilter === "lowToHigh"} />
              Low to High
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="priceFilter" value="highToLow" onChange={handlePriceFilterChange} checked={priceFilter === "highToLow"} />
              High to Low
            </label>
          </div>
        </div>
        <div className="filter-group">
          <h3>Category</h3>
          <div>
            <label>
              <input type="checkbox" name="categoryFilter" value="Action" onChange={handleCategoryFilterChange} checked={categoryFilter.includes("Action")} />
              Action
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="categoryFilter" value="Adventure" onChange={handleCategoryFilterChange} checked={categoryFilter.includes("Adventure")} />
              Adventure
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="categoryFilter" value="RPG" onChange={handleCategoryFilterChange} checked={categoryFilter.includes("RPG")} />
              RPG
            </label>
          </div>  
          <div>
            <label>
              <input type="checkbox" name="categoryFilter" value="Strategy" onChange={handleCategoryFilterChange} checked={categoryFilter.includes("Strategy")} />
              Strategy
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="categoryFilter" value="Sports" onChange={handleCategoryFilterChange} checked={categoryFilter.includes("Sports")} />
              Sports
            </label>
          </div>
        </div>
        <div className="filter-group">
          <h3>Ratings</h3>
          <input id="slider"type="range" defaultValue={0} min="0" max="5" step="0.5" value={ratingFilter} onChange={handleRatingFilterChange} />
          <p>Minimum Rating: {ratingFilter}</p>
        </div>
        <button onClick={()=>handleResetFilters()}>Reset Filters</button>
      </div>
      <div style={{marginLeft:"12vw",width:"100%"}}>
        <h1 style={{margin:"1rem auto 0 auto",fontSize:"3rem"}}>Showing all Products ({FilteredProducts.length} products)</h1>
      <div  className="container">
        {
          applyFilters(stateProduct.product)?.map(item => {
            return (
              <div className="game-card" key={item._id}>
                
              <NavLink id="game-card-navlink" to={`/singleproduct/${item._id}`}>
              <div  >
                <img className="thumbnail" src={item.thumbnail} alt="thumbnail"style={{ height: "300px" }} />
                <h2 className="name">{item.name}</h2>
                <p className="category">{item.categoryName}</p>
                <p className="price">₹ {item.price} <span id="original-price"> ₹ {item.originalPrice}</span><span id="discount"> {item.discount}% OFF</span> </p>
              </div>
              </NavLink>
              
                <button id="add-to-cart" onClick={()=>HandleCart(item,dispatchCart)}>{stateCart.myCart.find((product) => product._id === item._id)?"Go to Cart":"Add to Cart"}</button>
              
              <button id="add-to-wishlist" onClick={()=>HandleWishlist(item,dispatchCart)}>{stateCart.myWishlist.find((product) => product._id === item._id)?<FontAwesomeIcon icon={faHeart} style={{color:"red"}} />:<FontAwesomeIcon icon={faHeart} />}</button>
                 <p id="rating" ><FontAwesomeIcon icon={faStar} /> {item.rating}</p>
              </div>
              
            )
          })
        }
      </div>
      
    </div>
    </div>
    
  )
}
