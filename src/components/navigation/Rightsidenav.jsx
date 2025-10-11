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
      <div className="Suggested  p-3  bg-background-secondary rounded-lg">
        <div className="flex items-center text-primary p-3 justify-between border-b border-border">
          <b>Suggested</b>
          <button className="text-sm text-secondary">See all</button>
        </div>
        <ul className="mt-3">
          {userData &&
            userData.map((user, index) => {
              return (
                <NavLink
                  to={`/profile/${user.userid}`}
                  key={index}
                  className="flex items-center justify-between mb-1 hover:bg-background px-3 py-2 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[40px] h-[40px] rounded-full"
                      src={user.profileimage}
                      alt=""
                    />
                    <div className="text">
                      <b className="block text-sm font-semibold text-primary">
                        {user.name}
                      </b>
                      <span className="block text-sm text-secondary">
                        @{user.username}
                      </span>
                    </div>
                  </div>
                  <button className="text-sm IndexColor font-semibold">
                    Follow
                  </button>
                </NavLink>
              );
            })}
        </ul>
      </div>

      {/* News content  */}
      <div className="News px-4 py-4 mt-3 bg-background-secondary rounded-lg">
        <div className="flex items-center justify-between border-b border-border pb-2">
          <div className="font-bold text-primary">News</div>
          <NavLink to="/news" className="text-sm text-secondary">
            Show more
          </NavLink>
        </div>
        <ul>
          {newsData.map((item, index) => {
            return (
              <li key={index} className="">
                <div className="block font-medium text-primary mt-5 text-sm">
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
