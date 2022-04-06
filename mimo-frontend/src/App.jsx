import { Route, Router, Routes } from "react-router-dom";
import React, { Component, useEffect, useState, useContext } from "react";
import { Navigate } from "react-router";
import Layout from "./components/Layout/Layout";

import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import Review from "./components/Review/Review";
import Camera from "./components/Modeling/camera";
import Simulate from "./components/Modeling/Simulate";
import Mainpages from "./pages/Mainpages";

import AuthContext from "./store/auth-context";

import Home from "./components/Home/Home";

import "./App.css";
import ProfileForm from "./components/Profile/ProfileForm";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="center_app">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {!authCtx.isLoggedIn && (
            <Route path="/auth" element={<AuthPage />}></Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/profile" element={<UserProfile />}></Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/review" element={<Review />}></Route>
          )}
          <Route path="/main" element={<Mainpages />}></Route>
          {authCtx.isLoggedIn && (
            <Route path="/camera" element={<Camera />}></Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/simulate" element={<Simulate />}></Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/changepassword" element={<ProfileForm />}></Route>
          )}{" "}
          <Route path="*" element={<Navigate replace to="/main" />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
