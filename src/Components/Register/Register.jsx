import { useState, useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { Link } from "react-router-dom";
import { RegisterWrapper, HeaderWrapper, RegBody } from "./RegisterStyles";
import registerAvatar from "../../assets/images/Avatar.png";


function Register() {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 5) {
      setPasswordError("Password must be at least 5 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    // Reset password error if validation passed
    setPasswordError("");

    registerUser(name, email, password);
  };

  return (
    <RegisterWrapper>
      <HeaderWrapper>
        <div>
          <img className="logo" src='' alt="Auth" />
        </div>
        <div>
          <button>Login</button>
        </div>
      </HeaderWrapper>

      <RegBody>
        <div className="prompt">
          <h3>
            Create an <span>account</span>
          </h3>
          <div className="avatar-container">
            <img src={registerAvatar} alt="prompt" />
          </div>
          <p className="login-prompt">
            Not creating an Account? <br /> You can{" "}
            <Link to="/login">Login</Link> here
          </p>
        </div>
        <div className="action">
          <p className="or">Complete the form below to create your account</p>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>User name</label>
              <input
                type="text"
                name="first name"
                placeholder="Enter first name"
                value={name}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label>Email</label>
              <input
                type="text"
                name="first name"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="error">{passwordError}</p>}
            </div>
            <div className="input-container">
              <label>Confirm password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {passwordError && <p className="error">{passwordError}</p>}
            </div>
            <input type="submit" value="Submit" />
          </form>
          <p className="login-prompt">
            Not creating an Account? <br /> You can{" "}
            <Link to="/login">Login</Link> here
          </p>
        </div>
      </RegBody>
    </RegisterWrapper>

  );
}

export default Register;
