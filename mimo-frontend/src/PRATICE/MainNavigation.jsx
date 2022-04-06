import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";
import Logout from "../Auth/Logout";
import { authService } from "../../fbase";
import basket from "../../Assets/img/shopping_basket.png";
import logo from "../../Assets/img/MIMO_logo.png";

const MainNavigation = () => {
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
        <nav className={classes.nav}>
          <Link to="/">
            <div className={classes.logo}>
              <img className={classes.logoimg} src={logo} />
            </div>
          </Link>{" "}
          <NavLink to="/cart">
            <div className={classes.first_nav}>
              <img className={classes.basket} src={basket} />{" "}
            </div>
          </NavLink>
        </nav>
        <ul>
          {isLoggedIn && (
            <li>
              {/* <button onClick={onLogoutClick}>Logout</button> */}
              <button onClick={loggoutHandler}>Logout</button>
            </li>
          )}
        </ul>{" "}
      </header>
    </div>
  );
};

export default MainNavigation;
