import React from "react";
import { MenuNavigationlist } from "../components/navigation/Navlist";
import { MdOutlineDarkMode } from "react-icons/md";

import { useAuthContext } from "../contextapi/Authentication";
import { NavLink } from "react-router-dom";

import { useDarkMode } from "../hook/Darkmood";
const Mobilemenupage = () => {
  // Toggle dark mode on click
  const [darkMode, toggleDarkMode] = useDarkMode();
  // Using the custom hook to manage dark mode
  const { user } = useAuthContext();
  return (
    <div className="">
      <div className="Pagearea w-full ">
        <div className="w-full  px-4 mt-4 ">
          <div className="Profile flex items-center gap-2 bg-background rounded-lg p-4">
            <NavLink
              to={`/profile/${user.userid}`}
              className="w-12 h-12 rounded-full border-border border flex items-center justify-center"
            >
              <img
                loading="lazy"
                src={user.profileimage}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </NavLink>
            <div>
              <div className="font-semibold text-primary">{user.name}</div>
              <span className="block text-sm text-secondary">{user.bio}</span>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="w-full flex items-center justify-between px-4 py-3 bg-background rounded-lg mt-4">
            <div className="flex items-center gap-2">
              <MdOutlineDarkMode className="text-xl w-8 text-center block shrink-0" />
              <span className="block text-sm  font-semibold">Dark Mode </span>
            </div>
            <div
              onClick={toggleDarkMode}
              className="rounded-full w-14 h-8 bg-background-secondary p-1"
            >
              <div
                className={` ${
                  darkMode ? "bg-white ml-[16px]" : "bg-white ml-[0px]"
                } w-8 h-full   rounded-full duration-200`}
              ></div>
            </div>
          </div>
        </div>
        <div className="   p-4 ">
          <ul className=" px-2 py-4 flex flex-col gap-2 bg-background rounded-lg ">
            {MenuNavigationlist.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={index}
                  className="menu-item flex  w-full items-center gap-2 p-2 bg-background rounded-lg hover:bg-background-secondary cursor-pointer"
                >
                  <Icon className="text-xl w-8 text-center text-primary block shrink-0" />
                  <span className="block text-sm  font-semibold text-loose">
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
