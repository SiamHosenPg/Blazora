import React from "react";
import { useStoryDataContext } from "../../contextapi/Storydatacontext"; // Import the custom hook to access story data context

const Storybox = () => {
  const { stories, loading, error } = useStoryDataContext();

  if (loading) return <p>Loading stories...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="">
      <div className="flex w-[100%] items-center gap-2 mb-4 bg-white rounded-lg py-4 px-6 overflow-x-scroll scrollbar-hide">
        {stories &&
          stories.map((story, index) => (
            <div
              key={index}
              className="flex flex-col mx-w-[80px] w-[80px]  items-center  shrink-0 "
            >
              <div className="border-3 border-blue-500 rounded-full w-[60px] h-[60px] p-[4px] ">
                <img
                  className=" aspect-square block rounded-full bg-blue-200  object-cover"
                  src="/profile/3.jpg"
                  alt=""
                />
              </div>
              <span className="block text-[12px]  w-full text-center mt-1 whitespace-nowrap overflow-hidden text-ellipsis ">
                {story.description}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Storybox;
