import React from "react";
import Leftmessagestatus from "../components/message/Leftmessagestatus";
import Conversaition from "../components/message/Conversaition";
import RightMessagestatus from "../components/message/RightMessagestatus";

const Message = () => {
  return (
    <div>
      <div className="flex Pagearea  gap-6 xl:gap-6 2xl:gap-6 bg-gray-100">
        <div className="Left  w-[40%] xl:w-[27%] hidden lg:block bg-white  sticky top-[90px]  h-[calc(100vh_-_90px)] rounded-t-lg Scrollbar-Hover p-[16px] ">
          <Leftmessagestatus />
        </div>
        <div className="Center h-[calc(100vh_-_90px)] flex-1 w-full  px-4 lg:w-[44%] bg-white">
          <Conversaition />
        </div>
        <div className="Right w-[27%]  hidden xl:block Scrollbar-Hover bg-white  sticky  top-[90px]  h-[calc(100vh_-_90px)] rounded-t-lg p-[16px] ">
          <RightMessagestatus />
        </div>
      </div>
    </div>
  );
};

export default Message;
