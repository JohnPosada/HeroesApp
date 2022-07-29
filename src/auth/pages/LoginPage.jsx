import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const onLogin = () => {
    login("John");
    navigate(localStorage.getItem("path") || "/marvel", {
      replace: true,
    });
  };

  return (
    <>
      <h1>LoginPage</h1>
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </>
  );
};
