import React from "react";

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
          <button className=" bg-white py-2 px-3">&</button>
        </form>
      </div>
    </div>
  );
};

export default Conversaition;
