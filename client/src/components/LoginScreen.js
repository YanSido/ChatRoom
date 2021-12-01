import logo from "../img/logo.png";

function Login(props) {
  return (
    <div class="wrapper">
      <div class="logo">
        {" "}
        <img src={logo} alt="" />{" "}
      </div>
      <div class="text-center mt-4 name"> Sido </div>
      <form class="p-3 mt-3">
        <div class="form-field d-flex align-items-center">
          {" "}
          <span class="far fa-user"></span>{" "}
          <input type="text" name="userName" id="userName" placeholder="Username" />{" "}
        </div>
        <button class="btn mt-3">Login</button>
      </form>
    </div>
  );
}

export default Login;
