import React from "react";

import { LuSendHorizontal } from "react-icons/lu";
import MessageTextpart from "./Messagetext/MessageTextpart";

import { IoCallSharp } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Conversaition = () => {
  return (
    <div className=" flex h-full flex-col overflow-hidden  justify-between">
      <div className=" border-b border-df  shrink-0   h-[70px] flex items-center justify-between px-4">
        <div className="flex items-center gap-2 ">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              loading="lazy"
              className="w-full h-full object-cover rounded-full"
              src="/post/3.jpg"
              alt=""
            />
          </div>
          <div className="">
            <div className="text-sm font-semibold">Siam Hosen</div>
            <div className="text-[11px] text-gray-500">Active 2h ago</div>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <button className="bg-white IndexColor p-2 rounded-full flex items-center justify-center">
            <IoCallSharp className="text-xl" />
          </button>
          <button className="bg-white IndexColor p-2 rounded-full flex items-center justify-center">
            <FaVideo className="text-xl" />
          </button>
          <button className="bg-white IndexColor p-2 rounded-full flex items-center justify-center">
            <BsFillInfoCircleFill className="text-xl" />
          </button>
        </div>
      </div>
      <div className="h-full overflow-hidden  w-full px-2    ">
        <div className=" px-2 h-full w-full overflow-y-auto ScrollSystem">
          <MessageTextpart />
        </div>
      </div>
      <div className="h-20 py-3  px-4">
        <form
          className="w-full bg-gray-100  rounded-md flex justify-between p-2  "
          action=""
        >
          <input
            type="text"
            className="px-3 py-2 w-full outline-none "
            placeholder="Some message for your Follower!"
          />
          <button className=" bg-white text-gray-600 py-2 px-3 rounded-full flex items-center justify-center">
            <LuSendHorizontal />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Conversaition;
