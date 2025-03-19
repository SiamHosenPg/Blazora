import React from "react";

import { GrHomeOption } from "react-icons/gr";
import { FiMessageCircle } from "react-icons/fi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import "./navigation.css";

const Nav = () => {
  return (
    <div className=" Navigation w-full bg-white h-[78px] border-df border-b fixed">
      <div className="Pagearea h-full flex items-center justify-between ">
        <div className="Logo w-[33%] text-3xl text-[#444] font-bold">
          Blazora
        </div>
        <div className="Pages w-[33%] flex items-center justify-center">
          <ul className="flex items-center justify-center gap-4  py-1 px-4 rounded-md">
            <li>
              <button className=" pageLink Active hover:bg-[#f5f5f5]  p-2 rounded-md text-[#555] flex items-center justify-center gap-2">
                <GrHomeOption className="text-2xl" />
                <b className="block font-semibold text-sm">Home</b>
              </button>
            </li>
            <li>
              <button className=" pageLink   hover:bg-[#f5f5f5] p-2 rounded-md text-[#555] flex items-center justify-center gap-2">
                <MdOutlineExplore className="text-2xl" />
                <b className="block font-semibold text-sm">Explore</b>
              </button>
            </li>
            <li>
              <button className=" pageLink  hover:bg-[#f5f5f5] p-2 rounded-md text-[#555] flex items-center justify-center gap-2">
                <AiOutlineUsergroupAdd className="text-2xl" />
                <b className="block font-semibold text-sm">Friends</b>
              </button>
            </li>
            <li>
              <button className=" pageLink  hover:bg-[#f5f5f5] p-2 rounded-md text-[#555] flex items-center justify-center gap-2">
                <FiMessageCircle className="text-2xl" />
                <b className="block font-semibold text-sm">Message</b>
              </button>
            </li>
            <li>
              <button className=" pageLink  hover:bg-[#f5f5f5]  p-2 rounded-md text-[#555] flex items-center justify-center gap-2">
                <MdOutlineNotificationsNone className="text-2xl" />
                <b className="block font-semibold text-sm">Notification</b>
              </button>
            </li>
          </ul>
        </div>
        <div className="ProfileMenu w-[33%] flex items-center justify-end gap-2">
          <div className="image">
            <img
              className="w-[37px] h-[37px] rounded-full bg-blue-50"
              src="/public/profile/2.jpg"
              alt=""
            />
          </div>
          <div className="text font-semibold">Siam Hosen</div>
          <FaCaretDown />
        </div>
      </div>
    </div>
  );
};

export default Nav;
