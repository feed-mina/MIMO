import { useState, useRef, useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";

import { authService } from "../../fbase";
import googlelogin from "../../Assets/img/google.png";

const AuthForm = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDJpD_iAt5tXxBHYoyMQUfZ5hnfSXW56lM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDJpD_iAt5tXxBHYoyMQUfZ5hnfSXW56lM";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        navigate("/main");
        // Navigate({ replace: "/main" });
        // navigate("/main", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });

    console.log(enteredEmail);
    console.log(authCtx);
  };

  const onSocialClick = async (event) => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    await signInWithPopup(authService, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>{" "}
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>{" "}
        <div className={classes.google}>
          <button className={classes.button} onClick={onSocialClick}>
            <img src={googlelogin} alt="구글로그인" />
          </button>
        </div>{" "}
        <div className={classes.been}></div>
      </form>
    </section>
  );
};

export default AuthForm;
