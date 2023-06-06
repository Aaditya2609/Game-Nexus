import axios from "axios";
export const signupService=async( firstName,
    lastName,
    email,
    password,dispatchAuth)=>{
    try{
        const res =await axios({
            method: 'POST',
            url: '/api/auth/signup',
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            }
          });
          if(res.status===201)
          {
            dispatchAuth({
                type: "GET_USER_DETAILS",
                payload: res.data.createdUser,
              });
            localStorage.setItem("token", res.data.encodedToken);
        }
    }
    catch(e)
    {
        console.error(e.res)
    }
}