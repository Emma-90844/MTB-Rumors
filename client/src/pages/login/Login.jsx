import axios from "axios";
import { useContext, useRef} from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

function Login() {

  const userRef = useRef();
  const passwordRef  = useRef();
  const { dispatch, isFetching} = useContext(Context);


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:'LOGIN_START'})
    try{
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({type:'LOGIN_SUCCESS',payload: res.data });

    }catch(error){
      dispatch({type:'LOGIN_FAILURE'});
    }
  }


  return (
    <div>
      <div className="login" onSubmit={handleSubmit}>
        <div className="LoginBanner">
          <p>Sign in MBT Rumours</p>
        </div>
        <form className="loginForm">
          <span className="loginFormTitle">MTB Rumours</span>
          <span className="formSignin">Log in</span>
          <label>Email or username</label>
          <input type="text" placeholder="Enter your Email..." ref={userRef}  autoFocus={true}/>
          <label>Password</label>
          <input type="password" ref={passwordRef}  placeholder="Enter password.." />
          <p className="formForgotPw">Forgotten username or password?</p>
          
          
          <div className="formCookies">
            <span>
              <input className="checkBox" type="checkbox" />
            </span>
            <span>Remember my username Privacy & Cookies Notice</span>
          </div>
          
          
          <button className="loginButton" type='submit' disabled={isFetching}>Login</button>
          <span className="newText">New to MTB?</span>
          <p>
            You'll need a MTB iD before you can access some of our services.
          </p>
          <p>
            If you have signed up for another MTB online service you already
            have one.
          </p>
          <button className="registerButton"><Link className="link" to="/signup">Sign Up</Link></button>
         
        </form>
        <hr className="loginHr"/>
      
        
      </div>
    </div>
  );
}

export default Login;
