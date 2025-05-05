import React from "react";
import { MenuNavigationlist } from "../components/navigation/Navlist";
import { LuSettings } from "react-icons/lu";

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
