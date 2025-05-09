import React, { useContext } from "react";
import { PostContext } from "../contextapi/Postscontext";
import { NavLink } from "react-router-dom";

const Explore = () => {
  const { postData } = useContext(PostContext); // Assuming postData is an array of posts;
  return (
    <div className="Pagearea">
      <div className="columns-3 mt-2 md:mt-4 xl:columns-4 gap-0.5 md:gap-2 xl:gap-4 pb-20 ">
        {postData.map((post, index) => {
          return (
            <NavLink
              to={`/post/${post.post_id}`}
              key={index}
              className="bg-white block mb-1 md:mb-2 xl:mb-4 border border-df"
            >
              <img src={post.media} className=" w-full h-auto " />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
