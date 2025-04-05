import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const Newscard = ({ item }) => {
  return (
    <div className="block bg-white  pb-6   hover:shadow-lg transition-shadow duration-300 border border-df">
      <div className="image  overflow-hidden mb-4 border-b border-df">
        <img src={item.newsimage} alt="" className=" aspect-video" />
      </div>
      <h2 className="text-lg font-medium px-6">{item.newstitle}</h2>

      <div className="flex items-center gap-3 mt-2 text-sm text-gray-500 px-6">
        <span className="font-semibold ">{item.authorname} - </span>
        <span>{item.newsdate}</span>
      </div>
      <p className="mt-4 px-6 text-[#444] text-sm  line-clamp-3">
        {item.newsdescrip}
      </p>
      <div className="mt-3 ml-6 flex flex-wrap">
        {item.newscategory.map((Ctg, index) => {
          return (
            <span
              key={index}
              className="text-sm text-[#555] font-semibold  mr-2 mt-2"
            >
              {Ctg},
            </span>
          );
        })}
      </div>
      <button className="flex items-center gap-2 hover:text-[#1d9bf0] font-semibold mt-4 px-6">
        Read more <MdArrowRightAlt className="text-xl" />
      </button>
    </div>
  );
};

export default Newscard;
