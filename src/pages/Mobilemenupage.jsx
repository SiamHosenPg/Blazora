import React from "react";

const Mobilemenupage = () => {
  return (
    <div className="">
      <div className="Pagearea flex flex-col gap-4 items-start justify-start overflow-visible">
        <div className="flex flex-col lg:flex-row gap-6 items-start justify-between overflow-visible">
          <div className="leftfeed w-full lg:w-7/12 static lg:sticky space-y-4">
            <h1 className="text-2xl font-bold">Mobile Menu Page</h1>
            {/* Add your content here */}
          </div>
        </div>
        <div className="rightfeed flex-1 w-full lg:w-5/12">
          {/* Add your content here */}
          <h2 className="text-xl font-semibold">Right Feed</h2>
          <p>This is the right feed area.</p>
        </div>
      </div>
    </div>
  );
};

export default Mobilemenupage;
