import React, { useContext } from "react";
import { PostContext } from "../../contextapi/Postscontext"; // Importing PostContext to access post data
import { UserContext } from "../../contextapi/Usercontext"; // Importing UserContext to access user data
import { BsThreeDotsVertical } from "react-icons/bs"; // Icon for menu options
import { AiOutlineFire } from "react-icons/ai"; // Icon for likes
import { AiFillFire } from "react-icons/ai"; // Another fire icon (not used here)
import { FaRegComments } from "react-icons/fa6"; // Icon for comments
import { MdBookmarkBorder } from "react-icons/md"; // Icon for bookmark
import { LuSendHorizontal } from "react-icons/lu"; // Icon for send button
import { MdOutlinePublic } from "react-icons/md"; // Icon for public visibility
import { MdOutlineLocationOn } from "react-icons/md"; // Icon for location
import "./Newsfeed.css"; // Importing CSS for styling
import { NavLink } from "react-router-dom";

const Newsfeed = () => {
  const { postData } = useContext(PostContext); // Accessing post data from PostContext
  const { userData } = useContext(UserContext); // Accessing user data from UserContext

  return (
    <div className="Newsfeed">
      <ul>
        {/* Looping through postData to display each post */}
        {postData &&
          postData.map((item, index) => (
            <li className="bg-white rounded-lg px-5 py-3 pt-5 mb-5" key={index}>
              {/* Post header with user info and menu button */}
              <div className="flex items-center justify-between ">
                <div className="left flex items-center justify-start gap-2">
                  <img
                    className="w-[45px] h-[45px] border-df border rounded-full"
                    src="/profile/2.jpg" // Placeholder profile image
                    alt=""
                  />
                  <div className="text">
                    <div className="flex gap-3  items-center">
                      <NavLink
                        to={`/profile/${item.userid}`}
                        className="font-semibold"
                      >
                        Siam Hosesn
                      </NavLink>{" "}
                      {/* Hardcoded user name */}
                      <span className="text-sm flex items-center">
                        <MdOutlineLocationOn />
                        {item.location} {/* Post location */}
                      </span>
                    </div>
                    <span className="text-[13px] text-[#777] flex gap-2 items-center">
                      {item.post_date} {/* Post date */}
                      <MdOutlinePublic /> {/* Public visibility icon */}
                    </span>
                  </div>
                </div>
                <button>
                  <BsThreeDotsVertical className="text-xl" />{" "}
                  {/* Menu button */}
                </button>
              </div>

              {/* Post text content */}
              <div className="posttext mt-4">{item.text}</div>

              {/* Post media (image) */}
              <NavLink
                to={`/post/${item.post_id}`}
                className="media w-full h-auto"
              >
                <img
                  className="rounded-lg mt-2 w-full h-auto max-h-[700px]"
                  src={item.media} // Media URL from post data
                  alt=""
                />
              </NavLink>

              {/* Engagement section (likes, comments, shares) */}
              {item.engagement.map((count, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between mt-4 pb-4 border-t border-df pt-4 "
                  >
                    <div className="left flex items-center justify-start gap-4">
                      {/* Likes */}
                      <div className="flex gap-1 items-center">
                        <AiOutlineFire className="text-2xl mr-1" />
                        {count.like_count} {/* Like count */}
                        <div className="text-sm">Like</div>
                      </div>
                      {/* Comments */}
                      <div className="flex gap-1 items-center">
                        <FaRegComments className="text-2xl mr-1" />
                        {count.comments_count} {/* Comments count */}
                        <div className="text-sm">Comments</div>
                      </div>
                      {/* Shares */}
                      <div className="flex gap-1 items-center">
                        {count.shares_count} {/* Shares count */}
                        <div className="text-sm">Shear</div>{" "}
                        {/* Typo: Should be "Share" */}
                      </div>
                    </div>
                    <button>
                      <MdBookmarkBorder className="text-2xl" />{" "}
                      {/* Bookmark button */}
                    </button>
                  </div>
                );
              })}

              {/* Input for adding a comment */}
              <div className="CommentsInput flex gap-3 mt-3 items-center ">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src="/profile/2.jpg" // Placeholder profile image
                  alt=""
                />
                <input
                  type="text"
                  className=" bg-[#f5f5f5] rounded-full px-5 py-3 text-sm w-[300px]"
                  placeholder="What's your mind?" // Placeholder text
                />
                <button>
                  <LuSendHorizontal className="text-lg text-[#555]" />{" "}
                  {/* Send button */}
                </button>
              </div>

              {/* Comments section */}
              <div className=" mt-5">
                <b> Comments</b>
                <div className=" Comments">
                  {/* Looping through comments */}
                  {item.comments &&
                    item.comments.map((comm, index) => {
                      return (
                        <div
                          className=" commentsitems flex items-start gap-2 mt-3 border-b border-df pb-3"
                          key={index}
                        >
                          {/* Commenter profile image */}
                          <div className="image">
                            <img
                              src="profile/2.jpg" // Placeholder profile image
                              className="w-[40px] h-[40px] bg-blue-50 rounded-full"
                              alt=""
                            />
                          </div>
                          {/* Comment text */}
                          <div className="texts max-w-[370px] bg-[#f3f3f3] px-5 py-3 rounded-xl rounded-tl-none">
                            <b className="block font-medium text-sm">
                              Siam Hosen {/* Hardcoded commenter name */}
                            </b>
                            <div className="flex items-start gap-2">
                              <span className="block rounded-xl text-sm mt-1">
                                {comm.comment_text} {/* Comment text */}
                              </span>
                            </div>
                          </div>
                          {/* Like and reply buttons for comments */}
                          <div className="flex items-center mt-3 gap-3">
                            <button className=" flex ">
                              <AiOutlineFire className="text-lg" />{" "}
                              {/* Like button */}
                            </button>
                            <button className="text-sm text-[#666]">
                              Reply {/* Reply button */}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Newsfeed;
