import React from "react";
import Newsfeed from "../components/newsfeed/Newsfeed";
import Storybox from "../components/storys/Storybox";

const Home = () => {
  return (
    <div>
      <Storybox />
      <Newsfeed />
    </div>
  );
};

export default Home;
