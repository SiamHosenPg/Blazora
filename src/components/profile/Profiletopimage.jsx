import React from "react";

const Profiletopimage = () => {
  return (
    <div className="bg-white rounded-lg mb-6 overflow-hidden w-full pb-8">
      <div className="profiletopimage  overflow-hidden ">
        <img
          src="/post/1.jpg"
          alt=""
          className="aspect-[7/2] object-cover bg-blue-50 w-full"
        />
      </div>

      <div className="profiletopimagedescrition flex items-center justify-start gap-4 px-10 py-2 mt-[-50px] bg-white rounded-lg">
        <div className="pfimage w-[140px] shrink-0 h-[140px] rounded-full overflow-hidden p-[5px] bg-white ">
          <img
            src="/post/2.jpg"
            alt=""
            className="w-full object-cover h-full rounded-full border-df border"
          />
        </div>
        <div className=" w-full pfdescription mt-6 flex items-center gap-2 justify-between">
          <div className="">
            <h2 className="text-xl font-bold flex items-center gap-1">
              Siam Hosen
              <div className="status w-2 h-2 mt-1 bg-green-600 rounded-full  border-white border-1"></div>
            </h2>
            <p className="text-sm text-gray-500">Web Developer</p>
          </div>
          <div className="flex items-center text-sm gap-9 font-semibold">
            <div>
              <span className="text-base">76K</span> Flower
            </div>
            <div>
              <span className="text-base">762</span> Flowing
            </div>
            <div>
              <span className=" text-base">698</span> Post
            </div>
          </div>
        </div>
      </div>
      <div className="profilebio mt-2 px-13">
        <p className=" text-sm text-gray-800">
          Siam Hossen is a passionate and skilled front-end web developer known
          for creating visually stunning and highly responsive websites. With a
          strong command of HTML, CSS, JavaScript, and modern frameworks like
          React and Tailwind CSS, Siam transforms design concepts into fully
          functional and user-friendly interfaces.
        </p>
      </div>
    </div>
  );
};

export default Profiletopimage;
