import React from "react";
import { useStoryDataContext } from "../../contextapi/Storydatacontext"; // Import the custom hook to access story data context

const Storybox = () => {
  const { stories, loading, error } = useStoryDataContext();

  if (loading)
    return (
      <div>
        <div className="flex w-[100%] items-center gap-2 mb-2 sm:mb-4 bg-white rounded-lg py-3 sm:py-4 px-6 overflow-x-scroll scrollbar-hide">
          <div className="flex flex-col mx-w-[80px] w-[70px] sm:w-[80px]  items-center  shrink-0 "></div>
          <div className=" bg-gray-100 rounded-full w-12 sm:w-14 h-12 sm:h-14 p-[4px] "></div>
          <span className="block text-[11px] sm:text-[12px]  w-full text-center mt-1 whitespace-nowrap overflow-hidden text-ellipsis ">
            <div className="h-2 w-12 bg-gray-200 animate-pulse rounded-full"></div>
          </span>
        </div>
      </div>
    );
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="">
      <div className="flex w-[100%] items-center gap-2 mb-2 sm:mb-4 bg-white rounded-lg py-3 sm:py-4 px-6 overflow-x-scroll scrollbar-hide">
        {stories &&
          stories.map((story, index) => (
            <div
              key={index}
              className="flex flex-col mx-w-[80px] w-[70px] sm:w-[80px]  items-center  shrink-0 "
            >
              <div className="border-3 border-blue-500 rounded-full w-12 sm:w-14 h-12 sm:h-14 p-[4px] ">
                <img
                  className=" aspect-square block rounded-full bg-blue-200  object-cover"
                  src="/profile/3.jpg"
                  alt=""
                />
              </div>
              <span className="block text-[11px] sm:text-[12px]  w-full text-center mt-1 whitespace-nowrap overflow-hidden text-ellipsis ">
                {story.description}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Storybox;
