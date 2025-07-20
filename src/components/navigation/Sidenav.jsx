import React from "react";
import { Leftnavigationlist } from "./Navlist";
import { HiCheckBadge } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../../hook/Darkmood";

const Sidenav = ({ user }) => {
  // Using the custom hook to manage dark mode
  const [darkMode, toggleDarkMode] = useDarkMode();
  // Toggle dark mode on click
  return (
    <div className="w-full overflow-y-auto h-full ScrollSystem px-2 ">
      {/* Profile shortcut  */}
      <div className=" px-8 py-6 bg-background-secondary rounded-lg ">
        <div className="top flex gap-3 items-center ">
          <NavLink to={`/profile/${user?.userid}`} className="shrink-0">
            <img
              className="w-[50px] border border-border   h-[50px] rounded-full "
              src={user?.profileimage || "/post/5.jpg"}
              alt=""
            />
          </NavLink>
          <div className="texts">
            <b className="flex gap-1.5 items-center text-lg text-primary">
              {user.name} <HiCheckBadge className="IndexColor" />{" "}
            </b>
            <span className="text-sm block text-secondary">
              {user.username}
            </span>
          </div>
        </div>
        <div className="flex items-center w-full justify-between mt-7">
          <div className="text-center">
            <p className="block font-bold text-primary">45K</p>
            <span className="text-sm text-secondary">Folower</span>
          </div>
          <div className="text-center">
            <b className="block font-bold text-primary">438</b>
            <span className="text-sm  text-secondary">Flowing</span>
          </div>
          <div className="text-center">
            <b className="block font-bold text-primary">49</b>
            <span className="text-sm  text-secondary">Post</span>
          </div>
        </div>
      </div>
      {/* sub nav Section  */}
      <div className=" mt-3 p-3 bg-background-secondary rounded-lg">
        <div
          onClick={toggleDarkMode}
          className=" text-primary flex gap-4 mt-1 mb-1 items-center px-5 py-2 hover:bg-background rounded-lg "
        >
          <h4 className="">Theme</h4>
        </div>
        {Leftnavigationlist.map((list, index) => {
          return (
            <NavLink
              to={list.links}
              key={index}
              className="flex gap-4 mt-1 mb-1 items-center px-5 py-2 hover:bg-background rounded-lg"
            >
              <img className="w-[24px] " src={list.image} alt="" />
              <div className="text-[15px] font-semibold text-primary">
                {list.name}
              </div>
            </NavLink>
          );
        })}
      </div>
      {/* shortcut acticity */}
      <div className="p-4 bg-background-secondary rounded-lg mt-3">
        <div className="flex justify-between items-center pb-3 border-b border-df">
          <div className="font-semibold text-primary">Shortcut Acticity</div>
          <span className="text-sm text-secondary">Show more</span>
        </div>
        {/* Activity  */}
        <div className="flex items-top gap-2 hover:bg-background px-2 rounded-md py-2 mt-2">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="/profile/4.jpg"
            alt=""
          />
          <div className="text-sm font-semibold w-[calc(100%_-_50px)] text-primary">
            Nazirana Nahar{" "}
            <span className="text-sm  text-secondary font-medium ml-1">
              Start flowing you
              <span className="block text-[12px] text-tertiary">10:01PM</span>
            </span>
          </div>
        </div>
        {/* Activity  */}
        <div className="flex items-top gap-2 hover:bg-background px-2 rounded-md py-2 mt-1">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="/profile/3.jpg"
            alt=""
          />
          <div className="text-sm font-semibold w-[calc(100%_-_50px)] text-primary">
            Masud Sowadogor{" "}
            <span className="text-sm  text-secondary font-medium ml-1">
              Comments on your photo "Beautiful this moments!"
              <span className="block text-[12px] text-tertiary">10:34PM</span>
            </span>
          </div>
        </div>
        {/* Activity  */}
        <div className="flex items-top gap-2 hover:bg-background px-2 rounded-md py-2 mt-1">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="/profile/1.jpg"
            alt=""
          />
          <div className="text-sm font-semibold w-[calc(100%_-_50px)] text-primary">
            Nazirana Nahar{" "}
            <span className="text-sm   font-medium ml-1 text-secondary">
              Post a photo "Amaging wather"
              <span className="block text-[12px] text-tertiary">11:34PM</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
