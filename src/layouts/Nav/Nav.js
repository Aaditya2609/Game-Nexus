import "./Styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { useFilter } from "../../contexts/FilterContext";
import { useCart } from "../../contexts/CartContext";


export function Nav() {
    const { stateAuth, dispatchAuth } = useAuth();
    const { stateCart, dispatchCart } = useCart();
    const [searchtext,setSearchText]=useState("");
    const {dispatchFilter}=useFilter();
    const navigate=useNavigate();
    const handleSearch=()=>{
        dispatchFilter({type:"SET_SEARCH_FILTER",payload:searchtext})
        navigate('./ProductList')
        setSearchText("")
    }

    return (
        <div>
            <nav>
                <NavLink to="/" id="title">Game Nexus</NavLink>
                <div  className="search-bar-div">
                    <input placeholder="Search" value={searchtext} className="search-bar" onChange={(e)=>setSearchText(e.target.value)}></input>
                    <div className="pages" style={{cursor:"pointer"}}><FontAwesomeIcon icon={faMagnifyingGlass} onClick={()=>handleSearch()}/></div>
                </div>
                <ul>
                    <NavLink to="/ProductList" id="explore" className="pages"><FontAwesomeIcon icon={faGamepad} /> </NavLink>
                    <NavLink to="/cart" id="cart" className="pages"><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                    <NavLink to="/wishlist" id="wishlist" className="pages"><FontAwesomeIcon icon={faHeart} /></NavLink>
                    <NavLink to={stateAuth.isAuth ? "/profile" : "/login"} id="login" className="pages"><FontAwesomeIcon icon={faUser} /></NavLink>
                    {stateAuth.isAuth ? (<NavLink className="pages" to="/" onClick={() => {
                        dispatchAuth({ type: "USER_LOGOUT" });
                        dispatchCart({type:"CLEAR_CART"})
                        localStorage.clear();
                        toast.success("Successfully Logged Out", {
                            position: "bottom-center",
                            autoClose: 2000,
                        });

                    }}><FontAwesomeIcon icon={faRightFromBracket} /></NavLink>) : (<div></div>)}
                </ul>
            </nav>
        </div>
    )
}