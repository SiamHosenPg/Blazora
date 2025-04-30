import React from "react";
import { FaImages } from "react-icons/fa6";
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";

import { RiLiveFill } from "react-icons/ri";

const UploadBox = ({ user }) => {
  return (
    <div className="w-full bg-white rounded-lg px-4 sm:px-6 py-3 sm:py-4 flex flex-col items-center justify-center mb-2 sm:mb-4">
      <div className="flex items-center justify-between w-full gap-4 mb-2 sm:mb-4 border-b border-df pb-2 sm:pb-4">
        <div className="image w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full overflow-hidden border-1 border-gray-300">
          <img src={user.profileimage} alt="" />
        </div>
        <form action="" className="w-full">
          <input
            className="px-4 py-2 sm:py-3 text-sm bg-gray-100 rounded-full w-full outline-none"
            placeholder="What's on your mind?"
            type="text"
          />
        </form>
      </div>
      <div className="flex items-center justify-between w-full gap-4 font-medium ">
        <button className="w-2/6 flex items-center justify-center gap-2   py-2 rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out ">
          <FaImages className="text-xl text-blue-600" />{" "}
          <span className="text-sm sm:text-base overflow-hidden whitespace-nowrap text-ellipsis truncate ">
            Upload Image
          </span>
        </button>
        <button className="w-2/6 flex items-center justify-center gap-2   py-2 rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out">
          <FaRegFaceKissWinkHeart className="text-xl text-yellow-600" />{" "}
          <span className="text-sm sm:text-base overflow-hidden whitespace-nowrap text-ellipsis truncate">
            Felling
          </span>
        </button>
        <button className="w-2/6 flex items-center justify-center gap-2   py-2 rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out">
          <RiLiveFill className="text-xl text-red-600" />{" "}
          <span className="text-sm sm:text-base overflow-hidden whitespace-nowrap text-ellipsis truncate">
            Mamories
          </span>
        </button>
      </div>
    </div>
  );
};

export default UploadBox;
