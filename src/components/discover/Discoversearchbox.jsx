import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Discoversearchbox = () => {
  return (
    <div className="flex  items-center justify-between w-full p-3 2xl:p-4 rounded-lg bg-white">
      <form
        className="flex items-center justify-between w-3/6  bg-gray-100 rounded-full p-1"
        action=""
      >
        <input
          className="text-sm px-4 py-2 w-full font-semibold "
          type="text"
          placeholder="What you looking?"
        />
        <button className="px-2 py-2 shrink-0 bg-white rounded-full">
          <IoSearchSharp className="text-xl text-gray-500" />
        </button>
      </form>
      <div className="flex items-center pr-4 text-gray-600 gap-4 justify-end w-3/6 ">
        <button className="px-4 py-2 bg-gray-100 rounded-full">People</button>
        <button className="px-4 py-2 bg-gray-100 rounded-full">Post</button>
        <button className="px-4 py-2 bg-gray-100 rounded-full">Groups</button>
        <button className="px-4 py-2 bg-gray-100 rounded-full">Events</button>
        <button className="px-4 py-2 bg-gray-100 rounded-full">Places</button>
      </div>
    </div>
  );
};

export default Discoversearchbox;
