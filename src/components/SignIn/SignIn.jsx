import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import "./style.css";
import form from "../../utils/signInForm";
import { SignInStore } from "../../store/SignInStore";

const SignIn = observer(() => {
  return (
    <div className="signin-page">
      <h2>Sign in</h2>
      <div className="signin-container">
        <input
          className="input"
          placeholder="Email"
          onChange={(e) => (form.$("email").value = e.target.value)}
          {...form.$("email").bind()}
        />
        <p className="p-error">{form.$("email").error}</p>
        <input
          className="input"
          placeholder="Password"
          type="password"
          onChange={(e) => (form.$("password").value = e.target.value)}
          {...form.$("password").bind()}
        />
        <p className="p-error">{form.$("password").error}</p>
        <Link to="/">
          <button className="submit-btn" onClick={() => SignInStore.onSignIn()}>
            Sign in
          </button>
        </Link>
      </div>
      <p>
        Not registered?{" "}
        <Link to="/register" className="text">
          Create an account
        </Link>
      </p>
    </div>
  );
});

export default SignIn;
