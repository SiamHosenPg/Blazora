import React from "react";

import { RiHome4Line } from "react-icons/ri";
import { FiMessageCircle } from "react-icons/fi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import "./navigation.css";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contextapi/Authentication"; // Importing Authentication context

const Nav = () => {
  const { user } = useAuthContext(); // Accessing login method from context
  return (
    <div className="w-full fixed z-50 bg-white">
      <div className="Pagearea flex px-6  items-center justify-between pt-2 md:hidden bg-white h-[60px]   ">
        <div className="Logo ml-6   w-[20%] text-2xl text-[#444]  font-bold">
          <img src="/logoblack.png" alt="" className="w-[110px]" />
        </div>
        <NavLink to="/menu" className="mr-6 flex items-center justify-center ">
          <BsGridFill className="text-xl" />
        </NavLink>
      </div>
      <div className=" Navigation w-full bg-white h-[50px]  md:h-[72px] border-df border-b ">
        <div className="Pagearea h-full flex items-center  justify-between ">
          <div className="Logo hidden sm:hidden md:block  w-[20%] text-2xl text-[#444]  font-bold">
            <img src="/logoblack.png" alt="" className="w-[110px]" />
          </div>
          <div className="Pages w-[100%] sm:w-full md:w-[60%] flex items-center justify-between md:justify-center ">
            <ul className="flex w-full items-center justify-between md:justify-center gap-4  py-1 px-4 rounded-md ">
              <li>
                <NavLink
                  to="/home"
                  className=" pageLink Active hover:bg-[#f5f5f5]  p-2 rounded-md text-[#555] flex items-center justify-center gap-2"
                >
                  <RiHome4Line className="text-2xl" />
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
                  <MdOutlineExplore className="text-2xl" />
                  <b className="hidden lg:block font-semibold text-sm">
                    Explore
                  </b>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/friends"
                  className=" pageLink  hover:bg-[#f5f5f5] p-2 rounded-md text-[#555] flex items-center justify-center gap-2"
                >
                  <AiOutlineUsergroupAdd className="text-2xl" />
                  <b className="hidden lg:block font-semibold text-sm">
                    Friends
                  </b>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/messages"
                  className=" pageLink  hover:bg-[#f5f5f5] p-2 rounded-md text-[#555] flex items-center justify-center gap-2"
                >
                  <FiMessageCircle className="text-2xl" />
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
                  <MdOutlineNotificationsNone className="text-2xl" />
                  <b className="hidden lg:block font-semibold text-sm">
                    Notification
                  </b>
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to={`/profile/${user.userid}`}
            className="ProfileMenu hidden sm:hidden md:flex w-[20%]  items-center justify-end gap-2"
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
