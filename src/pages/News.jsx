import React from "react";
import { NewsContext } from "../contextapi/Newscontext"; // Importing NewsContext to access news data
import Newscard from "../components/News/Newscard"; // Importing the Newscard component to display individual news items

const News = () => {
  const { newsData } = NewsContext(); // Accessing news data from NewsContext

  return (
    <div className="Pagearea">
      <div>
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-[#444] mb-4">News</h1>
        {/* Page Description */}
        <p className="text-[#555] text-sm mb-6">
          Stay updated with the latest news and trends in the world of social
          media.
        </p>

        {/* News Categories Section */}
        <div className="category">
          <div className="flex items-center flex-wrap gap-4 text-sm text-[#555] mb-6">
            {/* Category Buttons */}
            <button className=" px-3 py-1 border  rounded-full ">All</button>
            <button className="px-3 py-1 border  rounded-full">
              Technology
            </button>
            <button className="px-3 py-1 border  rounded-full">Health</button>
            <button className="px-3 py-1 border  rounded-full">Sports</button>
            <button className="px-3 py-1 border  rounded-full">
              Entertainment
            </button>
            <button className="px-3 py-1 border  rounded-full">Business</button>
            <button className="px-3 py-1 border  rounded-full">Science</button>
            <button className="px-3 py-1 border  rounded-full">Politics</button>
            <button className="px-3 py-1 border  rounded-full">Travel</button>
            <button className="px-3 py-1 border  rounded-full">
              Lifestyle
            </button>
            <button className="px-3 py-1 border  rounded-full">
              Education
            </button>
            <button className="px-3 py-1 border  rounded-full">Opinion</button>
            <button className="px-3 py-1 border  rounded-full">Science</button>
            <button className="px-3 py-1 border  rounded-full">Weather</button>
            <button className="px-3 py-1 border  rounded-full">Finance</button>
          </div>
        </div>
      </div>

      {/* News Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-24">
        {/* Looping through newsData to display each news item */}
        {newsData.map((item, index) => (
          <Newscard item={item} key={index} /> // Rendering Newscard component for each news item
        ))}
      </div>
    </div>
  );
};

export default News;
