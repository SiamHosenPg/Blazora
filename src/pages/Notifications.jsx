import React, { useState } from "react";

const Notifications = () => {
  return (
    <div className="Pagearea">
      <div>
        <div className="Pagearea w-full "></div>
        <div className="w-full  px-4  ">
          <div className="Profile flex items-center gap-2 bg-white rounded-lg p-4">
            <div className="w-12 h-12 rounded-full border-df border flex items-center justify-center">
              <img
                src="/post/2.jpg"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <div className="font-semibold">Siam Hossen</div>
              <span className="block text-sm text-gray-700">
                Front End Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
