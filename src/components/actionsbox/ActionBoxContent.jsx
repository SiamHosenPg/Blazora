import React from "react";
import { ActionboxData } from "./Actionbox";

const ActionBoxContent = ({ StatusActionBox }) => {
  StatusActionBox == true ? "block" : "hidden";
  return (
    <div className={` ${StatusActionBox} absolute hidden`}>
      <div className="ActionboxContent w-64 bg-white border-df border-1 rounded-lg flex flex-col gap-1 shadow-lg p-2 py-3 absolute top-0 right-0 mt-2">
        {ActionboxData.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 p-2 px-2 rounded-md hover:bg-gray-100 cursor-pointer"
          >
            <item.icon className="text-lg text-gray-600" />
            <span className="text-sm font-medium text-gray-600">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionBoxContent;
