import React from "react";

const Mobilemenupage = () => {
  return (
    <div className="">
      <div className="Pagearea flex flex-col gap-4 items-start justify-start overflow-visible">
        <div className="w-full bg-white rounded-lg p-6 ">
          <div className="Profile flex items-center gap-2 ">
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
        <div className="Menus"></div>
      </div>
    </div>
  );
};

export default Mobilemenupage;
