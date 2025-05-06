import React from "react";
import { MenuNavigationlist } from "../components/navigation/Navlist";
import { LuSettings } from "react-icons/lu";

import { MdOutlineDarkMode } from "react-icons/md";

const Mobilemenupage = () => {
  return (
    <div className="">
      <div className="Pagearea w-full ">
        <div className="w-full  px-4  ">
          <div className="Profile flex items-center gap-2 bg-white rounded-lg p-4">
            <div className="w-12 h-12 rounded-full border-df border flex items-center justify-center">
              <img
                src="/post/2.jpg"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <div className="font-semibold">Siam Hossen</div>
              <span className="block text-sm text-gray-700">
                Front End Developer
              </span>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg mt-4">
            <div className="flex items-center gap-2">
              <MdOutlineDarkMode className="text-xl w-8 text-center block shrink-0" />
              <span className="block text-sm  font-semibold">Dark Mode </span>
            </div>
            <div className="rounded-full w-16 h-8 bg-gray-200 p-1">
              <div className="w-8 h-full bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="   p-4 ">
          <ul className=" px-2 py-4 flex flex-col gap-2 bg-white rounded-lg ">
            {MenuNavigationlist.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={index}
                  className="menu-item flex  w-full items-center gap-2 p-2 bg-white rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <Icon className="text-xl w-8 text-center block shrink-0" />
                  <span className="block text-sm  font-semibold">
                    {item.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mobilemenupage;
