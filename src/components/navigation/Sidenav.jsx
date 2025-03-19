import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { LuSettings } from "react-icons/lu";
import { TbHelpCircle } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const Sidenav = () => {
  return (
    <div className="w-full p-4">
      {/* Profile shortcut  */}
      <div className=" px-8 py-6 bg-[#f5f5f5] rounded-lg ">
        <div className="top flex gap-2 items-center">
          <div>
            <img
              className="w-[50px] h-[50px] rounded-full "
              src="/public/profile/2.jpg"
              alt=""
            />
          </div>
          <div className="texts">
            <b className="flex gap-1.5 items-center text-lg">
              Siam Hossen <HiCheckBadge className="text-blue-600" />{" "}
            </b>
            <span className="text-sm">@siamhosenpg</span>
          </div>
        </div>
        <div className="flex items-center w-full justify-between mt-7">
          <div className="text-center">
            <b className="block font-bold">49k</b>
            <span className="text-sm">Folower</span>
          </div>
          <div className="text-center">
            <b className="block font-bold">438</b>
            <span className="text-sm">Flowing</span>
          </div>
          <div className="text-center">
            <b className="block font-bold">49</b>
            <span className="text-sm">Post</span>
          </div>
        </div>
      </div>
      {/* sub nav Section  */}
      <div className=" mt-3 p-3 bg-[#f5f5f5] rounded-lg">
        <div className="flex gap-2 items-center px-5 py-2 hover:bg-white rounded-lg">
          <CgProfile className="text-lg" />
          <div>Profile</div>
        </div>
        <div className="flex gap-2 items-center px-5 py-2 hover:bg-white rounded-lg">
          <CgProfile className="text-lg" />
          <div>Group</div>
        </div>
        <div className="flex gap-2 items-center px-5 py-2 hover:bg-white rounded-lg">
          <CgProfile className="text-lg" />
          <div className="font-bold text-[15px]">Lattest News</div>
        </div>
      </div>
      {/* seatting and help  */}
      <div className="p-3 bg-[#f5f5f5] rounded-lg mt-3">
        <div className="flex items-center gap-2 px-3 py-3 bg-white rounded-lg">
          <LuSettings className="text-2xl" />
          <span className="block font-semibold text-sm">Setting & Privicy</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-3">
          <TbHelpCircle className="text-2xl" />
          <span className="block font-semibold text-sm">
            How can I help you?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
