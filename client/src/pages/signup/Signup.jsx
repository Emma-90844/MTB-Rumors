import { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)

  // SUBMIT form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post("/auth/signup", {
        username,
        email,
        password,
      });
      console.log(res);
      // IF SIGNUP DATA present redirect to login
      res.data && window.location.replace('/login')
      
    } catch (err) {
     setError(true)
    }
  };
  return (
    <div>
      <div className="signup">
        <div className="signupBanner">
          <p>Sign Up MBT Rumours</p>
        </div>
        <form className="signupForm" onSubmit={handleSubmit}>
          <span className="signupFormTitle">MTB Rumours</span>

          <span className="formSignup">Sign Up</span>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your Username..."
            onChange={(e) => setUsername(e.target.value)}
            autoFocus={true}
          />

          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your Email..."
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
          />
          {/* 
          <label> Confirm Password</label>
          <input type="password" placeholder="Confirm password.." /> */}

          <button type="submit" className="Button">
            Sign Up
          </button>
          <span className="newText">Already Signed?</span>
          <p>
            You'll need a MTB iD before you can access some of our services.
          </p>
          <p>
            If you have signed up for another Sky online service you already
            have one.
          </p>
          <button className="signupButton">
            <Link className="link" to="/login">
              Log In
            </Link>
          </button>
          {error && <span className="errMessage">Something has gone wrong...</span>}
        </form>
      </div>
    </div>
  );
}

export default Signup;
