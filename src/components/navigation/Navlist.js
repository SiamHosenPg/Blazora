import { PiNewspaperClippingBold } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaRegBookmark } from "react-icons/fa6";

import { MdHelpOutline } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";

export const Leftnavigationlist = [
  {
    name: "Follower",
    links: "/follower",
    image: "/icons/friends.png",
  },
  {
    name: "Group",
    links: "/group",
    image: "/icons/group.png",
  },
  {
    name: "Events",
    links: "/events",
    image: "/icons/event.png",
  },
  {
    name: "Tuday News",
    links: "/news",
    image: "/icons/news.png",
  },
  {
    name: "Setting & Privicy",
    links: "/setting",
    image: "/icons/setting.png",
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
