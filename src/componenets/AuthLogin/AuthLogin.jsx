import { useEffect, useState } from "react"
import {  useAuth } from "../../contexts/AuthContext"
import { loginService } from "../../services/Auth/Login"
import "./Styles.css"
import {useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export function AuthLogin()
{

    const [error, setError] = useState("")
    const [password,setPassword]=useState()
    const [email,setEmail]=useState("")
    const {dispatchAuth}=useAuth();
    const navigate=useNavigate();

    const validateEmail = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (email!==""&&!emailRegex.test(email)) {
          setError('Please enter a valid email address');
        } else {
          setError('');
        }
      }
  
      const handleLogin=()=>{
        if(error==="" && password!=="" && email!=="")
        {loginService(email,password,dispatchAuth)
        navigate("/Productlist")}

        else if(email==="")
        {
        toast.error("Email Cannot Be Empty", {
          position: "bottom-center",
          autoClose: 2000,
        });
        setEmail("")
        setPassword("")
      }
      else if(password==="")
        {
        toast.error("Password Cannot Be Empty", {
          position: "bottom-center",
          autoClose: 2000,
        });
        setEmail("")
        setPassword("")
      }
      else if(error!=="")
        {
        toast.error("Email Is Not Valid", {
          position: "bottom-center",
          autoClose: 2000,
        });
        setEmail("")
        setPassword("")
      }
    }

    useEffect(()=>{
        validateEmail();
    },[email])

    const handleGuestLogin = () => {
        const guestEmail = "testuser@gmail.com";
        const guestPassword = "1234";
        setEmail(guestEmail);
        setPassword(guestPassword);
      };
      
    return(
        <div>
        <div className="login-image">
            <img src="https://images7.alphacoders.com/327/327601.jpg" alt="background"/>
        </div>
        <div className="Login-container">
        <h2 id="login-heading">Login</h2>
        <label id="login-email" value={email}>Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          id="Login-email"
          placeholder="Email"
        />
        <p id="Login-email-error">{error}</p>
        <label id="login-password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          id="Login-password"
          type="password"
          placeholder="Password"
        />
        <button onClick={handleLogin} id="login-button">Login</button>
        <button onClick={handleGuestLogin}>Guest Credentials
        </button>
        <button onClick={()=>navigate("/signup")}>Signup</button>
        </div>
    </div>
    )
}