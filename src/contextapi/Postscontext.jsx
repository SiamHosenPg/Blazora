import React, { createContext, useState } from "react";
import postData from "../data/post/Post.json";

// Create Context
const PostContext = createContext();

// Create Provider component
const PostProvider = ({ children }) => {
  const [posts] = useState(postData);
  const [searchResults, setSearchResults] = useState([]);

  const searchPosts = (query) => {
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <PostContext.Provider
      value={{ postData, posts, searchPosts, searchResults }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
