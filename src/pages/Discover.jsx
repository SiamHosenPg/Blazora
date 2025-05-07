import React, { useEffect, useRef, useState } from "react";
import Discoversuggestppl from "../components/discover/Discoversuggestppl";
import Discoverpostbox from "../components/discover/Discoverpostbox";

const Discover = () => {
  return (
    <div className="Pagearea">
      <div className="flex   items-start justify-between w-full  gap-6">
        <div className="w-7/12 ">
          <Discoverpostbox />
        </div>
        <div className="w-5/12 ">
          <Discoversuggestppl />
        </div>
      </div>
    </div>
  );
};

export default Discover;
