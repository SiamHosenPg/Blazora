import React from "react";
import { MdModeEdit } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { MdWork } from "react-icons/md";

const Profiletopimage = () => {
  return (
    <div className="bg-white rounded-lg mb-6 overflow-hidden w-full pb-8">
      <div className="profiletopimage  overflow-hidden ">
        <img
          src="/post/2.jpg"
          alt=""
          className="aspect-[7/2] object-cover bg-blue-50 w-full"
        />
      </div>

      <div className="profiletopimagedescrition flex items-center justify-start gap-4 px-10 py-2 mt-[-50px] bg-white rounded-lg">
        <div className="pfimage w-[140px] shrink-0 h-[140px] rounded-full overflow-hidden p-[5px] bg-white ">
          <img
            src="/post/4.jpg"
            alt=""
            className="w-full object-cover h-full rounded-full border-df border"
          />
        </div>
        <div className=" w-full pfdescription mt-6 flex items-center gap-2 justify-between">
          <div className="">
            <h2 className="text-xl font-bold flex items-center gap-1">
              Siam Hosen
              <div className="status w-2 h-2 mt-1 bg-green-600 rounded-full  border-white border-1"></div>
            </h2>
            <p className="text-sm text-gray-500">@siamhosenpg</p>
          </div>
          <div className=" flex items-center gap-4">
            <button className=" bg-red-100 rounded-md  px-4 py-2  font-semibold transition duration-200 ease-in-out text-sm text-red-600 flex items-center gap-2">
              <MdModeEdit className=" text-xl text-red-600" />
              Edit Profile{" "}
            </button>
            <button className=" bg-gray-100 rounded-md  px-2 py-2  font-semibold transition duration-200 ease-in-out text-sm text-red-600 flex items-center gap-2">
              <HiDotsVertical className=" text-xl text-gray-900" />
            </button>
          </div>
        </div>
      </div>
      <div className="px-12 flex items-center">
        <div className=" flex items-center text-sm gap-9 font-semibold">
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
        <div className="flex items-center gap-4 ml-auto">
          <div className=" text-gray-500 flex font-semibold text-sm gap-1 items-center">
            <MdWork className="text-lg" />
            Telecom Engineer Dhaka
          </div>
          <div className=" text-gray-500 flex font-semibold text-sm gap-1 items-center">
            <MdLocationPin className="text-lg" />
            Bangladesh
          </div>
        </div>
      </div>
      <div className="profilebio mt-2 px-12">
        <h3 className="font-bold mt-6 ">Front-End Web Developer</h3>
        <p className=" text-sm text-gray-800 mt-2">
          Siam Hossen is a passionate and skilled front-end web developer known
          for creating visually stunning and highly responsive websites. With a
          strong command of HTML, CSS, JavaScript, and modern frameworks like
          React and Tailwind CSS, Siam transforms design concepts into fully
          functional and user-friendly interfaces.
        </p>
      </div>
    </div>
  );
};

export default Profiletopimage;
