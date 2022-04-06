import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import { authService } from "../../../fbase";
import home from "../../../Assets/img/home2.png";
import review from "../../../Assets/img/review.png";
import camera from "../../../Assets/img/camera.png";
import mypage from "../../../Assets/img/mypage2.png";
import classes from "./FooterNav.module.css";

function FooterNav() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const loggoutHandler = () => {
    authCtx.logout();
  };

  const onLogoutClick = () => {
    authService.signOut();
  };
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <nav>
          <ul>
            {isLoggedIn && (
              <li>
                <Link to="/profile">
                  {" "}
                  <img className={classes.nav_icon} src={mypage} />
                </Link>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <Link to="/review">
                  {" "}
                  <img className={classes.nav_icon} src={review} />
                </Link>
              </li>
            )}
            <li>
              <Link to="/main">
                <img className={classes.nav_icon} src={home} />
              </Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link to="/camera">
                  {" "}
                  <img className={classes.nav_icon} src={camera} />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <footer className={classes.footerbar}> </footer>
    </div>
  );
}

export default FooterNav;
