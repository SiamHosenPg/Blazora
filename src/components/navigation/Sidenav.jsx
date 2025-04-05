import React from "react";
import { Leftnavigationlist } from "./Navlist";
import { HiCheckBadge } from "react-icons/hi2";
import { LuSettings } from "react-icons/lu";
import { TbHelpCircle } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-full p-4">
      {/* Profile shortcut  */}
      <div className=" px-8 py-6 bg-[#f5f5f5] rounded-lg ">
        <div className="top flex gap-2 items-center">
          <div>
            <img
              className="w-[50px] h-[50px] rounded-full "
              src="/profile/2.jpg"
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
        {Leftnavigationlist.map((list, index) => {
          return (
            <NavLink
              to={list.links}
              key={index}
              className="flex gap-4 mt-1 mb-1 items-center px-5 py-2 hover:bg-white rounded-lg"
            >
              <img className="w-[24px] " src={list.image} alt="" />
              <div className="text-[15px] font-semibold">{list.name}</div>
            </NavLink>
          );
        })}
      </div>
      {/* shortcut acticity */}
      <div className="p-4 bg-[#f5f5f5] rounded-lg mt-3">
        <div className="flex justify-between items-center pb-3 border-b border-df">
          <div className="font-semibold">Shortcut Acticity</div>
          <span className="text-sm">Show more</span>
        </div>
        {/* Activity  */}
        <div className="flex items-top gap-2 hover:bg-white px-2 rounded-md py-2 mt-2">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="/profile/4.jpg"
            alt=""
          />
          <div className="text-sm font-semibold w-[calc(100%_-_50px)]">
            Nazirana Nahar{" "}
            <span className="text-sm text-[#666] font-medium ml-1">
              Start flowing you
              <span className="block text-[12px]">10:01PM</span>
            </span>
          </div>
        </div>
        {/* Activity  */}
        <div className="flex items-top gap-2 hover:bg-white px-2 rounded-md py-2 mt-1">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="/profile/3.jpg"
            alt=""
          />
          <div className="text-sm font-semibold w-[calc(100%_-_50px)]">
            Masud Sowadogor{" "}
            <span className="text-sm text-[#666] font-medium ml-1">
              Comments on your photo "Beautiful this moments!"
              <span className="block text-[12px]">10:34PM</span>
            </span>
          </div>
        </div>
        {/* Activity  */}
        <div className="flex items-top gap-2 hover:bg-white px-2 rounded-md py-2 mt-1">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="/profile/1.jpg"
            alt=""
          />
          <div className="text-sm font-semibold w-[calc(100%_-_50px)]">
            Nazirana Nahar{" "}
            <span className="text-sm text-[#666] font-medium ml-1">
              Post a photo "Amaging wather"
              <span className="block text-[12px]">11:34PM</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
