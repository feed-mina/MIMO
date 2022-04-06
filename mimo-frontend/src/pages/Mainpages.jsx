import MainList from "../components/Main/MainList";
import React, { Component, useEffect, useState } from "react";

import StartingPageContent from "../components/StartingPage/StartingPageContent";
const LIMIT = 6;
const Mainpages = () => {
  const [items, setItems] = useState([]);

  return <MainList items={items} />;
};

export default Mainpages;
