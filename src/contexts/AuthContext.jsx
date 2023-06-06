import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers/AuthReducer";

export const AuthContext=createContext();

const useAuth=()=>useContext(AuthContext);

const AuthProvider=({children})=>
{
    const token=localStorage.getItem("Token");

    const [stateAuth, dispatchAuth] = useReducer(authReducer, {
        userDetails: [],
        token: token ?? null,
        isAuth: token ? true : false,
      });


      return (
        <AuthContext.Provider value={{ stateAuth, dispatchAuth }}>
          {children}
        </AuthContext.Provider>
      );
}
export { useAuth, AuthProvider };