import React from "react";
import Lftmgstatus from "./messagescomp/Lftmgstatus";
import { IoIosCreate } from "react-icons/io";

import { IoSearchSharp } from "react-icons/io5";

const Leftmessagestatus = () => {
  return (
    <div className="  h-full flex flex-col justify-between  ">
      <div className=" shrink-0">
        <div className="h-[50px] md:h-[70px] border-b border-df flex items-center justify-between px-4">
          <h2 className="text-lg font-semibold ">Message</h2>
          <IoIosCreate className="text-2xl IndexColor" />
        </div>
        <div className="mt-2 lg:mt-4 px-4 ">
          <form
            className="w-full bg-gray-100 rounded-full px-1  flex items-center justify-between"
            action=""
          >
            <button className="bg-white shrink-0 py-3 px-3 rounded-full flex items-center justify-center">
              <IoSearchSharp />
            </button>
            <input
              className="w-full py-3 text-sm font-semibold px-3 outline-0"
              type="text"
              placeholder="Search Message"
            />
          </form>
        </div>
      </div>

      <Lftmgstatus />
    </div>
  );
};

export default Leftmessagestatus;
