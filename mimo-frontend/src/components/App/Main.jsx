import { Route, Router, Routes } from "react-router-dom";
import React, { Component, useEffect, useState, useContext } from "react";
import { Navigate } from "react-router";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import MainList from "./components/Main/MainList";
import Review from "./components/Review/Review";
import { getReviews } from "./api";
import Mainpages from "./pages/Mainpages";
import AuthContext from "./store/auth-context";

const LIMIT = 6;
function App() {
  const authCtx = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const handledelete = (id) => {
    const nextReviews = reviews.filter((review) => review.id !== id);
    setReviews(nextReviews);
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await getReviews(options);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
    const { paging, reviews } = result;
    if (options.offset === 0) {
      setReviews(reviews);
    } else {
      setReviews((prevReviews) => [...prevReviews, ...reviews]);
    }
    setOffset(options.offset + options.limit);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = async () => {
    await handleLoad({ order, offset, limit: LIMIT });
  };
  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth" element={<AuthPage />}></Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/profile" element={<UserProfile />}></Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/review" element={<Review />}></Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/main" element={<Mainpages />}></Route>
        )}{" "}
        <Route path="*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
