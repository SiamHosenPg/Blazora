import React, { useState, useEffect } from "react";

import { AiOutlineFire } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegBookmark } from "react-icons/fa";

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Shorts = () => {
  const [shortsData, setShortsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch shorts data from JSON file
  useEffect(() => {
    const fetchShorts = async () => {
      try {
        const response = await fetch("/data/Shorts.json");
        const data = await response.json();
        setShortsData(data);
      } catch (error) {
        console.error("Error fetching shorts data:", error);
      }
    };

    fetchShorts();
  }, []);

  // Handle scroll to the next or previous video
  const handleScroll = (direction) => {
    if (direction === "next" && currentIndex < shortsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative h-[calc(100vh_-_110px)]  m-auto mt-0 md:mt-4 overflow-hidden ">
      {shortsData.length > 0 && (
        <div className="h-full w-full flex flex-col items-center  justify-center">
          {/* Video Section */}
          <div className="relative h-full w-full flex items-center justify-center">
            <div className=" aspect-10/17 w-full sm:w-auto  h-full bg-gray-600 flex items-center justify-center overflow-hidden rounded-none  sm:rounded-md">
              <video
                preload="none"
                src={shortsData[currentIndex].videoUrl}
                className="h-auto w-full max-w-full object-cover"
                autoPlay
                loop
              ></video>
              <div className="absolute bottom-10 flex items-start justify-start  gap-3 w-full sm:w-[400px] xl:w-[440px] 2xl:w-[480px]   text-white  px-4 sm:px-6 xl:px-8 pr-12 sm:pr-6 xl:pr-8">
                <div className="w-10 h-10 shrink-0 shadow-md rounded-full overflow-hidden">
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover"
                    src="/post/4.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="font-bold text-shadow-md">
                    {shortsData[currentIndex].title}
                  </h2>
                  <p className="text-sm  text-shadow-md ">
                    {shortsData[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Overlay Content */}

            {/* Action Buttons */}
            <div className="absolute  bottom-10 flex  ml-[86%] sm:ml-[600px] text-white sm:text-black flex-col gap-5">
              <button className=" text-xl flex items-center justify-center flex-col">
                <AiOutlineFire className="text-2xl" />{" "}
                <span className="text-sm font-semibold">
                  {shortsData[currentIndex].likes}
                </span>
              </button>
              <button className=" text-xl flex items-center justify-center flex-col">
                <FaRegComments className="text-2xl" />{" "}
                <span className="text-sm font-semibold">
                  {shortsData[currentIndex].comments}
                </span>
              </button>
              <button className=" text-xl flex items-center justify-center flex-col">
                <RiShareForwardLine className="text-2xl" />{" "}
                <span className="text-sm font-semibold">
                  {shortsData[currentIndex].shares}
                </span>
              </button>
              <button className=" text-xl flex items-center justify-center flex-col">
                <FaRegBookmark className="text-2xl" />{" "}
              </button>
              <button className=" text-xl flex items-center justify-center flex-col">
                <HiDotsHorizontal className="text-2xl" />{" "}
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute hidden sm:flex  bottom-6  items-center justify-between w-full px-4 gap-4 flex-col ml-[-600px]">
            <div className=" ">
              <button
                onClick={() => handleScroll("prev")}
                className=" text-2xl  bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
                disabled={currentIndex === 0}
              >
                <FaAngleUp className="text-2xl" />
              </button>
            </div>
            <div className="">
              <button
                onClick={() => handleScroll("next")}
                className=" text-2xl bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
                disabled={currentIndex === shortsData.length - 1}
              >
                <FaAngleDown className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shorts;
