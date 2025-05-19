import React, { useContext } from "react";
import { useMessageContext } from "../../../contextapi/Messagecontext"; // Importing custom message context hook
import { UserContext } from "../../../contextapi/Usercontext"; // Importing user context

const Lftmgstatus = () => {
  const { messages } = useMessageContext(); // Getting messages from context
  const { userData } = useContext(UserContext); // Getting user data from context
  // Creating a map for quick user lookup by userid
  const usermap = {};
  userData.forEach((user) => {
    usermap[user.userid] = user;
  });

  return (
    <div className="mt-2 lg:mt-4 w-full flex flex-col gap-2 px-4 h-full pb-4  overflow-y-auto ScrollSystem ">
      {/* Loop through each message */}
      {messages.map((message, index) => {
        const users = usermap[message.userid]; // Find user info by userid
        return (
          <div
            key={index}
            className={` ${
              message.seenstatus
                ? "bg-white hover:bg-gray-100"
                : "bg-blue-50 hover:bg-blue-100"
            }  w-full  flex gap-3 items-center justify-start transition-all  px-4 py-2 rounded-md`}
          >
            {/* User profile image */}
            <div className="w-12 h-12 rounded-full shrink-0">
              <img
                loading="lazy"
                className="h-full w-full object-cover rounded-full"
                src={
                  users && users.profileimage
                    ? users.profileimage
                    : "/default-profile.jpg"
                } // Fallback if user or image not found
                alt=""
              />
            </div>
            <div className=" w-5/6">
              {/* User name and time */}
              <h3 className="font-semibold text-sm ">
                {users ? users.name : "unknown"}
                <span className="text-gray-600 text-[12px] font-normal ml-1">
                  {message.time}
                </span>
              </h3>
              {/* Message preview */}
              <span
                className={`  text-sm text-gray-600 w-full block overflow-hidden whitespace-nowrap text-ellipsis truncate ${
                  message.seenstatus ? "font-normal" : "font-medium"
                }`}
              >
                {message.messagedata}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Lftmgstatus;
