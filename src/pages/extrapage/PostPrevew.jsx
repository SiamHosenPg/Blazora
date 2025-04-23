import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../../contextapi/Postscontext";

import { AiOutlineFire } from "react-icons/ai"; // Icon for likes
import { AiFillFire } from "react-icons/ai"; // Another fire icon (not used here)
import { FaRegComments } from "react-icons/fa6"; // Icon for comments

const PostPrevew = () => {
  const { postid } = useParams();
  const { postData } = useContext(PostContext);
  const Foundpost = postData.find((item) => item.post_id === postid);
  return (
    <div>
      <div className=" Pagearea  flex flex-col md:flex-row items-start justify-between  gap-6">
        <div className="leftArea w-full md:w-8/12 h-[calc(100vh_-_110px)] flex items-center justify-center">
          <img
            className=" max-w-full max-h-full w-full h-full  object-cover border-1 border-df rounded-lg"
            src={Foundpost.media}
            alt=""
          />
        </div>
        <div className=" w-full md:w-4/12  ">
          <div className=" p-6 h-[calc(100vh_-_110px)] bg-white rounded-lg flex flex-col justify-between">
            <div className=" shrink-0">
              <h3 className="text-lg font-semibold border-b border-df pb-4">
                {Foundpost.text}
              </h3>
              <div className="Profile flex items-center gap-2 mt-4">
                <div className=" w-12 h-12 rounded-full border-df border flex items-center justify-center">
                  {" "}
                  <img
                    src="/post/2.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <div className="font-semibold">Siam Hossen</div>
                  <span className="block text-sm text-gray-700">
                    Front End Developer
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              {/* Comments section */}
              <div className=" mt-5">
                <b> Comments</b>
                <div className=" Comments">
                  {/* Looping through comments */}
                  {Foundpost.comments &&
                    Foundpost.comments.map((comm, index) => {
                      return (
                        <div
                          className=" commentsitems flex items-start gap-2 mt-3 overflow-auto "
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
                              <span className="block text-gray-600 rounded-xl text-sm mt-1">
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
              {/* Comment input section */}

              <div className=" flex items-center gap-2 mt-5 border-t border-df pt-4 ">
                <div className=" w-12 h-12 rounded-full shrink-0 border-df border flex items-center justify-center">
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
                  className="w-full px-6 py-3  rounded-full bg-gray-100 focus:outline-none "
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
