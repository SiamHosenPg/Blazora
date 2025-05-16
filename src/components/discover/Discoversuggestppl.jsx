import React, { useContext } from "react";
import { UserContext } from "../../contextapi/Usercontext";

const Discoversuggestppl = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {userData.map((user, index) => (
        <div
          key={index}
          className=" p-2 bg-white rounded-lg overflow-hidden pb-6"
        >
          <div className=" rounded-lg  overflow-hidden relative">
            <img
              loading="lazy"
              className=" aspect-3/1 object-cover"
              src={user.coverphoto}
              alt=""
            />
          </div>
          <div className="w-20 h-20 p-1 ml-5 relative z-10 border-white bg-white mt-[-40px] rounded-full overflow-hidden flex items-center justify-center">
            <img
              loading="lazy"
              src={user.profileimage}
              alt="User"
              className="rounded-full h-full w-full object-cover"
            />
          </div>
          <div className=" mt-1 px-5">
            <div className=" w-full">
              <h3 className=" flex items-end justify-between w-full  font-semibold">
                <span>{user.name}</span>
                <button className=" py-1 px-3 bg-blue-500 text-sm font-semibold  text-white rounded-full">
                  Follow
                </button>
              </h3>
              <p className=" text-gray-500 text-sm mt-1">{user.work}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Discoversuggestppl;
