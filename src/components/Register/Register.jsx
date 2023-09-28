import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { AuthStore } from "../../store/AuthStore";
import { AuthService } from "../../services/AuthService";
import "./style.css";

const Register = observer(() => {
  return (
    <div className="register-page">
      <h2>Sign up</h2>
      <div className="register-container">
        <input
          className="input-auth"
          placeholder="Username"
          onChange={(e) => {
            AuthStore.setName(e.target.value);
            AuthService.validateName();
          }}
        />
        {AuthStore.nameError && (
          <p className="p-error">{AuthStore.nameError}</p>
        )}
        <input
          className="input-auth"
          placeholder="Email"
          onChange={(e) => {
            AuthStore.setEmail(e.target.value);
            AuthService.validateEmail();
          }}
        />
        {AuthStore.emailError && (
          <p className="p-error">{AuthStore.emailError}</p>
        )}
        <input
          className="input-auth"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            AuthStore.setPassword(e.target.value);
            AuthService.validatePassword();
          }}
        />
        {AuthStore.passwordError && (
          <div>
            <p className="p-error">{AuthStore.passwordError}</p>
            <p className="pass-info">Min 8 characters</p>
          </div>
        )}
        <Link to="/">
          <button
            disabled={!AuthStore.isValid}
            className="submit-btn"
            onClick={() =>
              AuthService.registerUser(
                AuthStore.name,
                AuthStore.email,
                AuthStore.password
              )
            }
          >
            Sign up
          </button>
        </Link>
      </div>
      <p>
        Already registered?{" "}
        <Link to="/signin" className="text">
          Sign in
        </Link>
      </p>
    </div>
  );
});

export default Register;
