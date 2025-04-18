import React from "react";
import { MdModeEdit } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { MdWork } from "react-icons/md";

const Profiletopimage = ({ user }) => {
  return (
    <div className="bg-white rounded-none lg:rounded-lg mb-4 overflow-hidden w-full pb-8">
      <div className="profiletopimage  overflow-hidden w-full">
        <img
          src={user?.coverphoto || "/post/4.jpg"}
          alt=""
          className="aspect-[7/2] object-cover bg-blue-50 w-full"
        />
      </div>

      <div className="profiletopimagedescrition flex flex-col lg:flex-row items-start lg:items-center justify-start gap-4 px-6 lg:px-10 py-2 mt-[-50px] bg-white rounded-lg">
        <div className="pfimage w-[110px] lg:w-[140px] shrink-0 h-[110px] lg:h-[140px] rounded-full overflow-hidden p-[5px] bg-white ">
          <img
            src={user?.profileimage || "/post/5.jpg"}
            alt=""
            className="w-full object-cover h-full rounded-full border-df border"
          />
        </div>
        <div className=" w-full pfdescription mt-0 lg:mt-6 flex flex-col lg:flex-row items-start lg:items-center gap-2 justify-between">
          <div className="w-full lg:w-5/12">
            <h2 className="text-xl font-bold flex items-center gap-1">
              {user?.name || "Unknown User"}
              <div className="status w-2 h-2 mt-1 bg-green-600 rounded-full  border-white border-1"></div>
            </h2>
            <p className="text-sm text-gray-500">
              @{user?.username || "Unknown Username"}
            </p>
          </div>
          <div className=" w-full  lg:w-7/12  flex justify-between items-center gap-2">
            <button className="w-5/12 bg-blue-700 rounded-md  px-4 py-2  font-semibold transition duration-200 ease-in-out text-sm text-white flex items-center justify-center gap-2">
              <MdModeEdit className=" text-xl text-white" />
              Add Post
            </button>
            <button className="w-5/12 bg-red-100 rounded-md  px-4 py-2  font-semibold transition duration-200 ease-in-out text-sm text-red-600 flex items-center justify-center gap-2">
              <MdModeEdit className=" text-xl text-red-600" />
              Edit Profile{" "}
            </button>
            <button className="w-1/12 flex items-center justify-center bg-gray-100 rounded-md   py-2  font-semibold transition duration-200 ease-in-out text-sm   gap-2">
              <HiDotsVertical className=" text-xl text-gray-900" />
            </button>
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-fit  flex items-center justify-between lg:justify-start mt-3 lg:mt-0  text-sm gap-4 lg:gap-9 font-semibold">
          <div className="text-gray-400">
            <span className="text-gray-900 text-base font-bold">1.2K</span>{" "}
            Followers
          </div>
          <div className="text-gray-400">
            <span className="text-gray-900 text-base font-bold">675</span>{" "}
            Following
          </div>
          <div className="text-gray-400">
            <span className="text-gray-900 text-base font-bold">265</span> Post
          </div>
        </div>
        <div className="w-full lg:w-fit  flex items-center justify-start lg:justify-end mt-3 lg:mt-0 gap-4 ml-auto">
          <div className=" text-gray-500 flex font-semibold text-sm gap-1 items-center">
            {user.work ? (
              <div className="flex items-center gap-1">
                <MdWork className="text-lg" />
                {user.work}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className=" text-gray-500 flex font-semibold text-sm gap-1 items-center">
            <MdLocationPin className="text-lg" />
            {user?.location || "Unknown"}
          </div>
        </div>
      </div>
      <div className="profilebio mt-2 px-6 lg:px-12 ">
        <h3 className="font-bold mt-6 ">{user?.bio || "Blazora User"}</h3>
        <p className=" text-sm text-gray-800 mt-2">{user?.abouttext || ""}</p>
      </div>
    </div>
  );
};

export default Profiletopimage;
