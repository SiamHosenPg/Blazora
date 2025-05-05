import EventImage from "../../../public//icons/event.png";
import Friends from "../../../public//icons/friends.png";
import group from "../../../public//icons/group.png";
import Settingimage from "../../../public//icons/setting.png";
import newsimage from "../../../public//icons/news.png";

import { PiNewspaperClippingBold } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";

export const Leftnavigationlist = [
  {
    name: "Frients",
    links: "/friends",
    image: Friends,
  },
  {
    name: "Group",
    links: "/group",
    image: group,
  },
  {
    name: "Events",
    links: "/events",
    image: EventImage,
  },
  {
    name: "Tuday News",
    links: "/news",
    image: newsimage,
  },
  {
    name: "Setting & Privicy",
    links: "/setting",
    image: Settingimage,
  },
];

export const MenuNavigationlist = [
  {
    name: "Tuday News",
    links: "/news",
    icon: PiNewspaperClippingBold,
  },
  {
    name: "Saved",
    links: "/saved",
    icon: FaRegBookmark,
  },
  {
    name: "Group",
    links: "/group",
    icon: HiOutlineUserGroup,
  },
  {
    name: "Dark Mode",
    links: "/darkmode",
    icon: MdOutlineDarkMode,
  },
  {
    name: "Help & Support",
    links: "/help",
    icon: MdHelpOutline,
  },

  {
    name: "Setting & Privicy",
    links: "/setting",
    icon: LuSettings,
  },
  {
    name: "Logout",
    links: "/logout",
    icon: TbLogout,
  },
];
