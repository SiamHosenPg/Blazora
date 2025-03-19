import React, { createContext } from "react";
import postData from "../data/post/Post.json";

// Create Context
const PostContext = createContext();

// Create Provider component
const PostProvider = ({ children }) => {
  return (
    <PostContext.Provider value={{ postData }}>{children}</PostContext.Provider>
  );
};

export { PostContext, PostProvider };
