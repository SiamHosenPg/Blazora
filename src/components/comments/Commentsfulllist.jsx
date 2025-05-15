import React, { useContext } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsReply } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai"; // Icon for likes
import { UserContext } from "../../contextapi/Usercontext";
import { NavLink } from "react-router-dom";

const Commentsfulllist = ({ comm }) => {
  const { userData } = useContext(UserContext); // Access user data from context
  return (
    <div className="">
      {userData &&
        userData.map((user, index) => {
          if (user.userid === comm.userid) {
            return (
              <div
                key={index}
                className=" commentsitems flex items-start gap-2 mt-3 overflow-auto  pr-2 "
              >
                {/* Commenter profile image */}
                <NavLink
                  to={`/profile/${user.userid}`}
                  className="image w-10 h-10 rounded-full shrink-0 bg-gray-100"
                >
                  <img
                    src={user.profileimage} // Placeholder profile image
                    className=" bg-blue-50 w-full h-full object-cover rounded-full"
                    alt=""
                  />
                </NavLink>
                {/* Comment text */}
                <div className="texts max-w-[370px] text-gray-600 bg-[#f3f3f3] px-2 py-2 rounded-xl rounded-tl-none">
                  <div className="font-semibold text-sm flex items-center gap-2 justify-between">
                    <h4 className="pl-2">{user.name}</h4>{" "}
                    {/* Hardcoded commenter name */}
                    <HiDotsHorizontal />
                  </div>
                  <div className="flex items-start gap-2">
                    <p className="block text-gray-600 rounded-xl text-sm mt-1 px-2">
                      {comm.comment_text} {/* Comment text */}
                    </p>
                  </div>
                </div>
                {/* Like and reply buttons for comments */}
                <div className="flex items-center mt-3 gap-3">
                  <button className=" flex text-gray-600 hover:text-gray-800 ">
                    <AiOutlineFire className="text-lg" /> {/* Like button */}
                  </button>
                  <button className="text-sm text-gray-600 hover:text-gray-800">
                    <BsReply className="text-lg" /> {/* Reply button */}
                  </button>
                </div>
              </div>
            );
          }
          return null; // Return null if no matching user is found
        })}
    </div>
  );
};

export default Commentsfulllist;
