import React, { useContext, useState } from "react";
import { PostContext } from "../../contextapi/Postscontext"; // Importing PostContext to access post data
import { UserContext } from "../../contextapi/Usercontext"; // Importing UserContext to access user data

import Postbox from "../post/Postbox";

const Newsfeed = () => {
  const { postData } = useContext(PostContext); // Accessing post data from PostContext
  const { userData } = useContext(UserContext); // Accessing user data from UserContext
  const [showComments, setShowComments] = useState({});
  const HandelComments = (post_id) => {
    setShowComments((prev) => ({
      ...prev,
      [post_id]: !prev[post_id],
    }));
  }; // State to manage comment visibility

  return (
    <div className="Newsfeed">
      <ul>
        {/* Looping through postData to display each post */}
        {postData &&
          postData.map((item, index) => {
            return <Postbox item={item} key={index} />;
          })}
      </ul>
    </div>
  );
};

export default Newsfeed;
