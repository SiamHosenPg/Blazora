import React, { useContext } from "react";
import { UserContext } from "../../contextapi/Usercontext";

const StorySmallbox = ({ story }) => {
  const { userData } = useContext(UserContext);
  // Check if userData is available

  // Access user data from context
  return (
    <div>
      {userData &&
        userData.map((user, index) => {
          if (user.userid === story.postuserid) {
            return (
              <div
                key={index}
                className="flex flex-col mx-w-[80px] w-[70px] sm:w-[80px]  items-center  shrink-0 "
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-r from-[#ff3007] via-[#fc6400] to-[#fac000] rounded-full overflow-hidden p-[3px]">
                  <div className="  p-[3px] bg-white rounded-full  ">
                    <img
                      className=" aspect-square block rounded-full bg-blue-200  object-cover"
                      src={user.profileimage}
                      alt=""
                    />
                  </div>
                </div>
                <span className="block text-[11px] sm:text-[12px]  w-full text-center mt-1 whitespace-nowrap overflow-hidden text-ellipsis ">
                  {user.name}
                </span>
              </div>
            );
          }
          return null; // Return null if no matching user is found
        })}
    </div>
  );
};

export default StorySmallbox;
