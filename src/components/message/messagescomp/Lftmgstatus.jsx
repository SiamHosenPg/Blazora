import React from "react";

const Lftmgstatus = () => {
  return (
    <div className="mt-4 w-full flex flex-col gap-2 px-4 ">
      <div className="w-full flex gap-3 items-center justify-start transition-all hover:bg-gray-100 px-2 py-2 rounded-md">
        <div className="w-12 h-12 rounded-full shrink-0">
          <img
            className="h-full object-cover rounded-full"
            src="/post/4.jpg"
            alt=""
          />
        </div>
        <div className=" w-5/6">
          <h3 className="font-semibold text-sm ">
            <span className="text-gray-700">Siam Hosen</span>{" "}
            <span className="text-gray-600 text-[12px] font-normal ml-1">
              03:32 PM
            </span>
          </h3>
          <span className="text-sm text-gray-600  w-full block overflow-hidden whitespace-nowrap text-ellipsis truncate">
            Hello siam hosen Kemon aso? Asa kori valo aso amar bangladesh er
            kothe khoub mone pore
          </span>
        </div>
      </div>
      <div className="w-full flex gap-3 items-center justify-start transition-all hover:bg-gray-100 px-2 py-2 rounded-md">
        <div className="w-12 h-12 rounded-full shrink-0">
          <img
            className="h-full object-cover rounded-full"
            src="/post/4.jpg"
            alt=""
          />
        </div>
        <div className=" w-5/6">
          <h3 className="font-semibold text-sm ">
            Siam Hosen{" "}
            <span className="text-gray-600 text-[12px] font-normal ml-1">
              03:32 PM
            </span>
          </h3>
          <span className="text-sm text-gray-600 w-full block overflow-hidden whitespace-nowrap text-ellipsis truncate">
            Can you expline your comunation status?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Lftmgstatus;
