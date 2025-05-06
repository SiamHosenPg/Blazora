import React from "react";
import Discoversearchbox from "../components/discover/Discoversearchbox";
import Discoversuggestppl from "../components/discover/Discoversuggestppl";
import Discoverpostbox from "../components/discover/Discoverpostbox";

const Discover = () => {
  return (
    <div className="Pagearea">
      <div>
        <Discoversearchbox />
      </div>
      <div className="flex mt-4  items-start justify-between w-full  gap-4">
        <div className="w-7/12 ">
          <Discoverpostbox />
        </div>
        <div className="w-5/12">
          <Discoversuggestppl />
        </div>
      </div>
    </div>
  );
};

export default Discover;
