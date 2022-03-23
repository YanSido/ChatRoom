import { Link } from "react-router-dom";
import { useState } from "react";

function Login(props) {
  const [username, setUsername] = useState("");

  return (
    <div class="wrapper">
      <label id="username-label">Enter Username:</label>
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
