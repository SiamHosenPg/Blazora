import React, { useContext, useState } from "react";
import { UserContext } from "../../contextapi/Usercontext"; // Importing UserContext to access user data
import { BsThreeDotsVertical } from "react-icons/bs"; // Icon for menu options
import { AiOutlineFire } from "react-icons/ai"; // Icon for likes
import { AiFillFire } from "react-icons/ai"; // Another fire icon (not used here)
import { MdBookmarkBorder } from "react-icons/md"; // Icon for bookmark
import { LuSendHorizontal } from "react-icons/lu"; // Icon for send button
import { MdOutlinePublic } from "react-icons/md"; // Icon for public visibility
import { MdOutlineLocationOn } from "react-icons/md"; // Icon for location
import { NavLink } from "react-router-dom";

const Postbox = ({ item }) => {
  // Accessing post data from PostContext
  const { userData } = useContext(UserContext); // Accessing user data from UserContext
  // Accessing user data from UserContext
  const [showComments, setShowComments] = useState({});
  const HandelComments = (post_id) => {
    setShowComments((prev) => ({
      ...prev,
      [post_id]: !prev[post_id],
    }));
  }; // State to manage comment visibility

  return (
    <li className="bg-white rounded-none sm:rounded-lg   py-2 sm:py-3 pt-4 sm:pt-5 mb-2 sm:mb-4">
      {/* Post header with user info and menu button */}
      {userData &&
        userData.map((user, index) => {
          if (user.userid === item.userid) {
            return (
              <div
                key={index}
                className="flex items-center px-4 sm:px-6 justify-between "
              >
                <div className="left   flex items-center justify-start gap-2 overflow-hidden">
                  <div className="w-10 h-10 bg-red-900 sm:w-12 sm:h-12 border-df border shrink-0  rounded-full overflow-hidden ">
                    <img
                      loading="lazy"
                      className=" block w-full  h-full object-cover   "
                      src={user.profileimage} // Placeholder profile image
                      alt={user.name}
                    />
                  </div>
                  <div className="text">
                    <div className="flex gap-2  items-center">
                      <NavLink
                        to={`/profile/${item.userid}`}
                        className="font-semibold block whitespace-nowrap overflow-hidden text-ellipsis"
                      >
                        {user.name} {/* Hardcoded user name */}
                      </NavLink>{" "}
                      {/* Hardcoded user name */}
                      <span className="text-sm flex items-center w-fit text-gray-600">
                        <MdOutlineLocationOn />
                        <span className="max-w-[130px] text-[12px] sm:text-[13px] sm:max-w-fit text-ellipsis whitespace-nowrap overflow-hidden">
                          {item.location}
                        </span>{" "}
                        {/* Post location */}
                      </span>
                    </div>
                    <span className="text-[12px] sm:text-[13px] text-[#777] flex gap-2 items-center">
                      {item.post_date} {/* Post date */}
                      <MdOutlinePublic /> {/* Public visibility icon */}
                    </span>
                  </div>
                </div>
                <button>
                  <BsThreeDotsVertical className="text-xl text-gray-600" />{" "}
                  {/* Menu button */}
                </button>
              </div>
            );
          }
        })}
      {/* Post text content */}
      <div className="posttext text-sm font-medium text-gray-600 mt-4 px-4 sm:px-6">
        {item.text}
      </div>

      {/* Post media (image) */}
      <NavLink
        to={`/post/${item.post_id}`}
        className="media block w-full px-0 sm:px-6 h-auto overflow-hidden"
      >
        <img
          loading="lazy"
          className=" rounded-none sm:rounded-lg mt-2 w-full h-auto max-h-[700px]"
          src={item.media} // Media URL from post data
        />
      </NavLink>

      {/* Engagement section (likes, comments, shares) */}
      {item.engagement.map((count, index) => {
        return (
          <div
            key={index}
            className="px-4 sm:px-6 flex items-center justify-between mt-4 pb-3   "
          >
            <div className="left flex items-center justify-start gap-4">
              {/* Likes */}
              <div className="flex gap-1 items-center cursor-pointer">
                <AiOutlineFire className="text-xl sm:text-2xl " />
                <span className="font-semibold">{count.like_count}</span>{" "}
                {/* Like count */}
                <div className="text-sm text-gray-600">Hot</div>
              </div>
              {/* Comments */}
              <div
                onClick={() => HandelComments(item.post_id)}
                className="flex gap-1 items-center cursor-pointer"
              >
                <span className="font-semibold">{count.comments_count}</span>{" "}
                {/* Comments count */}
                <div className="text-sm text-gray-600">Comments</div>
              </div>
              {/* Shares */}
              <div className="flex gap-1 items-center cursor-pointer">
                <span className="font-semibold">{count.shares_count}</span>{" "}
                {/* Shares count */}
                <div className="text-sm text-gray-600">Shear</div>{" "}
                {/* Typo: Should be "Share" */}
              </div>
            </div>
            <button>
              <MdBookmarkBorder className="text-xl text-gray-600" />{" "}
              {/* Bookmark button */}
            </button>
          </div>
        );
      })}

      {showComments[item.post_id] && (
        <div className=" px-4 sm:px-6">
          {/* Input for adding a comment */}
          <div className="CommentsInput flex gap-3 mt-2 sm:mt-3 items-center  ">
            <img
              className="w-9 sm:w-10 h-9 sm:h-10 shrink-0 rounded-full"
              src="/profile/2.jpg" // Placeholder profile image
              alt=""
            />
            <input
              type="text"
              className=" bg-[#f5f5f5] rounded-full px-5 py-2 sm:py-2 text-sm w-full outline-none"
              placeholder="What's your mind?" // Placeholder text
            />
            <button className="bg-gray-100 shrink-0  rounded-full w-9 h-9  flex items-center justify-center">
              <LuSendHorizontal className="text-lg text-[#555]" />{" "}
              {/* Send button */}
            </button>
          </div>

          {/* Comments section */}

          <div className=" mt-5">
            <b> Comments</b>
            <div className=" Comments pb-3">
              {/* Looping through comments */}
              {item.comments &&
                item.comments.map((comm, index) => {
                  // Displaying each comment
                  return (
                    <div className="" key={index}>
                      {userData &&
                        userData.map((user, index) => {
                          if (user.userid === comm.userid) {
                            return (
                              <div
                                className=" commentsitems flex items-start gap-2 mt-2 "
                                key={index}
                              >
                                {/* Commenter profile image */}
                                <div className="image w-8 h-8 shink">
                                  <img
                                    loading="lazy"
                                    src={user.profileimage} // Placeholder profile image
                                    className=" bg-blue-50 w-full h-full rounded-full"
                                    alt=""
                                  />
                                </div>
                                {/* Comment text */}
                                <div className="texts max-w-[80%] bg-[#f3f3f3] px-4 py-2 rounded-xl rounded-tl-none">
                                  <b className="block font-semibold text-sm">
                                    {user.name} {/* Hardcoded commenter name */}
                                  </b>
                                  <div className="flex items-start gap-2">
                                    <span className="block rounded-xl text-sm text-gray-600 mt-1">
                                      {comm.comment_text} {/* Comment text */}
                                    </span>
                                  </div>
                                </div>
                                {/* Like and reply buttons for comments */}
                                <div className="flex items-center mt-2 gap-3">
                                  <button className=" flex ">
                                    <AiOutlineFire className="text-lg" />{" "}
                                    {/* Like button */}
                                  </button>
                                </div>
                              </div>
                            );
                          }
                        })}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default Postbox;
