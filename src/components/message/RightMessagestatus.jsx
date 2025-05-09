import React from "react";

import {
  FaGraduationCap,
  FaBirthdayCake,
  FaHeart,
  FaHome,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";

const RightMessagestatus = () => {
  return (
    <div className="">
      <div className="border-b pb-4 border-df">
        <div className="block mt-6  overflow-hidden pb-2 text-center w-fit m-auto">
          <div className=" p-1 border border-df w-24 h-24 rounded-full  bg-white">
            <img
              className=" h-full w-full  object-cover  rounded-full  "
              src="/post/3.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="text-center  text-gray-600">
          <b className="text-base">Siam Hosen</b>
          <span className="block text-sm">Front end Developer</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-6 px-6">
        {/* About Section Title */}

        {/* User Details */}
        <div className="flex flex-col gap-3 2xl:gap-4 text-[#555] text-sm">
          {/* Education */}
          <div className="flex items-start gap-1">
            <FaGraduationCap className="text-lg w-[30px] shrink-0" />
            <span>
              Studied at{" "}
              <span className="font-semibold">
                Pabna Government Adoward College
              </span>
            </span>
          </div>
          {/* Work  */}
          <div className="flex items-start gap-1">
            <MdWork className="text-lg w-[30px] shrink-0" />
            <span>
              Working at{" "}
              <span className="font-semibold">Telecom Engineer at Dhaka</span>
            </span>
          </div>

          {/* Date of Birth */}
          <div className="flex items-start gap-1">
            <FaBirthdayCake className="text-lg w-[30px] shrink-0" />
            <span>
              Born on <span className="font-semibold">January 15, 1995</span>
            </span>
          </div>

          {/* Relationship Status */}
          <div className="flex items-start gap-1">
            <FaHeart className="text-lg w-[30px] shrink-0" />
            <span>
              In a <span className="font-semibold">relationship</span>
            </span>
          </div>

          {/* Current Location */}
          <div className="flex items-start gap-1">
            <FaHome className="text-lg w-[30px] shrink-0" />
            <span>
              Lives in New{" "}
              <span className="font-semibold">Khulna Bangladesh</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 mt-2">
            <span className="font-bold">Social Links:</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-lg " />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-lg " />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-lg " />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-lg " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMessagestatus;
