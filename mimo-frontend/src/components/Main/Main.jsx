import React, { Component, useState, useEffect } from "react";
// import {getBestItems} from '../../api';

import "./Main.css";
import BestItem from "./BestItem";
// const getItems = () => {

// }

const Main = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        "https://mimo-49f6d-default-rtdb.firebaseio.com/itmes"
      ).then();
      const responseData = await response.json();

      const loadedItems = [];
      for (const key in responseData) {
        loadedItems.push({
          id: key,
          title: responseData[key].title,
          price: responseData[key].price,
          content: responseData[key].content,
          imgUrl: responseData[key].imgUrl,
        });
      }
      setItems(loadedItems);
    };
    fetchItems();
  }, []);
  return (
    <div className="App">
      <div className="event_center">
        <img
          className="main_event1"
          src={"https://i.ibb.co/XzCqJ7t/event1.png"}
          alt="event1"
          border="0"
        />
      </div>
      <ul>
        {" "}
        {items.map((item) => {
          return (
            <li>
              <BestItem item={item} />
            </li>
          );
        })}{" "}
      </ul>

      <footer>
        <div className="sixth-nav"></div>
      </footer>
    </div>
  );
};

export default Main;
