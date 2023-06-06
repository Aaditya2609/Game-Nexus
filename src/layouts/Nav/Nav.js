import "./Styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";


export function Nav() {
    const { stateAuth,dispatchAuth } = useAuth();

    return (
        <div>
            <nav>
                <NavLink to="/" id="title">Game Nexus</NavLink>
                <ul>
                    <NavLink to="/" className="pages"><FontAwesomeIcon icon={faMagnifyingGlass} /></NavLink>
                    <NavLink to="/ProductList" id="explore" className="pages"><FontAwesomeIcon icon={faGamepad} /> </NavLink>
                    <NavLink to="/cart" id="cart" className="pages"><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                    <NavLink to="/wishlist" id="wishlist" className="pages"><FontAwesomeIcon icon={faHeart} /></NavLink>
                    <NavLink to={stateAuth.isAuth? "/profile":"/login"} id="login" className="pages"><FontAwesomeIcon icon={faUser} /></NavLink>
                    {stateAuth.isAuth ? (<NavLink className="pages" to="/" onClick={() => {
                        dispatchAuth({ type: "USER_LOGOUT" });
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