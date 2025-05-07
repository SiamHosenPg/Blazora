import React, { useState, useEffect } from "react";

import { HiDotsVertical } from "react-icons/hi";
import { AiOutlineFire } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";

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
    <div className="relative h-[calc(100vh_-_110px)]  m-auto overflow-hidden">
      {shortsData.length > 0 && (
        <div className="h-full w-full flex flex-col items-center  justify-center">
          {/* Video Section */}
          <div className="relative h-full w-full flex items-center justify-center">
            <div className="w-[500px] h-full bg-gray-600 flex items-center justify-center overflow-hidden rounded-md">
              <video
                src={shortsData[currentIndex].videoUrl}
                className="h-auto w-full max-w-full object-cover"
                autoPlay
                loop
              ></video>
              <div className="absolute bottom-10 flex items-start justify-start  w-[500px] text-white px-8">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    className="w-full h-full object-cover"
                    src="/post/4.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">
                    {shortsData[currentIndex].title}
                  </h2>
                  <p className="text-sm ">
                    {shortsData[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Overlay Content */}

            {/* Action Buttons */}
            <div className="absolute  bottom-10 flex ml-[600px] flex-col gap-4">
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
                <HiDotsVertical className="text-2xl" />{" "}
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-5 transform -translate-y-1/2">
            <button
              onClick={() => handleScroll("prev")}
              className=" text-2xl"
              disabled={currentIndex === 0}
            >
              &#8593;
            </button>
          </div>
          <div className="absolute top-1/2 right-5 transform -translate-y-1/2">
            <button
              onClick={() => handleScroll("next")}
              className=" text-2xl"
              disabled={currentIndex === shortsData.length - 1}
            >
              &#8595;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shorts;
