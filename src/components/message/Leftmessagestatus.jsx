import React from "react";
import Lftmgstatus from "./messagescomp/Lftmgstatus";

import { IoSearchSharp } from "react-icons/io5";

const Leftmessagestatus = () => {
  return (
    <div className="">
      <h2 className="text-lg font-semibold py-2 border-b border-df">Message</h2>
      <div className="mt-4">
        <form
          className="w-full bg-gray-100 rounded-full px-4 flex items-center justify-between"
          action=""
        >
          <button className="bg-white shrink-0 py-2 px-2 rounded-full flex items-center justify-center">
            <IoSearchSharp />
          </button>
          <input
            className="w-full py-2 px-3 outline-0"
            type="text"
            placeholder="Search Message"
          />
        </form>
      </div>

      <Lftmgstatus />
    </div>
  );
};

export default Leftmessagestatus;
