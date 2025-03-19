import React, { useContext } from "react";
import { PostContext } from "../../contextapi/Postscontext";
import { UserContext } from "../../contextapi/Usercontext";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa6";
import { MdBookmarkBorder } from "react-icons/md";
import { LuSendHorizontal } from "react-icons/lu";
import { MdOutlinePublic } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import "./Newsfeed.css";

const Newsfeed = () => {
  const { postData } = useContext(PostContext);
  const { userData } = useContext(UserContext);

  return (
    <div className="Newsfeed">
      <ul>
        {postData &&
          postData.map((item, index) => (
            <li className="bg-white rounded-lg px-5 py-3 pt-5 mb-5" key={index}>
              <div className="flex items-center justify-between ">
                <div className="left flex items-center justify-start gap-2">
                  <img
                    className="w-[45px] h-[45px] border-df border rounded-full"
                    src="/public/profile/2.jpg"
                    alt=""
                  />
                  <div className="text">
                    <div className="flex gap-3  items-center">
                      <b>Siam Hosesn</b>
                      <span className="text-sm flex items-center">
                        <MdOutlineLocationOn />
                        {item.location}
                      </span>
                    </div>
                    <span className="text-[13px] text-[#777] flex gap-2 items-center">
                      {item.post_date} <MdOutlinePublic />
                    </span>
                  </div>
                </div>
                <button>
                  <BsThreeDotsVertical className="text-xl" />
                </button>
              </div>
              <div className="posttext mt-4">{item.text}</div>
              <div className="media w-full h-auto">
                <img
                  className="rounded-lg mt-2 w-full h-auto max-h-[700px]"
                  src={item.media}
                  alt=""
                />
              </div>

              {item.engagement.map((count, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between mt-4 pb-4 border-t border-df pt-4 "
                  >
                    <div className="left flex items-center justify-start gap-4">
                      <div className="flex gap-1 items-center">
                        <AiOutlineFire className="text-2xl mr-1" />
                        {count.like_count} <div className="text-sm">Like</div>
                      </div>
                      <div className="flex gap-1 items-center">
                        <FaRegComments className="text-2xl mr-1" />
                        {count.comments_count}{" "}
                        <div className="text-sm">Comments</div>
                      </div>
                      <div className="flex gap-1 items-center">
                        {count.shares_count}
                        <div className="text-sm">Shear</div>
                      </div>
                    </div>
                    <button>
                      <MdBookmarkBorder className="text-2xl" />
                    </button>
                  </div>
                );
              })}
              <div className="CommentsInput flex gap-3 mt-4 items-center ">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src="/public/profile/2.jpg"
                  alt=""
                />
                <input
                  type="text"
                  className=" bg-[#f5f5f5] rounded-full px-5 py-3 text-sm w-[300px]"
                  placeholder="What's your mind?"
                />
                <button>
                  {" "}
                  <LuSendHorizontal className="text-lg text-[#555]" />
                </button>
              </div>
              <div className=" mt-5">
                <b> Comments</b>
                <div className=" Comments">
                  {item.comments &&
                    item.comments.map((comm, index) => {
                      return (
                        <div
                          className=" commentsitems flex items-start gap-2 mt-5 border-b border-df pb-3"
                          key={index}
                        >
                          <div className="image">
                            <img
                              src="/public/profile/2.jpg"
                              className="w-[40px] h-[40px] bg-blue-50 rounded-full"
                              alt=""
                            />
                          </div>
                          <div className="texts max-w-[370px] bg-[#f3f3f3] px-5 py-3 rounded-xl rounded-tl-none">
                            <b className="block font-medium text-sm">
                              Siam Hosen
                            </b>
                            <div className="flex items-start gap-2">
                              <span className="block rounded-xl text-sm mt-1">
                                {comm.comment_text}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center mt-3 gap-3">
                            <button className=" flex ">
                              <AiOutlineFire className="text-lg" />
                            </button>
                            <button className="text-sm text-[#666]">
                              Reply
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </li> // Adjust according to your JSON structure
          ))}
      </ul>
    </div>
  );
};

export default Newsfeed;
