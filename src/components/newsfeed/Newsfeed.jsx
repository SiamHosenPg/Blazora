import React, { useContext } from "react";
import { PostContext } from "../../contextapi/Postscontext";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa6";
import { MdBookmarkBorder } from "react-icons/md";

const Newsfeed = () => {
  const { postData } = useContext(PostContext);

  return (
    <div>
      <ul>
        {postData &&
          postData.map((item, index) => (
            <li className="bg-white rounded-lg px-5 py-3 mb-5" key={index}>
              <div className="flex items-center justify-between ">
                <div className="left flex items-center justify-start gap-2">
                  <img
                    className="w-[45px] h-[45px] border-df border rounded-full"
                    src=""
                    alt=""
                  />
                  <div className="text">
                    <b className="block">Siam Hosesn</b>
                    <span className="text-[13px]">{item.post_date}</span>
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
                  <div className="flex items-center justify-between mt-4 pb-4 border-t border-df pt-4 ">
                    <div className="left flex items-center justify-start gap-4">
                      <div className="flex gap-1 items-center">
                        <AiOutlineFire className="text-2xl mr-1" />
                        {count.like_count} <div className="">Like</div>
                      </div>
                      <div className="flex gap-1 items-center">
                        <FaRegComments className="text-2xl mr-1" />
                        {count.comments_count} <div className="">Comments</div>
                      </div>
                      <div className="flex gap-1 items-center">
                        {count.shares_count}
                        <div className="">Shear</div>
                      </div>
                    </div>
                    <button>
                      <MdBookmarkBorder className="text-2xl" />
                    </button>
                  </div>
                );
              })}
            </li> // Adjust according to your JSON structure
          ))}
      </ul>
    </div>
  );
};

export default Newsfeed;
