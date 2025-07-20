import React, { useContext } from "react";
import { UserContext } from "../../contextapi/Usercontext";

const ProfileFollower = () => {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <div className="  px-6 lg:px-12 py-6 bg-background rounded-lg w-full">
        {/* Friends Section Title */}
        <h2 className="text-lg font-bold text-loose">Follower</h2>
        <span className=" block text-sm text-secondary mt-1 items-center gap-2">
          <span>860</span> Metual Follower
        </span>

        {/* Friends List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#555] text-sm mt-6">
          {/* Friend Item 1 */}
          {userData.map((user, index) => (
            <div
              key={index}
              className="flex items-center gap-3 hover:bg-hovermenu transition p-0 md:p-2 rounded-md"
            >
              <div className="w-[66px] h-[66px] md:w-[76px] md:h-[76px] rounded-lg overflow-hidden border-df  ">
                <img
                  src={user.profileimage}
                  alt=""
                  className="w-full object-cover h-full rounded-lg border-border border"
                />
              </div>
              <div className="">
                <h4 className=" text-base font-bold text-loose">{user.name}</h4>
                <span className="text-secondary font-semibold block mt-1">
                  {user.bio}
                </span>
              </div>
            </div>
          ))}

          {/* Add more friends as needed */}
        </div>
      </div>
    </div>
  );
};

export default ProfileFollower;
