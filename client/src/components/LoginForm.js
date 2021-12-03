import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login(props) {
  const [username, setUsername] = useState("");

  return (
    <div class="wrapper">
      <div class="logo">
        {" "}
        <img src={logo} alt="" />{" "}
      </div>
      <div class="name"> Sido </div>
      <div class="form-field d-flex align-items-center">
        {" "}
        <span class="far fa-user"></span>{" "}
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          name="userName"
          id="userName"
          placeholder="Username"
        />{" "}
      </div>
      <Link to={`/chat/?username=${username}`}>
        <button class="btn mt-3">Login</button>
      </Link>
    </div>
  );
}

export default Login;
