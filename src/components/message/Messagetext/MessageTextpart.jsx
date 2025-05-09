import React from "react";

const MessageTextpart = () => {
  return (
    <div>
      <div className="block mt-6  overflow-hidden pb-4 text-center w-fit m-auto">
        <div className="float-left p-1 border border-df w-24 h-24 rounded-full  bg-white">
          <img
            className=" h-full w-full  object-cover  rounded-full  "
            src="/post/3.jpg"
            alt=""
          />
        </div>
        <div className="float-left p-1 border border-df w-24 h-24 rounded-full  bg-white  ml-[-30px]">
          <img
            className=" object-cover  h-full w-full rounded-full   "
            src="/post/7.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="text-center text-sm text-gray-600">
        <b>Siam Hosen</b> Start convertion with <b>Rakib Ahmed</b>
      </div>

      {/* Message Title Bar section  */}
      <div className=" px-4 mt-12 ">
        {/* Message Area  */}
        <div className="  flex flex-col items-end mb-6 ">
          <div className="Id flex items-center flex-row-reverse gap-2">
            <div className="image w-6 h-6 rounded-full">
              <img
                className="w-full h-full object-cover rounded-full overflow-hidden"
                src="/post/7.jpg"
                alt=""
              />
            </div>
            <div className="text-sm font-semibold">Siam Hosen</div>
            <span className="text-[12px] text-[#888]">7 july 2012</span>
          </div>
          <p className="IndexBackground text-white text-sm px-5 py-4 w-fit max-w-5/6 rounded-lg rounded-tr-none mt-2">
            Hey Tamim, I heard you're learning programming? Which language did
            you start with?
          </p>
        </div>
        {/* end message  */}
        <div className="  flex flex-col items-start mb-6 ">
          <div className="Id flex items-center flex-row gap-2">
            <div className="image w-6 h-6 rounded-full">
              <img
                className="w-full h-full object-cover rounded-full overflow-hidden"
                src="/post/7.jpg"
                alt=""
              />
            </div>
            <div className="text-sm font-medium">Siam Hosen</div>
            <span className="text-[12px] text-[#888]">7 july 2012</span>
          </div>
          <p className="bg-[#f5f5f5] text-[#333] text-sm px-5 py-4 w-fit max-w-5/6 rounded-lg rounded-tl-none mt-2">
            Wa Alaikum Assalam! Yeah bro, I started with JavaScript. It’s widely
            used in web development, so I thought it was a good choice.
          </p>
        </div>
        <div className="  flex flex-col items-end  mb-6">
          <div className="Id flex items-center flex-row-reverse gap-2">
            <div className="image w-6 h-6 rounded-full">
              <img
                className="w-full h-full object-cover rounded-full overflow-hidden"
                src="/post/7.jpg"
                alt=""
              />
            </div>
            <div className="text-sm font-medium">Siam Hosen</div>
            <span className="text-[12px] text-[#888]">7 july 2012</span>
          </div>
          <p className="IndexBackground text-white text-sm px-5 py-4 w-fit max-w-5/6 rounded-lg rounded-tr-none mt-2">
            Nice! JavaScript is really powerful. Are you focusing on frontend or
            backend?
          </p>
          <p className="IndexBackground text-white text-sm px-5 py-4 w-fit max-w-5/6 rounded-lg rounded-tr-none mt-2">
            Always welcome! Keep coding!
          </p>
        </div>
        {/* end message  */}
        {/* end message  */}
        <div className="  flex flex-col items-start mb-6 ">
          <div className="Id flex items-center flex-row gap-2">
            <div className="image w-6 h-6 rounded-full">
              <img
                className="w-full h-full object-cover rounded-full overflow-hidden"
                src="/post/7.jpg"
                alt=""
              />
            </div>
            <div className="text-sm font-medium">Siam Hosen</div>
            <span className="text-[12px] text-[#888]">7 july 2012</span>
          </div>
          <p className="bg-[#f5f5f5] text-[#333] text-sm px-5 py-4 w-fit max-w-5/6 rounded-lg rounded-tl-none mt-2">
            Right now, I’m learning frontend. I’m working with React.js. But in
            the future, I want to learn the full MERN stack.
          </p>
        </div>
        {/* End Area  */}
      </div>
      {/* Message Status Section  */}
    </div>
  );
};

export default MessageTextpart;
