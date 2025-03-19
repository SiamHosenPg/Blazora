import React, { createContext, useContext } from "react";
import newsData from "../data/news/News.json";

// Create Context
const NewsdataContext = createContext();

// Create Provider component
const NewsProvider = ({ children }) => {
  return (
    <NewsdataContext.Provider value={{ newsData }}>
      {children}
    </NewsdataContext.Provider>
  );
};

const NewsContext = () => useContext(NewsdataContext);
export { NewsContext, NewsProvider };
