import React from "react";
import { useStoryDataContext } from "../../contextapi/Storydatacontext"; // Import the custom hook to access story data context
import StorySmallbox from "./StorySmallbox";

const Storybox = () => {
  const { stories, loading, error } = useStoryDataContext();

  if (loading)
    return (
      <div>
        <div className="flex w-[100%] items-center gap-4 mb-2 sm:mb-4 bg-white rounded-lg py-3 sm:py-4 px-6 overflow-hidden scrollbar-hide">
          <div className=" shrink-0">
            <div className=" bg-gray-100 rounded-full w-12 sm:w-14 h-12 sm:h-14 shrink-0  animate-pulse"></div>

            <div className="h-2 w-full mt-2 bg-gray-200 animate-pulse rounded-full"></div>
          </div>
          <div className=" shrink-0">
            <div className=" bg-gray-100 rounded-full w-12 sm:w-14 h-12 sm:h-14 shrink-0  animate-pulse"></div>

            <div className="h-2 w-full mt-2 bg-gray-200 animate-pulse rounded-full"></div>
          </div>
          <div className=" shrink-0">
            <div className=" bg-gray-100 rounded-full w-12 sm:w-14 h-12 sm:h-14 shrink-0  animate-pulse"></div>

            <div className="h-2 w-full mt-2 bg-gray-200 animate-pulse rounded-full"></div>
          </div>
          <div className=" shrink-0">
            <div className=" bg-gray-100 rounded-full w-12 sm:w-14 h-12 sm:h-14 shrink-0  animate-pulse"></div>

            <div className="h-2 w-full mt-2 bg-gray-200 animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
    );
  // Check if there is an error
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="">
      <div className="flex w-[100%] items-center gap-2 mb-2 sm:mb-4 bg-background rounded-lg py-3 sm:py-4 px-6 overflow-x-scroll no-scrollbar ">
        {stories &&
          stories.map((story, index) => {
            return <StorySmallbox story={story} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Storybox;
