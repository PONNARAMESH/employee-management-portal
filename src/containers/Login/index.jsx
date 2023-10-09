import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  /* used for navigation or routing */
  const navigate = useNavigate();

  return (
    <div className="loginPage">
      <h1>LogIn page</h1>
      <button onClick={() => navigate("/dashboard")}>go to dashboard</button>
    </div>
  );
}

export default LoginPage;
