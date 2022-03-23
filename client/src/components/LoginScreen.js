import logo from "../img/logo.png";
import LoginForm from "./LoginForm";

function LoginScreen(props) {
  return (
    <div>
      <div class="logo">
        {" "}
        <img src={logo} alt="" />{" "}
      </div>
      <LoginForm />
    </div>
  );
}

export default LoginScreen;
