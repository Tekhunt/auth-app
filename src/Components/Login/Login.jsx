import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginWrapper, HeaderWrapper, RegBody } from "./LoginStyles";
import riteshop from "../../assets/icons/riteshop.svg";
import loginAvatar from "../../assets/images/loginAvatar.png";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(AuthContext);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password).then(
        () => {
        //   navigate("/");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const authUser = JSON.parse(localStorage.getItem('user') || '{}')

  return (
    <>
      <LoginWrapper>
        <HeaderWrapper>
          <div>
            <img className="logo" src={riteshop} alt="riteshop" />
          </div>
          <div>
            <button>Register</button>
          </div>
        </HeaderWrapper>

        <RegBody>
          <div className="action">
            <p className="or">Login with your credentials below</p>
            <form onSubmit={handleLogin}>
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
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>

          <div className="prompt">
            <h1>
              <span>Log In</span>
            </h1>
            <div className="avatar-container">
              <img src={loginAvatar} alt="prompt" />
            </div>
            <p className="login-prompt">
              You do not have an Account? <br /> You can{" "}
              <Link to="/register">Sign up</Link> here
            </p>
          </div>
        </RegBody>
      </LoginWrapper>
    </>
  );
};