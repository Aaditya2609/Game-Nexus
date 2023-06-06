import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";

function RequiresAuth() {
  const { stateAuth } = useAuth();
  const { isAuth } = stateAuth;

  const location = useLocation();

  useEffect(() => {
    !isAuth &&
      toast.warning("Login Required", {
        position: "bottom-center",
        autoClose: 2000,
      });
  }, []);

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
}

export default RequiresAuth;