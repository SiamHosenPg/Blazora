import React from "react";

import { LuSendHorizontal } from "react-icons/lu";

const Conversaition = () => {
  return (
    <div className=" flex h-full flex-col  justify-between">
      <div>Hel</div>
      <div>
        <form
          className="w-full bg-gray-100 rounded-md flex justify-between p-2 "
          action=""
        >
          <input type="text" className="px-3 py-2" />
          <button className=" bg-white py-2 px-3 rounded-full flex items-center justify-center">
            <LuSendHorizontal />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Conversaition;
