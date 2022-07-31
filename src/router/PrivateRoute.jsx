import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname } = useLocation();
  localStorage.setItem("path", pathname);
  return logged ? children : <Navigate to={"/login"} />;
};
