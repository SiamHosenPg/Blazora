import React from "react";

import { LuSendHorizontal } from "react-icons/lu";
import MessageTextpart from "./Messagetext/MessageTextpart";

const Conversaition = () => {
  return (
    <div className=" flex h-full flex-col overflow-hidden  justify-between">
      <div className="h-full overflow-hidden hover:overflow-y-auto w-full  py-8">
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
