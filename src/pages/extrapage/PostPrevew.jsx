import React, { useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { PostContext } from "../../contextapi/Postscontext";

import { AiOutlineFire } from "react-icons/ai"; // Icon for likes
import { HiDotsVertical } from "react-icons/hi";

import { FaBackspace } from "react-icons/fa";
import { VscScreenFull } from "react-icons/vsc";

import ActionBoxContent from "../../components/actionsbox/ActionBoxContent";
import Commentsfulllist from "../../components/comments/Commentsfulllist";

import { UserContext } from "../../contextapi/Usercontext";

const PostPrevew = () => {
  const { userData } = useContext(UserContext);

  // user id data
  const { postid } = useParams();
  const { postData } = useContext(PostContext);
  const Foundpost = postData.find((item) => item.post_id === postid);

  const [StatusActionBox, setStatusActionBox] = useState(false);
  const handleActionBox = () => {
    StatusActionBox == false
      ? setStatusActionBox(true)
      : setStatusActionBox(false);
  };

  return (
    <div className="Pagearea">
      <div className=" mt-0  sm:mt-4  flex flex-col md:flex-row items-start justify-between   gap-6">
        <div className="leftArea w-full md:w-8/12 h-[calc(100vh_-_110px)] relative flex items-center bg-gray-300 rounded-none sm:rounded-lg overflow-hidden justify-center">
          <div className=" absolute z-30 left-0 top-0 flex items-center justify-center  gap-3 p-3">
            <button className="w-10 h-10 p-1 flex items-center justify-center bg-[#0000002d]  rounded-full shadow-md transition duration-300 ease-in-out">
              <FaBackspace className="text-2xl text-white text-shadow-md" />
            </button>

            <button className="w-10 h-10 p-1 flex items-center justify-center bg-[#0000002d]  rounded-full shadow-md transition duration-300 ease-in-out">
              <VscScreenFull className="text-2xl text-white text-shadow-md" />
            </button>
          </div>
          <img
            className=" max-w-full max-h-full relative z-20  object-contain "
            src={Foundpost.media}
            alt=""
            loading="lazy"
          />
          <img
            className=" absolute z[-10] max-w-full max-h-full  object-contain blur-xl scale-200 "
            src={Foundpost.media}
            loading="lazy"
          />
        </div>
        {/* Right side area */}
        <div className=" w-full md:w-4/12 hidden lg:block ">
          <div className=" p-4 h-[calc(100vh_-_110px)] bg-white rounded-lg flex flex-col justify-between">
            <div className=" shrink-0">
              {userData.map((user, index) => {
                if (user.userid === Foundpost.userid) {
                  return (
                    <div
                      key={index}
                      className="Profile flex items-center justify-between bg-gray-100 gap-2 px-3 py-2 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <NavLink
                          to={`/profile/${user.userid}`}
                          className=" w-12 h-12 rounded-full border-df border flex items-center justify-center overflow-hidden"
                        >
                          {" "}
                          <img
                            src={user.profileimage}
                            loading="lazy"
                            alt=""
                            className="w-full h-full object-cover rounded-full overflow-hidden"
                          />
                        </NavLink>
                        <div>
                          <NavLink
                            to={`/profile/${user.userid}`}
                            className="font-semibold text-gray-700"
                          >
                            {user.name}
                          </NavLink>
                          <span className="block text-sm text-gray-600">
                            {user.bio}
                          </span>
                        </div>
                      </div>
                      <div className="">
                        <button className="text-gray-500 hover:text-gray-700">
                          <HiDotsVertical
                            onClick={handleActionBox}
                            className="text-xl"
                          />
                        </button>
                        <ActionBoxContent StatusActionBox={StatusActionBox} />
                      </div>
                    </div>
                  );
                }
              })}
              <p className="text-sm font-medium mt-4 px-2 text-gray-600 ">
                {Foundpost.text}
              </p>
            </div>
            {/* Comments section */}
            <div className=" mt-4 h-full flex flex-col  overflow-hidden">
              <b className="block shrink-0 py-2 border-b border-df ">
                {" "}
                Comments
              </b>
              <div className=" Comments  h-full overflow-y-auto ScrollSystem  ">
                {/* Looping through comments */}

                {Foundpost.comments &&
                  Foundpost.comments.map((comm, index) => {
                    return <Commentsfulllist comm={comm} key={index} />;
                  })}
              </div>
            </div>

            <div className="  shrink-0 bg-white pt-2  ">
              {/* Comment input section */}

              <div className=" flex items-center gap-2  py-2 px-3 rounded-lg bg-gray-100">
                <div className=" w-10 h-10 rounded-full shrink-0 border-df border flex items-center justify-center">
                  {" "}
                  <img
                    src="/post/2.jpg"
                    loading="lazy"
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="w-full px-4 py-2  rounded-full bg-gray-100 focus:outline-none "
                />
                <button>
                  <AiOutlineFire className="text-lg text-[#555]" />{" "}
                  {/* Send button */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPrevew;
