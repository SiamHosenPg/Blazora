import React from "react";

const ProfilePhotoslist = () => {
  return (
    <div>
      <div className=" px-10 py-4 bg-white rounded-lg w-full mb-4 gap-8">
        <h2 className="text-lg font-bold text-[#444]">Photos</h2>
        <div className="grid grid-cols-4 gap-5 mt-6">
          <div className="w-full rounded-md overflow-hidden border-df border">
            <img
              src="/public/post/4.jpg"
              className=" aspect-square rounded-md"
              alt=""
            />
          </div>
          <div className="w-full rounded-md overflow-hidden border-df border">
            <img
              src="/public/post/4.jpg"
              className=" aspect-square rounded-md"
              alt=""
            />
          </div>
          <div className="w-full rounded-md overflow-hidden border-df border">
            <img
              src="/public/post/4.jpg"
              className=" aspect-square rounded-md"
              alt=""
            />
          </div>
          <div className="w-full rounded-md overflow-hidden border-df border">
            <img
              src="/public/post/4.jpg"
              className=" aspect-square rounded-md"
              alt=""
            />
          </div>
          <div className="w-full rounded-md overflow-hidden border-df border">
            <img
              src="/public/post/4.jpg"
              className=" aspect-square rounded-md"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhotoslist;
