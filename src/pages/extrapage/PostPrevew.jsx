import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../../contextapi/Postscontext";

import { AiOutlineFire } from "react-icons/ai"; // Icon for likes
import { HiDotsVertical, HiDotsHorizontal } from "react-icons/hi";

import { BsReply } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai"; // Another fire icon (not used here)
import { FaRegComments } from "react-icons/fa6"; // Icon for comments
import ActionBoxContent from "../../components/actionsbox/ActionBoxContent";

const PostPrevew = () => {
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
          <img
            className=" max-w-full max-h-full relative z-20  object-contain "
            src={Foundpost.media}
            alt=""
          />
          <img
            className=" absolute z[-10] max-w-full max-h-full  object-contain blur-xl scale-200 "
            src={Foundpost.media}
            alt=""
          />
        </div>
        {/* Right side area */}
        <div className=" w-full md:w-4/12 hidden lg:block ">
          <div className=" p-4 h-[calc(100vh_-_110px)] bg-white rounded-lg flex flex-col justify-between">
            <div className=" shrink-0">
              <div className="Profile flex items-center justify-between bg-gray-100 gap-2 px-3 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className=" w-12 h-12 rounded-full border-df border flex items-center justify-center">
                    {" "}
                    <img
                      src="/post/2.jpg"
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">
                      Siam Hossen
                    </div>
                    <span className="block text-sm text-gray-600">
                      Front End Developer
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
              <p className="text-sm font-medium mt-3 px-2 text-gray-600 ">
                {Foundpost.text}
              </p>
            </div>
            {/* Comments section */}
            <div className=" mt-4 h-full flex flex-col  ">
              <b className="block shrink-0 py-2 border-b border-df ">
                {" "}
                Comments
              </b>
              <div className=" Comments  h-full overflow-y-auto">
                {/* Looping through comments */}
                {Foundpost.comments &&
                  Foundpost.comments.map((comm, index) => {
                    return (
                      <div
                        className=" commentsitems flex items-start gap-2 mt-3 overflow-auto "
                        key={index}
                      >
                        {/* Commenter profile image */}
                        <div className="image w-10 h-10 rounded-full shrink-0 bg-gray-100">
                          <img
                            src="profile/2.jpg" // Placeholder profile image
                            className=" bg-blue-50 w-full h-full object-cover rounded-full"
                            alt=""
                          />
                        </div>
                        {/* Comment text */}
                        <div className="texts max-w-[370px] text-gray-600 bg-[#f3f3f3] px-2 py-2 rounded-xl rounded-tl-none">
                          <div className="font-semibold text-sm flex items-center justify-between">
                            <h4 className="pl-2">Siam Hosen</h4>{" "}
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
                            <AiOutlineFire className="text-lg" />{" "}
                            {/* Like button */}
                          </button>
                          <button className="text-sm text-gray-600 hover:text-gray-800">
                            <BsReply className="text-lg" /> {/* Reply button */}
                          </button>
                        </div>
                      </div>
                    );
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
