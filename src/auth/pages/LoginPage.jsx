import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/", {
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
