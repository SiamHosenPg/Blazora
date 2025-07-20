import React from "react";
import Leftmessagestatus from "../components/message/Leftmessagestatus";
import Conversaition from "../components/message/Conversaition";
import RightMessagestatus from "../components/message/RightMessagestatus";

const Message = () => {
  return (
    <div className="Pagearea">
      <div className="flex  bg-background mt-0 md:mt-4 rounded-md overflow-hidden">
        <div className="Left w-full  lg:w-[40%] xl:w-[27%]   border-r border-border bg-background overflow-hidden  sticky top-[90px]  h-[calc(100vh_-_110px)]    ">
          <Leftmessagestatus />
        </div>
        <div className="Center h-[calc(100vh_-_110px)] hidden lg:block  flex-1 w-full  lg:w-[44%] border-r border-border">
          <Conversaition />
        </div>
        <div className="Right w-[27%]  hidden xl:block    sticky  top-[90px]  h-[calc(100vh_-_110px)]   ">
          <RightMessagestatus />
        </div>
      </div>
    </div>
  );
};

export default Message;
