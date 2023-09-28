import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { AuthStore } from "../../store/AuthStore";
import { AuthService } from "../../services/AuthService";
import "./style.css";

const SignIn = observer(() => {
  return (
    <div className="signin-page">
      <h2>Sign in</h2>
      <div className="signin-container">
        <input
          className="input"
          placeholder="Email"
          onChange={(e) => {
            AuthStore.setEmail(e.target.value);
          }}
        />
        <input
          className="input"
          placeholder="Password"
          type="password"
          onChange={(e) => AuthStore.setPassword(e.target.value)}
        />
        <Link to="/">
          <button
            className="submit-btn"
            onClick={() =>
              AuthService.signIn(AuthStore.email, AuthStore.password)
            }
          >
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
