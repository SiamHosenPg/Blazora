import React from "react";

import { GoHomeFill } from "react-icons/go";
import { MdExplore } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaUserGroup } from "react-icons/fa6";
import { RiVideoAiFill } from "react-icons/ri";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import "./navigation.css";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contextapi/Authentication"; // Importing Authentication context

const Nav = () => {
  const { user } = useAuthContext(); // Accessing login method from context
  return (
    <div className="w-full fixed z-50 bg-white">
      <div className="Pagearea flex gap-3 px-6  items-center justify-between pt-2 md:hidden bg-white h-[60px]   ">
        <div className="Logo ml-6 shrink-0  w-[24px] text-2xl text-[#444]  font-bold">
          <img src="/firelogoupdate.png" alt="" className="w-full" />
        </div>
        <form
          action=""
          className="flex items-center justify-between bg-gray-100 rounded-full w-full"
        >
          <input
            type="text"
            className=" px-3 py-2 text-sm font-semibold w-full"
            placeholder="Search your items here..."
          />
          <button className=" px-2 py-2 rounded-full flex items-center justify-center">
            <IoSearchSharp className="text-xl text-gray-500 " />
          </button>
        </form>
        <NavLink
          to="/menu"
          className="mr-6 flex items-center justify-center shrink-0 "
        >
          <BsGridFill className="text-xl" />
        </NavLink>
      </div>

      {/* Navigation for larger screens */}
      <div className=" Navigation w-full bg-white h-[50px]  md:h-[72px] border-df border-b ">
        <div className="Pagearea h-full flex items-center  justify-between ">
          <div className=" items-center justify-start md:w-[30%] lg:w-[20%] gap-2   hidden sm:hidden md:flex ">
            <div className="Logo w-[24px] hidden sm:hidden md:block   text-2xl text-[#444]  font-bold">
              <img src="/firelogoupdate.png" alt="" className="w-full" />
            </div>
            <form
              action=""
              className="flex items-center justify-between bg-gray-100 rounded-full"
            >
              <input
                type="text"
                className=" px-3 py-2 text-sm font-semibold w-full"
                placeholder="Search your items here..."
              />
              <button className=" px-2 py-2 rounded-full flex items-center justify-center">
                <IoSearchSharp className="text-xl text-gray-500 " />
              </button>
            </form>
          </div>
          <div className="Pages w-[100%] sm:w-full md:w-[40%] lg:w-[60%] flex items-center justify-between md:justify-center ">
            <ul className="flex w-full items-center justify-between md:justify-center gap-4  py-1 px-4 rounded-md ">
              <li>
                <NavLink
                  to="/home"
                  className=" pageLink Active hover:bg-[#f5f5f5]  p-2 rounded-md text-[#555] flex items-center justify-center gap-2"
                >
                  <GoHomeFill className="text-2xl lg:text-xl" />
                  <b className=" hidden lg:block font-semibold text-sm ">
                    Home
                  </b>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/explore"
                  className=" pageLink   hover:bg-[#f5f5f5] p-2 rounded-md text-[#555] flex items-center justify-center gap-2"
                >
                  <MdExplore className="text-2xl lg:text-xl" />
                  <b className="hidden lg:block font-semibold text-sm">
                    Explore
                  </b>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shorts"
                  className=" pageLink  hover:bg-[#f5f5f5] p-2 rounded-md text-[#555] flex items-center justify-center gap-2"
                >
                  <RiVideoAiFill className="text-2xl lg:text-xl" />
                  <b className="hidden lg:block font-semibold text-sm">
                    Shorts
                  </b>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/messages"
                  className=" pageLink  hover:bg-[#f5f5f5] p-2 rounded-md text-[#555] flex items-center justify-center gap-2"
                >
                  <BiSolidMessageRounded className="text-2xl lg:text-xl" />
                  <b className="hidden lg:block font-semibold text-sm">
                    Message
                  </b>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notifications"
                  className=" pageLink  hover:bg-[#f5f5f5]  p-2 rounded-md text-[#555] flex items-center justify-center gap-2"
                >
                  <IoNotifications className="text-2xl lg:text-xl" />
                  <b className="hidden lg:block font-semibold text-sm">
                    Notification
                  </b>
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to={`/profile/${user.userid}`}
            className="ProfileMenu hidden sm:hidden md:flex md:w-[30%] lg:w-[20%]  items-center justify-end gap-2"
          >
            <div className="image">
              <img
                className="w-[34px] h-[34px] rounded-full bg-blue-50"
                src={user?.profileimage || "/post/5.jpg"}
                alt=""
              />
            </div>
            <div className="text-sm font-semibold text-gray-600">
              {user?.name || "Unknown User"}
            </div>
            <FaCaretDown />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
