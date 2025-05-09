import React, { useContext } from "react";
import { NewsContext } from "../../contextapi/Newscontext";
import { UserContext } from "../../contextapi/Usercontext";
import { NavLink } from "react-router-dom";

const Rightsidenav = () => {
  const { userData } = useContext(UserContext);
  const { newsData } = NewsContext();

  return (
    <div className="  overflow-y-auto ScrollSystem w-full h-full px-2  ">
      {/* Suggested Section  */}
      <div className="Suggested  p-3  bg-[#f5f5f5] rounded-lg">
        <div className="flex items-center p-3 justify-between border-b border-df">
          <b>Suggested</b>
          <button className="text-sm text-[#555]">See all</button>
        </div>
        <ul className="mt-3">
          {userData &&
            userData.map((user, index) => {
              return (
                <NavLink
                  to={`/profile/${user.userid}`}
                  key={index}
                  className="flex items-center justify-between mb-1 hover:bg-white px-3 py-2 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[40px] h-[40px] rounded-full"
                      src={user.profileimage}
                      alt=""
                    />
                    <div className="text">
                      <b className="block text-sm font-semibold">{user.name}</b>
                      <span className="block text-sm text-[#555]">
                        @{user.username}
                      </span>
                    </div>
                  </div>
                  <button className="text-sm IndexColor font-semibold">
                    Folow
                  </button>
                </NavLink>
              );
            })}
        </ul>
      </div>

      {/* News content  */}
      <div className="News px-4 py-4 mt-3 bg-[#f5f5f5] rounded-lg">
        <div className="flex items-center justify-between border-b border-df pb-2">
          <div className="font-bold">News</div>
          <NavLink to="/news" className="text-sm">
            Show more
          </NavLink>
        </div>
        <ul>
          {newsData.map((item, index) => {
            return (
              <li key={index} className="">
                <div className="block font-medium mt-5 text-sm">
                  {item.newstitle}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Rightsidenav;
