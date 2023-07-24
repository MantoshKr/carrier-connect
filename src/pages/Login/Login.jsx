import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Signup/Signup.css";
import { ImGoogle } from "react-icons/im";
import userImage from "../../assets/images/user.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    // const email = document.getElementById("email").value;
    // const password = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <div className="main">
        <p className="carrier-connect">CarrierConnect</p>
        {/* <img src={logo} alt="logo" className="ccLogo" /> */}

        <div className="sign-up-form">
          <img src={userImage} alt="user" className="userlogo" />
          <h1>Sign in</h1>
          <p>Stay updated on your professional world</p>

          <hr className="divider" />

          <form onSubmit={handleSubmit}>
            <input
              
              type="email"
              placeholder="Enter your email"
              className="input-box"
              required
            />
            <input
              
              type="password"
              placeholder="Choose your password"
              className="input-box"
              required
              minLength={6}
            />

            {/* <p id='terms' > <span><input type='checkbox' className='checkbox' /> </span>  By clicking Agree & Join, you agree to the CarrierConnect User Agreement, Privacy Policy, and Cookie Policy.</p> */}

            <button type="submit" className="signup-btn">
              Login
            </button>
          </form>

          <div className="or-divider">
            <hr className="divider-line" />
            <span className="or-text">or</span>
            <hr className="divider-line" />
          </div>

          <div className="google-signup">
            <button className="google-btn">
              <span className="google-icon">
                <ImGoogle />
              </span>
              Login with Google
            </button>
          </div>

          <Link to="/Signup">
            <p id="login">Sign Up for CarrierConnect? </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
