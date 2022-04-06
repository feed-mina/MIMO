import React, { Component, usetState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router";
import mimoMain from "../../Assets/img/MIMO_logo.png";
import intro from "../../Assets/img/intro.png";

function Home(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (props.authenticated) {
      navigate("/main");
    }
  }, []);
  return (
    <div className="home-container">
      <div className="intro">
        {" "}
        <img className="intro" src={intro} alt="mimoMain" />
      </div>
      <div className="home_logo">
        {" "}
        <img className="home_logo" src={mimoMain} alt="mimoMain" />
      </div>
      <div className="home_text">
        가입을 진행할 경우, <b>이용약관</b>과 <b>개인정보 수집 및 이용</b>에
        대해 동의한 것으로 간주됩니다.
      </div>{" "}
    </div>
  );
}

export default Home;
