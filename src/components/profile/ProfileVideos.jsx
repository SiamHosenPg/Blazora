import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

const ProfileVideos = () => {
  return (
    <div>
      <div className=" px-10 py-4 bg-white rounded-lg w-full mb-4 gap-8">
        <h2 className="text-lg font-bold text-[#444]">Videos</h2>
        <div className="grid grid-cols-4 gap-5 mt-6">
          <div className="w-full flex items-center justify-center rounded-md overflow-hidden border-df border">
            <img
              src="/public/post/4.jpg"
              className=" aspect-square rounded-md"
              alt=""
            />
            <div className="absolute flex items-center justify-center shadow-2xl   text-white text-3xl rounded-full">
              {" "}
              <FaCirclePlay />
            </div>
          </div>
          <div className="w-full flex items-center justify-center rounded-md overflow-hidden border-df border">
            <img
              src="/public/post/4.jpg"
              className=" aspect-square rounded-md"
              alt=""
            />
            <div className="absolute flex items-center justify-center   text-white text-3xl rounded-full">
              {" "}
              <FaCirclePlay />
            </div>
          </div>
          <div className="w-full flex items-center justify-center rounded-md overflow-hidden border-df border">
            <img
              src="/public/post/4.jpg"
              className=" aspect-square rounded-md"
              alt=""
            />
            <div className="absolute flex items-center justify-center   text-white text-3xl rounded-full">
              {" "}
              <FaCirclePlay />
            </div>
          </div>
          <div className="w-full flex items-center justify-center rounded-md overflow-hidden border-df border">
            <img
              src="/public/post/4.jpg"
              className=" aspect-square rounded-md"
              alt=""
            />
            <div className="absolute flex items-center justify-center   text-white text-3xl rounded-full">
              {" "}
              <FaCirclePlay />
            </div>
          </div>
          <div className="w-full flex items-center justify-center rounded-md overflow-hidden border-df border">
            <img
              src="/public/post/4.jpg"
              className=" aspect-square rounded-md"
              alt=""
            />
            <div className="absolute flex items-center justify-center   text-white text-3xl rounded-full">
              {" "}
              <FaCirclePlay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileVideos;
