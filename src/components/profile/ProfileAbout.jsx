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

const ProfileAbout = () => {
  return (
    <div className="flex flex-col gap-6 px-10 py-6 bg-white rounded-md w-full">
      {/* About Section Title */}
      <h2 className="text-lg font-bold text-[#444]">About</h2>

      {/* User Details */}
      <div className="flex flex-col gap-4 text-[#555] text-sm">
        {/* Education */}
        <div className="flex items-center gap-3">
          <FaGraduationCap className="text-lg " />
          <span>
            Studied at{" "}
            <span className="font-semibold">
              Pabna Government Adoward College
            </span>
          </span>
        </div>
        {/* Work  */}
        <div className="flex items-center gap-3">
          <MdWork className="text-lg " />
          <span>
            Working at{" "}
            <span className="font-semibold">Telecom Engineer at Dhaka</span>
          </span>
        </div>

        {/* Date of Birth */}
        <div className="flex items-center gap-3">
          <FaBirthdayCake className="text-lg " />
          <span>Born on January 15, 1995</span>
        </div>

        {/* Relationship Status */}
        <div className="flex items-center gap-3">
          <FaHeart className="text-lg " />
          <span>In a relationship</span>
        </div>

        {/* Current Location */}
        <div className="flex items-center gap-3">
          <FaHome className="text-lg " />
          <span>
            Lives in New{" "}
            <span className="font-semibold">Khulna Bangladesh</span>
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
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
  );
};

export default ProfileAbout;
