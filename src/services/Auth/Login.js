import axios from "axios";
import { toast } from "react-toastify";

export const loginService=async( email,
  password,
  dispatchAuth)=>{
    try{
        const res =await axios({
            method: 'post',
            url: '/api/auth/login',
            data: {
              email: email,
              password: password
            }
          });
          if(res.status===200)
          {
            console.log(res.data.foundUser)
            dispatchAuth({
              type: "GET_USER_DETAILS",
              payload: res.data.foundUser,
            });
          localStorage.setItem("Token",res.data.encodedToken)
          const userDetails=JSON.stringify(res.data.foundUser)
          localStorage.setItem("userDetail",userDetails)
          toast.success("Login Successfull", {
            position: "bottom-center",
            autoClose: 2000,
          });
        }
    }
    catch(e)
    {
        console.error(e)
        toast.error("User Not Found", {
          position: "bottom-center",
          autoClose: 2000,
        });
    }
}