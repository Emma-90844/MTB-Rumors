import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

function Topbar() {
  const { user, dispatch } = useContext(Context);

  const PF = "http://localhost:5000/images/"
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };


  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to='/settings'>
            <img className="topImg" src={PF + user.profilePic} alt={`Welcome ${user.username}`}/>
          </Link>
        ) : (
          <>
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/signup">
                  SIGN UP
                </Link>
              </li>
            </ul>
          </>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default Topbar;