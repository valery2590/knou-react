import "./Forms.css";
import { useState } from "react";
import Logo from "../logo/Logo";
import { useHistory } from "react-router-dom"
import Button from "../button/Button";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  const body = {
    account: {
      email: email,
      password: password,
    }
  };

  console.log(body);

  const handleLogin = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:3001/api/auth/login", options)
      .then((response) => response.json())
      .then((json) => {
        /* .then(json => console.log('token', json)); */
        localStorage.setItem("token", json.token);
        localStorage.setItem("user", JSON.stringify(json.user)); // history.push(swippage)
        history.replace("/user"); // I don't understand this synatxis
        window.location.reload(false);
      });
  };

  const goToSignUp = () => {
    history.push("/signup")
  }

  return (
    <div className="form">
      <form className="form__container">
        <div className="form_logo">
          <Logo />
        </div>
        <h4 className="form_title">Log in to your account</h4>
        <label className="form_label"> Email </label>
        <input
          className="form_input"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" Email adress"
        />
        <label className="form_label"> Password </label>
        <input
          className="form_input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" Password"
        />
        <div className="button_container">
          <Button
            name="Login"
            alt="Button to acces App"
            onClick={handleLogin}
          />
        </div>
        <div className="form_action">
        <h4 className="form_title">Not a user yet?</h4>
        <div className="button_container">
          <Button
            name="Sign Up"
            alt="Button to Sign Up"
            color="dark"
            onClick={goToSignUp}
          />
        </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;