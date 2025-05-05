import React from "react";

import { LuSendHorizontal } from "react-icons/lu";
import MessageTextpart from "./Messagetext/MessageTextpart";

const Conversaition = () => {
  return (
    <div className=" flex h-full flex-col overflow-hidden  justify-between">
      <div className="p-4 border-b border-df ">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
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
      </div>
      <div className="h-full overflow-hidden hover:overflow-y-auto w-full  Scrollbar-Hover py-8 ">
        <MessageTextpart />
      </div>
      <div className="h-20 py-3">
        <form
          className="w-full bg-gray-100  rounded-md flex justify-between p-2 "
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
